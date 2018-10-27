import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';

import { listRepos } from './reducer';
import App from './App';

class RepoList extends Component {
  componentDidMount() {
    this.props.listRepos('relferreira');
  }
  
  renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.label}</Text>
    </View>
  );
  render() {
    const { repos } = this.props;
    return (
        <View style={{flex: 1}}>
            <TouchableHighlight style={{height: 50}} onPress={() => {return <App/>}}> 
                <Text> Click me </Text>
            </TouchableHighlight>
            <FlatList
                styles={styles.container}
                data={repos}
                renderItem={this.renderItem}
            />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  }
});

const mapStateToProps = state => {
  console.log(state.repos);
  let storedRepositories = state.repos.map(repo => ({ key: repo.title.label, ...repo.title }));
  console.log(storedRepositories);
  return {
    repos: storedRepositories
  };
};

const mapDispatchToProps = {
  listRepos
};

export default connect(mapStateToProps, mapDispatchToProps)(RepoList);