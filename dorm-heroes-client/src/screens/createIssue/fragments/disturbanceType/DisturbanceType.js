import React from "react";
import {
  PickerIOS,
  Picker,
  View,
  Platform,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import PropTypes from "prop-types";
import styles from "../styles";
import stylesModal from "screens/createIssue/styles";

import Modal from "react-native-modal";
import errorImg from "res/modalImages/error.png";
const MODAL_TITLE_FAILED = "Disturbance type load failed!";

let loadingSize;
let modal = {
  title: MODAL_TITLE_FAILED,
  icon: errorImg,
  message: ""
};

const DisturbanceType = ({
  types,
  currentType,
  setCurrentDisturbanceType,
  callbackFromParent,
  showModal,
  response,
  isLoading
}) => {
  let choices;
  if (types && types.length > 0) {
    choices = types.map(types => (
      <Picker.Item key={types._id} value={types} label={types.type} />
    ));
  } else {
    choices = (
      <Picker.Item label="Please select an disturbance type..." value="0" />
    );
  }

  if (response && response.message) {
    modal.message = response.message;
  }

  if (Platform.OS === "ios") {
    loadingSize = "small";
  } else {
    loadingSize = 40;
  }

  const androidPlatform = () => {
    if (Platform.OS === "android") return true;
    return false;
  };

  return (
    <View>
      {!isLoading && androidPlatform() && (
        <View style={styles.pickerWrapper}>
          <Picker
            style={styles.picker}
            selectedValue={currentType}
            onValueChange={chosenItem => {
              setCurrentDisturbanceType(chosenItem);
              callbackFromParent(chosenItem);
            }}
          >
            {choices}
          </Picker>
        </View>
      )}
      {!isLoading && !androidPlatform() && (
        <View>
          <PickerIOS
            itemStyle={styles.iosPickerWrapper}
            selectedValue={currentType}
            onValueChange={chosenItem => {
              setCurrentDisturbanceType(chosenItem);
              callbackFromParent(chosenItem);
            }}
          >
            {choices}
          </PickerIOS>
        </View>
      )}
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
      <View style={stylesModal.componentContainer}>
        <Modal
          isVisible={showModal}
          animationInTiming={1000}
          animationOutTiming={1000}
          backdropTransitionInTiming={800}
          backdropTransitionOutTiming={800}
        >
          <View style={stylesModal.content}>
            <View style={stylesModal.contentTitleContainer}>
              <Text style={stylesModal.contentTitle}>{modal.title}</Text>
            </View>
            <View style={stylesModal.image}>
              <Image source={modal.icon} />
              <Text style={stylesModal.messageText}>{modal.message}</Text>
              <TouchableOpacity onPress={() => visible(true)} title="Close" />
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

DisturbanceType.propTypes = {
  response: PropTypes.object,
  currentType: PropTypes.object,
  types: PropTypes.array,
  callbackFromParent: PropTypes.func,
  setCurrentDisturbanceType: PropTypes.func,
  showModal: PropTypes.bool,
  isLoading: PropTypes.bool
};

export default DisturbanceType;
