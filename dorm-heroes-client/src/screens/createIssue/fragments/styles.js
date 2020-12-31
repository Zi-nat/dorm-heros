import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    textInputWrapper: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#e2e5ea',
        borderRadius: 5,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 16,
        marginBottom: 4,
        marginTop: 0,
        margin: 30
    },
    textInputFocused: {
        elevation: 1,
        borderWidth: 2,
        borderColor: '#8BC329',
        backgroundColor: '#fff',
        borderRadius: 5,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 16,
        marginTop: 0,
        marginBottom: 4,
        margin: 30
    },
    multilineTextInputWrapper: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#e2e5ea',
        borderRadius: 5,
        height: 100,
        flexDirection: 'row',
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 10,
        marginTop: 0,
        marginBottom: 4,
        margin: 30
    },
    multilineTextInputWrapperFocused: {
        elevation: 1,
        borderWidth: 2,
        borderColor: '#8BC329',
        backgroundColor: '#fff',
        borderRadius: 5,
        height: 100,
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 10,
        marginTop: 0,
        marginBottom: 4,
        margin: 30
    },
    textInput: {
        fontSize: 15,
        color: '#6b7897',
    },

    pickerWrapper: {
        margin: 30,
        marginTop: 0,
        marginBottom: 4,
        paddingLeft: 16,
        backgroundColor: '#fff',
        borderWidth: 1,
        height: 50,
        borderColor: '#e2e5ea',
        borderRadius: 5,
    },
    iosPickerWrapper: {
        height: 110,
    },
    picker: {
        color: '#6b7897',
    },
});
