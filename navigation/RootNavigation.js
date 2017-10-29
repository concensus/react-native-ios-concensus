import { Notifications } from 'expo';
import React from 'react';
import { StackNavigator } from 'react-navigation';
import MainScreen from '../screens/MainScreen';
import NewPollScreen from '../screens/NewPollScreen';
import PollScreen from '../screens/PollScreen';
import JoinPollScreen from '../screens/JoinPollScreen';
import PollResultsScreen from '../screens/PollResultsScreen';
import QRCodeShowerScreen from '../screens/QRCodeShowerScreen';
import CreateAccountScreen from '../screens/CreateAccountScreen';

import registerForPushNotificationsAsync from '../api/registerForPushNotificationsAsync';

const RootStackNavigator = StackNavigator(
  {
    Home: {
      screen: MainScreen,
    },
    NewPoll: {
      screen: NewPollScreen,
    },
    Poll: {
      screen: PollScreen,
    },
    CreateAccount: {
      screen: CreateAccountScreen,
    },
    JoinPoll: {
      screen: JoinPollScreen,
    },
    PollResults: {
      screen: PollResultsScreen,
    },
    QRCodeShower: {
      screen: QRCodeShowerScreen,
    },
  },
  {
    navigationOptions: () => ({
      headerTitleAllowFontScaling: false,
      headerStyle: {
        backgroundColor: '#EFEFEF',
      },
      headerTitleStyle: {
        fontWeight: 'normal',
        fontFamily: 'Baskerville',
        color: '#333',
        fontSize: 20,
      },
      headerBackTitle: null,
      headerTintColor: '#333',
    }),
  }
);

export default class RootNavigator extends React.Component {
  componentDidMount() {
    this._notificationSubscription = this._registerForPushNotifications();
  }

  componentWillUnmount() {
    this._notificationSubscription && this._notificationSubscription.remove();
  }

  render() {
    return <RootStackNavigator />;
  }

  _registerForPushNotifications() {
    // Send our push token over to our backend so we can receive notifications
    // You can comment the following line out if you want to stop receiving
    // a notification every time you open the app. Check out the source
    // for this function in api/registerForPushNotificationsAsync.js
    registerForPushNotificationsAsync();

    // Watch for incoming notifications
    this._notificationSubscription = Notifications.addListener(this._handleNotification);
  }

  _handleNotification = ({ origin, data }) => {
    console.log(`Push notification ${origin} with data: ${JSON.stringify(data)}`);
  };
}
