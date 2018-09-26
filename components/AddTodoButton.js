import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Fab } from 'native-base'; // 2.3.8
import COLORS from '../constants/Colors';

const propTypes = {
  onPress: PropTypes.func.isRequired,
};

const AddTodoButton = ({ onPress }) => (
  <Fab
    direction="up"
    containerStyle={{}}
    style={{ backgroundColor: COLORS.primary }}
    position="bottomRight"
    onPress={onPress}
  >
    <Icon name="add" />
  </Fab>
);

AddTodoButton.propTypes = propTypes;

export default AddTodoButton;
