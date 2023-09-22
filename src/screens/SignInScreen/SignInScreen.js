import React, {
    useState,
} from 'react'
import { 
    View, 
    Text, 
    Image,
    StyleSheet, 
    useWindowDimensions,
    ScrollView,
} from 'react-native'
import Logo from '../../../assets/imgs/Logo.png'
import CustoInput from '../../components/CustoInput'
import CustomButton from '../../components/CustomButton'



const SignInScreen = () => {
    const {height} = useWindowDimensions();
    const [username, setUsername] = useState(""); // For username
    const [password, setPassword] = useState(""); // For password
    const onSignInPress = () => {
        console.warn("Sign In");    
    }
    const onForgotPasswordPress = () => {
        console.warn("Forgot password");
    }
    const onSignInFacebookPress = () => {
        console.warn("Sign In with Facebook!")
    };
    const onSignInGooglePress = () => {
        console.warn("Sign In with Google!")
    };
    const onSignInApplePress = () => {
        console.warn("Sign In with Apple!")
    };
    const onDontHaveAnAccount = () => {
        console.warn("Don't have an account")
    }
  return (
    <ScrollView>
    <View style={styles.root}>
      <Image source={Logo} style={[styles.logo, {height: height * 0.3}]} resizeMode='contain'/>
      <CustoInput placeholder="Username" value={username} setValue={setUsername}/>
      <CustoInput placeholder="password" value={password} setValue={setPassword} secureTextEntry={true}/>
      <CustomButton text="Sign In" onPress={onSignInPress}/>

      <CustomButton 
      text="Forgot password?" 
      onPress={onForgotPasswordPress}
      type="TERTIARY"
      />


      <CustomButton 
      text="Sign In with Facebook" 
      onPress={onSignInFacebookPress}
      bgColor="#e7eaf4"
      fgColor="#4765a9"
    
      />
      <CustomButton 
      text="Sign In with Google" 
      onPress={onSignInGooglePress}
      bgColor="#fae9ea"
      fgColor="#dd4d44"
      /> 
      <CustomButton 
      text="Sign In with Apple" 
      onPress={onSignInApplePress}
      bgColor="#e3e3e3"
      fgColor="#363636"
      />  
      <CustomButton 
      text="Don't have an account? Create One" 
      onPress={onDontHaveAnAccount}
      type="TERTIARY"
      />  

    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    root: {
        alignItems:'center',
        padding: 20, 
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
    },
});

export default SignInScreen