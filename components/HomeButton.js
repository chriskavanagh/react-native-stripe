import React from 'react';
import {Button} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

export default (props) => {
  const navigation = useNavigation();

  return (
    <Button
      onPress={() => navigation.navigate('Menu')}
      title="Order Online!"
      type="outline"
      buttonStyle={{
        borderColor: 'gray',
        borderWidth: 4,
        width: 380,
        marginTop: 16,
        borderRadius: 10,
      }}
      titleStyle={{color: '#f96332'}}
    />
  );
};

/* export default () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Contact")}
      style={styles.button}
    >
      <Text style={{ color: "#f96332" }}>Order Online!</Text>
    </TouchableOpacity>
  );
};
const styles = EStyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#303030",
    padding: 10,
    borderRadius: 5,
    width: "70%",
    marginTop: 19,
    borderWidth: 2,
    borderColor: "#f96332",
    marginBottom: 7,
  },
}); */
