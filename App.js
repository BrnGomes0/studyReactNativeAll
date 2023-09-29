import { 
  StyleSheet, 
  Text, 
  View,
  SafeAreaView,
} from 'react-native';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import ConfirmEmailScreen from './src/screens/ConfirmEmailScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen.js/ForgotPasswordScreen';
export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      <ForgotPasswordScreen/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root : {
    flex: 1,
    backgroundColor: '#f9fbfc',
  }
});
