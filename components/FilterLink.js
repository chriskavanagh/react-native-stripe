import React from 'react';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {StyleSheet, TouchableOpacity} from 'react-native';

function FilterLink({dispatch, action, children}) {
  console.log(`FliterLink Render`);
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
    width: 120,
    marginHorizontal: 5,
    textAlign: 'center',
  },
});

export default React.memo(FilterLink);
