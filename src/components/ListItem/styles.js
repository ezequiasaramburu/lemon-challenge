import { StyleSheet } from 'react-native';
import { theme } from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: theme.colors.white,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: StyleSheet.hairlineWidth,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  textContainer: {
    marginHorizontal: 10,
    width: '90%',
  },
});
