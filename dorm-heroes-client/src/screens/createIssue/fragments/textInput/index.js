import compose from 'recompose/compose';
import withState from 'recompose/withState';
import TextInput from './TextInput';

export default compose(
    withState('focused', 'setFocused', false), //method, name von function ,
)(TextInput);
