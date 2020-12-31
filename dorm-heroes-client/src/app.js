/* eslint no-console: "off" */
import {Navigation} from 'react-native-navigation';
import {startScreen} from './utils/navigation';
import {registerScreens} from './screens/registerScreens';
import {Store} from './redux/store';
import Provider from './utils/provider';


registerScreens(Store, Provider); // this is where you register all of your app's screens


// call from index.js
export default function init() {
    console.disableYellowBox = true;
    Navigation
        .isAppLaunched()
        .then((appLaunched) => {
            startScreen('DormHero', 'Issues');
        })
}
