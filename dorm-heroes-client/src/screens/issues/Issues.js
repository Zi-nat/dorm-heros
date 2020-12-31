import React from "react";
import { TouchableOpacity, Text, View, FlatList } from "react-native";
import PropTypes from "prop-types";
import { pushScreen } from "utils/navigation";
import styles from "./styles";
import ListItem from "./fragments/ListItem";

let showEmptyMessage = false;
let showErrorMessage = false;

const Issues = ({ componentId, issues, error, fetchIssues }) => {
  const createNewIssue = () => {
    pushScreen(componentId, "dorm.heroes.createIssue", "New Issue");
  };

  !issues.length && !error
    ? (showEmptyMessage = true)
    : (showEmptyMessage = false);

  error
    ? ((showErrorMessage = true), (showEmptyMessage = false))
    : (showErrorMessage = false);
  const handleRefresh = () => {
    fetchIssues();
  };
  return (
    <View style={styles.issueViewContainer}>
      {showEmptyMessage && (
        <Text style={styles.messageText}>There is no issue to show!</Text>
      )}
      {showErrorMessage && (
        <Text style={styles.messageText}>{error.message}</Text>
      )}
      <FlatList
        data={issues}
        style={styles.flatListContainer}
        onRefresh={handleRefresh()}
        renderItem={({ item, index }) => (
          <ListItem
            title={item.title}
            disturbanceType={item.disturbanceType}
            status={item.status}
            location={item.location}
            description={item.description}
            numberOfInvolvedPeople={item.numberOfInvolvedPeople}
            date={item.creationDate.split("T")[0]}
            time={`${
              item.creationDate
                .split("T")[1]
                .split(".")[0]
                .split(":")[0]
            }:${
              item.creationDate
                .split("T")[1]
                .split(".")[0]
                .split(":")[1]
            } (MET)`}
            index={index}
          />
        )}
        disableVirtualization
      />

      <TouchableOpacity onPress={createNewIssue} style={styles.fab}>
        <Text style={styles.fabIcon}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

Issues.propTypes = {
  componentId: PropTypes.string,
  isLoading: PropTypes.bool,
  error: PropTypes.object,
  issues: PropTypes.array
};

export default Issues;
