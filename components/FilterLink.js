import React from 'react';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {StyleSheet, TouchableOpacity} from 'react-native';

export default function FilterLink({dispatch, action, children}) {
  return (
    <TouchableOpacity style={{marginHorizontal: 3, marginBottom: 15}}>
      <Button
        buttonStyle={{
          borderColor: 'white',
          backgroundColor: '#D8D8D8',
          borderWidth: 3,
          width: 120,
          borderRadius: 10,
          padding: 7,
        }}
        titleStyle={{marginLeft: 5, color: 'black', fontWeight: 'bold'}}
        style={styles.subText}
        icon={<Icon name="search" size={18} color="#f96332" />}
        title={children}
        type="outline"
        onPress={() => {
          dispatch(action());
        }}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  subText: {
    marginBottom: 8,
    marginTop: 8,
    //backgroundColor: "#D8D8D8",
    //borderWidth: 2,
    //borderColor: "#580000",
    width: 120,
    marginHorizontal: 5,
    textAlign: 'center',
  },
});

/* export default function FilterLink({ dispatch, action, children }) {
  return (
    <TouchableOpacity
      onPress={() => {
        dispatch(action());
      }}
    >
      <Text style={styles.subText}>{children}</Text>
    </TouchableOpacity>
  );
} */

/* const styles = StyleSheet.create({
  subText: {
    paddingHorizontal: 10,
    color: "#580000",
    fontWeight: "bold",
    //textDecorationLine: "underline",
    fontSize: 17,
    marginBottom: 10,
    marginTop: 10,
    backgroundColor: "#D8D8D8",
    padding: 5,
    borderWidth: 2,
    borderColor: "#20232a",
    borderRadius: 6,
    width: 120,
    textAlign: "center",
    marginHorizontal: 5,
  },
}); */
