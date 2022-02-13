import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import MapImage from '../../../../assets/images/map.png';
import { styles } from './styles';

const Login = () => {
  const [user, setUserInfo] = useState();

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '58895251934-uph97tm68h4ajo7nsg6a6km1vuk1tore.apps.googleusercontent.com',
    });
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setUserInfo(userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log(error);
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log(error);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log(error);
      } else {
        console.log('error', error.code);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>COVID - 19</Text>
      </View>
      <Image source={MapImage} style={styles.map} resizeMode="contain" />
      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>Welcome to Covid Tracker App</Text>
      </View>
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>Sign in to find the latest info</Text>
        <GoogleSigninButton
          style={styles.loginButton}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={signIn}
        />
      </View>
    </SafeAreaView>
  );
};

export default Login;
