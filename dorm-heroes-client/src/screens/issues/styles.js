import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eef0f6"
  },
  activityIndicatorContainer: {
    marginTop: 250
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  line: {
    height: 20,
    width: "100%",
    backgroundColor: "rgba(255,255,255,0.5)"
  },

  issueViewContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eef0f6",
    padding: 10
  },
  flatListContainer: {
    alignSelf: "stretch"
  },
  navi: {
    position: "absolute",
    zIndex: 5,
    height: 200,
    paddingRight: 0
  },
  fab: {
    position: "absolute",
    width: 56,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    right: 20,
    bottom: 20,
    backgroundColor: "#5caa2f",
    borderRadius: 30,
    elevation: 8
  },
  fabIcon: {
    fontSize: 40,
    color: "white"
  },
  messageText: {
    flex: 1,
    flexDirection: "column",
    fontSize: 18,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center"
  }
});
