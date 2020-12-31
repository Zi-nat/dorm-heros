import { StyleSheet } from "react-native";

export default StyleSheet.create({
  activityIndicatorContainer: {
    marginTop: 250
  },
  content: {
    backgroundColor: "#e2e5ea",
    padding: 12,
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
  contentTitleContainer: {
    borderBottomColor: "#c0cbe0",
    borderBottomWidth: 1,
    marginBottom: 10
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 8,
    fontWeight: "bold"
  },
  messageText: {
    fontSize: 17,
    marginTop: 12,
    marginBottom: 12
  },
  image: {
    alignItems: "center",
    justifyContent: "center"
  },
  bottomModal: {
    justifyContent: "flex-end",
    margin: 0
  },
  container: {
    flex: 1,
    backgroundColor: "#eef0f6"
  },
  text: {
    borderTopColor: "#e2e5ea",
    borderTopWidth: 2,
    paddingTop: 10,
    fontWeight: "bold",
    fontSize: 17,
    color: "#6b7897",
    marginBottom: 5,
    marginTop: 10,
    margin: 30
  },
  textFirstElement: {
    borderTopWidth: 0,
    paddingTop: 0
  },
  button: {
    backgroundColor: "#5caa2f",
    margin: 20,
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4
  },
  buttonDisabled: {
    backgroundColor: "#a7d39f",
    margin: 20,
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4
  },
  buttonText: {
    color: "#eef0f6",
    fontSize: 17,
    fontWeight: "bold"
  },
  descriptionLength: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "flex-end",
    justifyContent: "flex-end",
    marginRight: 30
  },
  pickerWrapper: {
    margin: 30,
    marginTop: 0,
    marginBottom: 4,
    paddingLeft: 16,
    backgroundColor: "#fff",
    borderWidth: 1,
    height: 50,
    borderColor: "#e2e5ea",
    borderRadius: 5
  },
  iosPickerWrapper: {
    height: 110
  },
  picker: {
    color: "#6b7897"
  }
});
