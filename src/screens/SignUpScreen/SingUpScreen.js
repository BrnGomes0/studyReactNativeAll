import React, {
    useState,
} from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    useWindowDimensions,
    ScrollView,
} from 'react-native';
import CustoInput from '../../components/CustoInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/CustomButton/SocialSignInButtons';



const SignUpScreen = () => {
    const {height} = useWindowDimensions();
    const [username, setUsername] = useState(""); // For username
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState(""); // For password
    const [passWordRepeat, setPassWordRepeat] = useState(""); 
    const onRegisterPressed = () => {
        console.warn("Sign Up");    
    };   
    const onForgotPasswordPress = () => {
        console.warn("Forgot password");
    };
    const onDontHaveAnAccount = () => {
        console.warn("Don't have an account");  
    };
    const onTermsOfUsePressed = () => {
        console.warn('onTermsOfUsePressed');
    };
    const onPrivacyPolicePressed = () => {
        console.warn('onPrivacyPolicePressed');
    };
    const onSignInPress = () => {
        console.warn('onSignInPress');
    };
  return (
    <ScrollView>
    <View style={styles.root}>
        <Text style={styles.title}>Create an account</Text>
      <CustoInput placeholder="Username" value={username} setValue={setUsername}/>
      <CustoInput placeholder="Email" value={email} setValue={setEmail}/>
      <CustoInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true}/>
      <CustoInput placeholder="Password" value={passWordRepeat} setValue={setPassWordRepeat} secureTextEntry={true}/>

      <CustomButton text="Register" onPress={onRegisterPressed}/>
      <Text style={styles.text}>By registering, you confirm that you accept our <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of Use</Text> and <Text style={styles.link} onPress={onPrivacyPolicePressed}>Privacy Policy</Text></Text>

      <SocialSignInButtons/>

      <CustomButton 
      text="Have an account? Sign in" 
      onPress={onSignInPress}
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
    title :{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FF7B58',
        marginTop: 60,
        margin: 20,
    },
    text:{
        color: 'gray',
        marginVertical: 10, 
    },
    link:{
        color: '#fdb075', 
    },
});

export default SignUpScreen