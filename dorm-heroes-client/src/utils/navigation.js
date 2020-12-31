import { Navigation } from 'react-native-navigation';


const defaultNavigatorStyles = {
    navBarTextColor: '#6b7897',
    navBarTextFontSize: 20,
    topBarBorderColor: '#e2e5ea',
    topBarBorderWidth: 5.5,
    navBarBackgroundColor: '#fff',
    topBarElevationShadowEnabled: false,
    statusBarTextColorScheme: 'dark',
    statusBarColor: '#fff',
    navBarNoBorder: false,
};


const tabsStyle = {
    ...defaultNavigatorStyles,
    disableIconTint: true,
    disableIconTin: true,
};



export const startScreen = (screen, title = '', navigationStyles = {}, options = {}) => Navigation.startSingleScreenApp({
    screen: {
        screen,
        title,
        navigatorStyle: {
            ...defaultNavigatorStyles,
            ...navigationStyles,
        },
    },
    backButtonHidden: false,
    animationType: 'slide-horizontal',
    ...options,
});


export const pushScreen = (
    navigator, screen, title, navigationStyles = {}, options = {},
) => navigator.push({
    screen,
    title,
    navigatorStyle: {
        ...defaultNavigatorStyles,
        ...navigationStyles,
    },
    backButtonHidden: false,
    animationType: 'slide-horizontal',
    ...options,
});
