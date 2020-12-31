import { connect } from "react-redux";
import lifecycle from "recompose/lifecycle";
import compose from "recompose/compose";
import Issues from "./Issues";
import withState from "recompose/withState";
import { fetchIssues } from "redux/actions/issues";

const mapStateToProps = state => ({
  issues: state.issues.issues,
  isLoading: state.issues.isLoading,
  error: state.issues.error
});

const mapDispatchToProps = dispatch => ({
  fetchIssues: () => dispatch(fetchIssues())
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withState("isRefreshing", "refresh", false),
  lifecycle({
    componentDidMount() {
      this.props.fetchIssues();
    }
  })
)(Issues);
