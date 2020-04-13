import * as React from 'react';
import {Image} from 'react-native';
import {Modal} from 'react-native-paper';

const uri =
  'https://images.pexels.com/photos/1370725/pexels-photo-1370725.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260';

export default function App() {
  return (
    <Modal visible contentContainerStyle={{flex: 1}} wrapInSafeArea={false}>
      <Image style={{width: '100%', height: '100%'}} source={{uri}} />
    </Modal>
  );
}
