import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Content,Container,Header, List, ListItem} from 'native-base';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      el:parseInt(props.num)
    }
  }
  render() {
    return (
      <View style={styles.container}>
      <List>
        {
          this.props.categoryList.map((el,i)=>{
            return <ListItem key={i}><Text>{el}</Text></ListItem>
          })
        }
        </List>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
