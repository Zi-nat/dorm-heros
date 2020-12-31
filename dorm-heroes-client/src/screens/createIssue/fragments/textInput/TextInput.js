import React from 'react';
import { TextInput, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../styles';

const TextInputNormal = ({focused, setFocused, placeholder, keyboardType, multiline, maxLength, textAlignVertical, onValueChange}) => {
    let wrapper;

    if (multiline) {
        wrapper = styles.multilineTextInputWrapper
    } else {
        wrapper = styles.textInputWrapper;
    }

    if (focused) {
        if (multiline) {
            wrapper = styles.multilineTextInputWrapperFocused
        } else {
            wrapper = styles.textInputFocused;
        }
    }
    return (
        <View style={wrapper}>
            <TextInput style={styles.textInput}
                       placeholderTextColor="#c6cbd5"
                       placeholder={placeholder}
                       keyboardType={keyboardType}
                       maxLength={maxLength}
                       onFocus={() => setFocused(true)}
                       onBlur={() => setFocused(false)}
                       multiline={multiline}
                       textAlignVertical={textAlignVertical}
                       onChangeText={x => onValueChange (x)}
            />
        </View>
    );
};

TextInputNormal.propTypes = {
    focused: PropTypes.bool,
    setFocused: PropTypes.func,
    placeholder: PropTypes.string.isRequired,
    keyboardType: PropTypes.string,
    multiline: PropTypes.bool,
    textAlignVertical: PropTypes.string,
    onValueChange: PropTypes.func,
    maxLength: PropTypes.number,
};

TextInputNormal.defaultProps = {
    focused: false,
    multiline: false
};

export default TextInputNormal;


