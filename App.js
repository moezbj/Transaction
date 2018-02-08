import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Container,Header,Body,Icon,Title,Left,Right} from 'native-base';
import { NativeRouter, Route, Link } from 'react-router-native'

import TransactionList from './components/TransactionList'
import TransactionHistory from './components/TransactionHistory'

import customData from './listOfTransaction.json';
import categoryList from './category.json';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      transactions:[],
      categoryList:[],
      values:[]
    }
    this.componentDidMount=this.componentDidMount.bind(this)
    this.addHistory=this.addHistory.bind(this)
  }
  componentDidMount(){
    var arr = [];
    var val =[];
    var list=[];
    for (let key in customData.days) {
      arr.push([Object.keys(customData.days[key])[0]])
      val.push([Object.values(customData.days[key])[0]]);
    }
    for(let key in categoryList.category){
      list.push([Object.keys(categoryList.category[key])[0]])
    }
    console.warn(list)

    this.setState({
      transactions:arr,
      values:val,
      categoryList:list,
      historyNum:0
    })
  }


  addHistory(el){
    this.setState({
      historyNum:el
    })
  }
  render() {
    return (
    <NativeRouter>
      <Container style={styles.container}>
        <Header style={styles.Header}>
          <Left />
          <Body>
            <Title>Transactions</Title>
          </Body>
          <Right >
          <Link to ="/" style={{padding: 5}}><Icon style={{color: 'white'}} name='ios-home-outline'  transparent/></Link>
          </Right>
        </Header>

        <Route exact path="/" render={()=> <TransactionList
                                            transactions={this.state.transactions}
                                            values={this.state.values}
                                           componentDidMount={this.componentDidMount}
                                           addHistory={this.addHistory} />}

                                           />
        <Route path="/history/:num"  render={(e) => {
                    return <TransactionHistory  num={e.match.params.num} categoryList={this.state.categoryList}/>
        }}
                                                />
      </Container>
    </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },

});
