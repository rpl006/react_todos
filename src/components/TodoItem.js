import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  render() {
    return (
      <div style={itemStyles}>
        <p>{this.props.todo.title}</p>
      </div>
    );
  }
}

//PropTypes

TodoItem.propTypes = {
  todos: PropTypes.object.isRequired
};

const itemStyles = {
  backgroundColor: "#f4f4f4"
};
export default TodoItem;
