import { connect } from 'react-redux';
import lifecycle from 'recompose/lifecycle';
import compose from 'recompose/compose';

import Messages from './Issues';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    lifecycle({
        componentDidMount() {
        }
    }),
)(Messages);
