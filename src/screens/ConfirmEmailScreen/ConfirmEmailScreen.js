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



const ConfirmEmailScreen = () => {
    const [code, setCode] = useState("");

    const onConfirmPressed = () => {
        console.warn('onConfirmPressed')
    };
    
    const onSignInPress = () => {
        console.warn('onSignInPress');
    };
    
    const onResendPress = () => {
        console.warn('onResendPress');
    };

  return (
    <ScrollView>
    <View style={styles.root}>
        <Text style={styles.title}>Confirm Sign Up</Text>
      <CustoInput placeholder="Enter your confirmation code" value={code} setValue={setCode}/>
      

      <CustomButton text="Confirm" onPress={onConfirmPressed}/>
    
      <CustomButton 
      text="Resend Code" 
      onPress={onSignInPress}
      type="SECUNDARY"
      />  
      <CustomButton 
      text="Back to Sign in" 
      onPress={onResendPress}
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

export default ConfirmEmailScreen;