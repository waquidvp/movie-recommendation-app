import { StackNavigator } from 'react-navigation';

import Login from './Login';
import Signup from './Signup';

// defines a stack navigator
const OnboardingStack = StackNavigator(
  {
    Login: {
      screen: Login,
    },
    Signup: {
      screen: Signup,
    },
  },
  {
    navigationOptions: {
      header: null,
    },
    initialRouteName: 'Login',
  },
);

export default OnboardingStack;
