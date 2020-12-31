import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";
import tickIcon from "res/tick.png";

let showDescription = false;

const listItem = props => {
  let showNumberOfInvolvedPeople;
  props.numberOfInvolvedPeople
    ? (showNumberOfInvolvedPeople = true)
    : (showNumberOfInvolvedPeople = false);

  const descriptionVisibility = () => {
    showDescription = !showDescription;
  };
  return (
    <TouchableOpacity
      style={styles.listItemMainContainer}
      onPress={descriptionVisibility}
    >
      <View style={styles.statusContainer}>
        <Image source={tickIcon} />
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.topRow}>
          <Text style={styles.titleTextFormat}> {props.title} </Text>
          <Text style={styles.statusTextFormat}> {props.date} </Text>
        </View>
        <View style={styles.betweenRow}>
          <Text style={styles.statusTextFormat}> {props.disturbanceType} </Text>
          {showNumberOfInvolvedPeople && (
            <Text style={styles.statusTextFormat}>
              {props.numberOfInvolvedPeople}
            </Text>
          )}
        </View>
        <View style={styles.unterPart}>
          <View style={styles.titlePart}>
            <Text style={styles.text}> {props.location} </Text>
          </View>
          <View style={styles.statusPart}>
            <Text style={styles.text}> {props.time} </Text>
          </View>
        </View>
        {showDescription && (
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionTitle}>Description: </Text>
            <Text style={styles.descriptionText}>{props.description}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

listItem.propTypes = {
  reportType: PropTypes.string
};

export default listItem;
