import { StyleSheet } from 'react-native';
import { theme } from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    borderRadius: 5,
    marginVertical: 7,
    marginHorizontal: 25,
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: theme.colors.secondary,
  },
  text: {
    color: theme.colors.primary,
  },
  bold: {
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
});
