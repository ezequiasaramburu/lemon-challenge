import { StyleSheet } from 'react-native';
import { theme } from '../../../constants/theme';
import { deviceWidth } from '../../../utils/dimensions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.colors.secondary,
  },
  footerContainer: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    color: theme.colors.black,
  },
  loginButton: {
    width: 192,
    height: 48,
  },
  map: {
    width: deviceWidth - 25,
    height: 300,
    tintColor: theme.colors.primary,
  },
  subtitle: {
    fontSize: 25,
    fontWeight: '500',
    color: theme.colors.primary,
  },
  subtitleContainer: {
    flexGrow: 1,
    marginTop: 25,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    color: theme.colors.primary,
  },
  titleContainer: {
    marginTop: 25,
    alignSelf: 'flex-start',
    marginLeft: 15,
  },
});
