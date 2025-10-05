

import React from 'react';
import { View,Text,Image} from 'react-native';

import { styles } from './Style';
import BatImg from "./../../../assets/bat-logo.png";


export default ()=> {
  return (<View >
      <Text  style={styles.title}>
        BAT PASS GENERATOR
      </Text>
      <Image
       style={{resizeMode:'contain',height:180}}
       source={BatImg}
      />
    </View>
  );
}