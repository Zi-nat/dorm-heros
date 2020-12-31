import { Navigation } from 'react-native-navigation';
import Issues from './issuses';


export function registerScreens(store, provider) {
    Navigation.registerComponent('DormHero', () => Issues, store, provider);
}

