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



const NewPasswordScreen = () => {
    const [code, setCode] = useState(""); // For username
    const [newPassword, setNewPassword] = useState('');
    const onSignInPress = () => {
        console.warn('onSignInPress');
    };
    const onSendPress = () => {
        console.warn('onSendPress')
    };
    const onSubmitPress = () => {
        console.warn('onSubmitPress')  
    };
  return (
    <ScrollView>
    <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>
      <CustoInput placeholder="Code" value={code} setValue={setCode}/>
      <CustoInput placeholder="Enter your new password" value={newPassword} setValue={setNewPassword}/>

      <CustomButton text="Submit" 
        onPress={onSubmitPress}
      />
      <CustomButton 
      text="Back to Sign In" 
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

export default NewPasswordScreen;