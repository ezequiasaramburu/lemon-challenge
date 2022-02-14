import { StyleSheet } from 'react-native';
import { theme } from '../../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.secondary,
  },
  wrapper: {
    alignItems: 'center',
    paddingVertical: 5,
    marginTop: 10,
  },
  touchable: {
    borderWidth: 1,
    borderColor: theme.colors.primary,
    padding: 5,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  buttonText: {
    color: theme.colors.primary,
    fontWeight: 'bold',
  },
});
