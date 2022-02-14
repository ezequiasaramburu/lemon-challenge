import React, { useEffect } from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import MapImage from '../../../../assets/images/map.png';
import { getUser } from '../../../state/auth/actions';
import { styles } from './styles';

const Login = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.auth.isLoading);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        // Correct way to store this is on .ENV file
        '58895251934-uph97tm68h4ajo7nsg6a6km1vuk1tore.apps.googleusercontent.com',
    });
  }, []);

  const signIn = () => {
    dispatch(getUser());
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
          disabled={isLoading}
        />
      </View>
    </SafeAreaView>
  );
};

export default Login;
