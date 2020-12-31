import withState from "recompose/withState";
import { connect } from "react-redux";
import DisturbanceType from "./DisturbanceType";
import {
  fetchDisturbanceTypes,
  setCurrentDisturbanceType,
  setInitialState
} from "redux/actions/disturbanceType";
import lifecycle from "recompose/lifecycle";
import compose from "recompose/compose";
import { Navigation } from "react-native-navigation";

const mapStateToProps = state => ({
  types: state.disturbanceType.types,
  isLoading: state.disturbanceType.isLoading,
  currentType: state.disturbanceType.currentType,
  response: state.disturbanceType.response,
  isErrorOccurred: state.disturbanceType.isErrorOccurred
});

const mapDispatchToProps = dispatch => ({
  fetchDisturbanceTypes: () => dispatch(fetchDisturbanceTypes()),
  setCurrentDisturbanceType: currentType =>
    dispatch(setCurrentDisturbanceType(currentType)),
  setInitialState: () => dispatch(setInitialState())
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withState("focused", "setFocused", false),
  withState("showModal", "visible", false),
  lifecycle({
    componentDidMount() {
      this.props.setInitialState();
      this.props.fetchDisturbanceTypes();
    },
    shouldComponentUpdate(nextProps) {
      if (!this.props.isErrorOccurred && nextProps.isErrorOccurred) {
        this.setState({ showModal: true });
        setTimeout(() => {
          this.setState({ showModal: false });
          Navigation.popToRoot(this.props.componentId);
        }, 5000);
      }
      return true;
    }
  })
)(DisturbanceType);
