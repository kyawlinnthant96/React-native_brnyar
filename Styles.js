import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginTop: 100,
    backgroundColor: '#6e7e22',
    borderRadius: 5,
  },
  innerContainer: {
    backgroundColor: '#d35400',
    height: 50,
    width: 150,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 200,
    color: '#fff',
    position: 'absolute',
    backgroundColor: 'transparent',
    top: 12,
    left: 10,
  },
  subtitle: {
    fontWeight: 'bold',
  },
});

export default {styles};
