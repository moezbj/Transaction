import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Content,Container,Header, List, ListItem} from 'native-base';
import { NativeRouter, Route, Link } from 'react-router-native'



export default class TransactionList extends React.Component {
  constructor(props){
    super(props)
    this.state={
    }
  }
  render() {
    return (
      <Content>
      <View style={styles.view}>
      <Text>days:</Text>
      <Text>number of transactions</Text>
      </View>
      <View style={styles.list}>
      <List>
        {
          this.props.transactions.map((el,i)=> {
             return  <ListItem key={i} style={styles.list} >
              <Link to={"/history/"+el[0]}>
                <Text id={el[0]}
                      addHistory={this.props.addHistory}>
                      {el[0]}
                </Text>
              </Link>
             </ListItem>
          })
        }
        </List>
        <List>
        {
          this.props.values.map((el,i)=> {
             return  <ListItem key={i} style={styles.list} >
              <Link to={"/history/"+el[0]}><Text >{el[0]}</Text></Link>
             </ListItem>
          })
        }
         </List>
      </View>
      </Content>
    );
  }
}
const styles = StyleSheet.create({
  view: {
    flexDirection:"row",
    justifyContent:"space-around",
    backgroundColor: '#fff',
  },
  list:{
    flexDirection:"row",
    justifyContent:"space-around"
  }
});
