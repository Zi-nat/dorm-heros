import { connect } from 'react-redux';
import lifecycle from 'recompose/lifecycle';
import compose from 'recompose/compose';
import withState from 'recompose/withState';
import CreateIssue from './CreateIssue';
import { createNewIssue, setIssue } from 'redux/actions/createIssue';
import { Navigation } from 'react-native-navigation';

const mapStateToProps = state => ({
    types: state.disturbanceType.types,
    issue: state.createIssue.issue,
    isLoading: state.createIssue.isLoading,
    response: state.createIssue.res
});

const mapDispatchToProps = dispatch => ({
    createNewIssue: (issue) => dispatch(createNewIssue(issue)),
    setIssue: () => dispatch(setIssue())
});


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withState('valid', 'validation', false),
    withState('showModal', 'visible', false),
    withState('showInvolvedPeople', 'involvedPeopleVisible', true),
    lifecycle({
        componentDidMount() {
            this.props.setIssue();
        },
        shouldComponentUpdate(nextProps) {
            if (this.props.isLoading && !nextProps.isLoading) {
                this.setState({ showModal: true });
                setTimeout(() => {
                    this.setState({ showModal: false });
                    Navigation.popToRoot(this.props.componentId);
                }, 5000)
            }
            return true;
        }
    }),
)(CreateIssue);
