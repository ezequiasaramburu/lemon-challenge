import { StyleSheet } from 'react-native';
import { theme } from '../../constants/theme';

export const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: theme.colors.secondary,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  text: {
    color: theme.colors.primary,
  },
  touchable: {
    borderWidth: 1,
    borderColor: theme.colors.primary,
    padding: 5,
    borderRadius: 5,
    marginHorizontal: 10,
  },
});
