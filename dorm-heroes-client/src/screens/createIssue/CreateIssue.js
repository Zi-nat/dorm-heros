import React from "react";
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  Platform,
  Picker,
  PickerIOS
} from "react-native";
import Modal from "react-native-modal";
import PropTypes from "prop-types";
import { issueValidator } from "utils/createIssueUtil";
import TextInputNormal from "./fragments/textInput";
import DisturbanceType from "./fragments/disturbanceType";
import checkImg from "res/modalImages/check.png";
import errorImg from "res/modalImages/error.png";
import styles from "./styles";

const TITLE_PLACEHOLDER = "Please enter the title (min. 5 chars)";
const LOCATION_PLACEHOLDER = "Please enter the location of the Issue";
const DESCRIPTION_PLACEHOLDER = "Please describe the Issue ...";
const MODAL_TITLE_SUCCESSFUL = "Issue created successfully!";
const MODAL_TITLE_FAILED = "Issue creation failed!";
const numberOfInvolvedPeopleArray = [
  {
    _id: "5d10fe191c9d440000f68fd3",
    interval: "1-3"
  },
  {
    _id: "5d220fc91c9d4400002a2b92",
    interval: "4-6"
  },
  {
    _id: "5d2213491c9d4400002a2b93",
    interval: "7-9"
  },
  {
    _id: "5d22136b1c9d4400002a2b94",
    interval: "10+"
  }
];

let buttonStyle;
let loadingSize;
let currentNumberOfInvolvedPeople;

const CreateIssue = ({
  issue,
  isLoading,
  response,
  createNewIssue,
  valid,
  validation,
  showModal,
  visible,
  componentId,
  showInvolvedPeople,
  involvedPeopleVisible,
  types
}) => {
  let modal = {
    title: MODAL_TITLE_SUCCESSFUL,
    icon: checkImg,
    message: ""
  };

  if (response !== null) {
    if (200 <= response.status && response.status < 300) {
      modal.message = response.message;
    } else {
      modal.title = MODAL_TITLE_FAILED;
      modal.icon = errorImg;
      modal.message = response.message;
    }
  }

  Platform.OS === "ios" ? (loadingSize = "large") : (loadingSize = 80);

  const androidPlatform = () => {
    if (Platform.OS === "android") return true;
    return false;
  };
  let choices;
  choices = numberOfInvolvedPeopleArray.map(interval => (
    <Picker.Item
      key={interval._id}
      value={interval}
      label={interval.interval}
    />
  ));

  if (valid) {
    buttonStyle = styles.button;
  } else {
    buttonStyle = styles.buttonDisabled;
  }

  const onValueChange = (data, type) => {
    switch (type) {
      case "TITLE":
        issue.title = data.trim();
        break;
      case "LOCATION":
        issue.location = data.trim();
        break;
      case "DESCRIPTION":
        issue.description = data.trim();
        break;
      case "NUMBER_OF_INVOLVED_PEOPLE":
        issue.numberOfInvolvedPeople = data._id;
        currentNumberOfInvolvedPeople = data;
        break;
    }
    issue.disturbanceType
      ? issue.disturbanceType
      : (issue.disturbanceType = types[0]._id);
    validation(issueValidator(issue));
  };

  !issue.numberOfInvolvedPeople && issue.numberOfInvolvedPeople != null
    ? ((issue.numberOfInvolvedPeople = numberOfInvolvedPeopleArray[0]._id),
      (currentNumberOfInvolvedPeople = numberOfInvolvedPeopleArray[0]))
    : (issue.numberOfInvolvedPeople = issue.numberOfInvolvedPeople);

  const setDisturbanceType = disturbanceType => {
    issue.disturbanceType = disturbanceType._id;
    involvedPeopleVisible(disturbanceType.isNumberOfInvolvedPeopleMandatory);
    disturbanceType.isNumberOfInvolvedPeopleMandatory
      ? ((issue.numberOfInvolvedPeople = numberOfInvolvedPeopleArray[0]._id),
        (currentNumberOfInvolvedPeople = numberOfInvolvedPeopleArray[0]))
      : (issue.numberOfInvolvedPeople = null);
  };

  const createIssue = () => {
    console.log(issue);
    createNewIssue(issue);
  };

  return (
    <ScrollView style={styles.container}>
      {isLoading && (
        <View
          style={[
            styles.activityIndicatorContainer,
            styles.activityIndicatorHorizontal
          ]}
        >
          <ActivityIndicator size={loadingSize} color="#5caa2f" />
        </View>
      )}
      {!isLoading && (
        <View>
          <View style={styles.componentContainer}>
            <Modal
              isVisible={showModal}
              animationInTiming={1000}
              animationOutTiming={1000}
              backdropTransitionInTiming={800}
              backdropTransitionOutTiming={800}
            >
              <View style={styles.content}>
                <View style={styles.contentTitleContainer}>
                  <Text style={styles.contentTitle}>{modal.title}</Text>
                </View>
                <View style={styles.image}>
                  <Image source={modal.icon} />
                  <Text style={styles.messageText}>{modal.message}</Text>
                  <TouchableOpacity
                    onPress={() => visible(true)}
                    title="Close"
                  />
                </View>
              </View>
            </Modal>
          </View>
          <View>
            <Text style={[styles.text, styles.textFirstElement]}>Title *</Text>
            <TextInputNormal
              placeholder={TITLE_PLACEHOLDER}
              maxLength={35}
              onValueChange={text => {
                onValueChange(text, "TITLE");
              }}
            />
          </View>
          <View>
            <Text style={styles.text}>Type *</Text>
            <DisturbanceType
              componentId={componentId}
              callbackFromParent={dataFromChild => {
                setDisturbanceType(dataFromChild);
              }}
            />
          </View>
          <View>
            <Text style={styles.text}>Location *</Text>
            <TextInputNormal
              placeholder={LOCATION_PLACEHOLDER}
              onValueChange={text => {
                onValueChange(text, "LOCATION");
              }}
            />
          </View>
          <View>
            <Text style={styles.text}>Description *</Text>
            <Text style={styles.descriptionLength}>
              ({issue.description ? issue.description.length : 0}/500)
            </Text>
            <TextInputNormal
              placeholder={DESCRIPTION_PLACEHOLDER}
              textAlignVertical={"top"}
              multiline={true}
              maxLength={500}
              onValueChange={text => {
                onValueChange(text, "DESCRIPTION");
              }}
            />
          </View>
          <View>
            {showInvolvedPeople && (
              <View>
                <Text style={styles.text}>Number Of People</Text>
                {androidPlatform() && (
                  <View style={styles.pickerWrapper}>
                    <Picker
                      style={styles.picker}
                      selectedValue={currentNumberOfInvolvedPeople}
                      onValueChange={chosenItem => {
                        onValueChange(chosenItem, "NUMBER_OF_INVOLVED_PEOPLE");
                      }}
                    >
                      {choices}
                    </Picker>
                  </View>
                )}
                {!androidPlatform() && (
                  <View style={styles.pickerWrapper}>
                    <PickerIOS
                      itemStyle={styles.iosPickerWrapper}
                      selectedValue={currentNumberOfInvolvedPeople}
                      onValueChange={chosenItem => {
                        onValueChange(chosenItem, "NUMBER_OF_INVOLVED_PEOPLE");
                      }}
                    >
                      {choices}
                    </PickerIOS>
                  </View>
                )}
              </View>
            )}
          </View>
          <TouchableOpacity
            style={buttonStyle}
            onPress={createIssue}
            disabled={!valid}
          >
            <Text style={styles.buttonText}>Create the Issue</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
};

CreateIssue.propTypes = {
  issue: PropTypes.object,
  createNewIssue: PropTypes.func,
  isLoading: PropTypes.bool,
  valid: PropTypes.bool,
  validation: PropTypes.func,
  showModal: PropTypes.bool,
  visible: PropTypes.func,
  showInvolvedPeople: PropTypes.bool,
  involvedPeopleVisible: PropTypes.func,
  types: PropTypes.array
};

CreateIssue.defaultProps = {
  issue: {}
};

export default CreateIssue;
