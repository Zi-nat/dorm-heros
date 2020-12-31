import React, {Component} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {pushScreen} from '../../utils/navigation';
import styles from './styles'


const instructions = 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for  dev menu\n' +
    'Test if everything work';

type Props = {};
export default class Issues extends Component<Props> {

    onPress = () => {
        /*pushScreen(
            navigator,
            'DormHero.createNewMessage',
            'createNewMessage',
            {
                topBarElevationShadowEnabled: true,
            },
            {
                backButtonHidden: false,
            },
        );*/
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={this.onPress}>
                    <Text>Create New Message</Text>
                </TouchableOpacity>
            </View>
        );
    }
}


