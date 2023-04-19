import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

import {observer} from 'mobx-react-lite';

export const TodoList: React.FC = observer(({todoStore}) => {
  return (
    <>
      <FlatList
        data={todoStore.todos}
        renderItem={({item, index}) => (
          <View key={`${index} ${item.id}`} style={styles.sectionContainer}>
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
