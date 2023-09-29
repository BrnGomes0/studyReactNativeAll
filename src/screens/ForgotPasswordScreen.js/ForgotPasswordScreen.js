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



const ForgotPasswordScreen = () => {
    const [username, setUsername] = useState(""); // For username
    const onSignInPress = () => {
        console.warn('onSignInPress');
    };  
  return (
    <ScrollView>
    <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>
      <CustoInput placeholder="Username" value={username} setValue={setUsername}/>
      
      <CustomButton text="Send" />
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

export default ForgotPasswordScreen;