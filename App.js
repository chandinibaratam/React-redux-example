
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, applyMiddleware, apiMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';

import reducer from './reducer';
import RepoList from './RepoList';

const store = createStore(reducer, applyMiddleware(thunk)); 

let num = 1;

export default class App extends Component {
  render() {
      return (
        <Provider store={store}>
          <View style={styles.container}>
            <RepoList />
          </View>
        </Provider>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50
  }
});