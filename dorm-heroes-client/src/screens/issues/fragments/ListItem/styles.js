import { StyleSheet } from "react-native";

export default (styles = StyleSheet.create({
  listItemMainContainer: {
    flex: 1,
    flexDirection: "row",
    paddingRight: 10,
    marginTop: 0,
    marginBottom: 6,
    borderColor: "#e2e5ea",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 10
  },

  infoContainer: {
    flex: 1,
    flexDirection: "column"
  },
  statusContainer: {
    justifyContent: "center",
    borderRightColor: "#e2e5ea",
    borderRightWidth: 2,
    borderRadius: 10,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: "#d7d8dd",
    marginRight: 5,
    padding: 5
  },
  topRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "#e2e5ea",
    borderBottomWidth: 1,
    marginTop: 3
  },

  betweenRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 3,
    marginBottom: 3
  },

  titleTextFormat: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold"
  },

  statusTextFormat: {
    color: "black",
    fontSize: 16
  },

  text: {
    color: "black",
    fontSize: 16
  },

  statusPart: {
    flex: 1,
    flexDirection: "row", // main axis
    justifyContent: "flex-end" // main axis
  },

  unterPart: {
    flexWrap: "wrap",
    flexDirection: "row", // main axis
    justifyContent: "flex-end", // main axis
    marginBottom: 5,
    marginTop: 20
  },
  descriptionContainer: {
    flex: 1,
    flexDirection: "row", // main axis
    marginTop: 8,
    marginBottom: 5,
    borderTopColor: "#e2e5ea",
    borderTopWidth: 2
  },
  descriptionTitle: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5
  },
  descriptionText: {
    color: "black",
    fontSize: 16,
    marginTop: 5
  }
}));
