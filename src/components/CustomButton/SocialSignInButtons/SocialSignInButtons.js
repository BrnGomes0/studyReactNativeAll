import React from "react";
import CustomButton from "../CustomButton";

const SocialSignInButtons = () => {
    const onSignInFacebookPress = () => {
        console.warn("Sign In with Facebook!")
    };
    const onSignInGooglePress = () => {
        console.warn("Sign In with Google!")
    };
    const onSignInApplePress = () => {
        console.warn("Sign In with Apple!")
    };
  return (
    <>
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
    </>
  );
}

export default SocialSignInButtons;