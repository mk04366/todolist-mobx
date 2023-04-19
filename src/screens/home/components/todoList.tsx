import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

import {observer} from 'mobx-react-lite';

export const TodoList: React.FC = observer(({todoStore, todoStore2}) => {
  console.log('rerendering todo list');
  return (
    <>
      <FlatList
        data={todoStore.todos}
        renderItem={({item}) => (
          <View key={item.userId} style={styles.sectionContainer}>
            <Text>{item.todo}</Text>
          </View>
        )}
      />
      <FlatList
        data={todoStore2.todos}
        renderItem={({item}) => (
          <View key={item.userId} style={styles.sectionContainer}>
            <Text>{item.todo}</Text>
          </View>
        )}
      />
    </>
  );
});

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});
