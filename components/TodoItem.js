import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { View, CheckBox, Body, Icon } from 'native-base'; // 2.3.8

const styles = StyleSheet.create({
  row: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});

const propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string,
    completed: PropTypes.bool,
    createdAt: PropTypes.number,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

class TodoItem extends Component {
    randomStringTitle = (len) => {
        let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
        let string_length = len || 8;
        let randomstring = 'Nam Dinh ';
        for (var i=0; i<string_length; i++) {
            let rnum = Math.floor(Math.random() * chars.length);
            randomstring += chars.substring(rnum,rnum+1);
        }
        return randomstring;
    };
    
  onTodoItemToggle = (todo, propAction) => {
    propAction({
      ...todo,
      completed: !todo.completed,
    });
  };
  
  onTodoItemEdit = (todo, propAction) => {
    propAction({
      ...todo,
      title: this.randomStringTitle(4),
    });
  };

  setStateUtil = (property, value = undefined) => {
    this.setState({
      [property]: value,
    });
  };

  render() {
    const { todo, onUpdate, onDelete } = this.props;

    return (
      <View style={styles.row}>
        <View
          style={{
            flex: 1,
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            paddingRight: 10,
            paddingVertical: 5,
          }}
        >
          <TouchableOpacity
            onPress={() => this.onTodoItemToggle(todo, onUpdate)}
            style={{
              flex: 1,
              width: '100%',
              flexDirection: 'row',
            }}
          >
            <CheckBox checked={todo.completed} />
            <Body
              style={{
                flex: 1,
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                paddingLeft: 25,
              }}
            >
              <Text
                style={{
                  color: todo.completed ? 'grey' : 'black',
                  textDecorationLine: todo.completed ? 'line-through' : 'none',
                }}
              >
                {todo.title}
              </Text>
            </Body>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.onTodoItemEdit(todo, onUpdate)}
            style={{ paddingLeft: 25, paddingRight: 15 }}
          >
            <Icon
              name="ios-settings-outline"
              color={`${todo.title.length > 0 ? 'black' : 'grey'}`}
              size={23}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onDelete(todo)}
            style={{ paddingLeft: 25, paddingRight: 15 }}
          >
            <Icon
              name="ios-trash-outline"
              color={`${todo.title.length > 0 ? 'black' : 'grey'}`}
              size={23}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

TodoItem.propTypes = propTypes;

export default TodoItem;
