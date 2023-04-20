import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {TodoList} from './components/todoList';
import HomeViewController from './homeController';

export const Home: React.FC = () => {
  const {
    addNewTodo,
    todoListStore,
    deleteTodo,
    setNewTodos,
    isLoading,
    error,
    data,
  } = HomeViewController();

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 72}}>Loading...</Text>
      </View>
    );
  }
  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={addNewTodo}
          style={{
            backgroundColor: '#007AFF',
            padding: 10,
            borderRadius: 5,
            margin: 2,
          }}>
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 16,
              textAlign: 'center',
            }}>
            {'Add Test Todo'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={deleteTodo}
          style={{
            backgroundColor: 'red',
            padding: 10,
            borderRadius: 5,
            margin: 2,
          }}>
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 16,
              textAlign: 'center',
            }}>
            {'Delete Last Todo'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={setNewTodos}
          style={{
            backgroundColor: 'green',
            padding: 10,
            borderRadius: 5,
            margin: 2,
          }}>
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 16,
              textAlign: 'center',
            }}>
            {'Get New Todos'}
          </Text>
        </TouchableOpacity>
      </View>

      <TodoList todoStore={todoListStore} />
    </View>
  );
};
