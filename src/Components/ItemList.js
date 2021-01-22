import React from 'react';
import { connect } from 'react-redux';
import { MdEdit } from 'react-icons/md';
import { FaTrash } from 'react-icons/fa';

import * as actions from './../redux/actions';

class ItemList extends React.Component {
  constructor() {
    super();
    this.doneClick = this.doneClick.bind(this);
  }

  doneClick() {
    const { updateItem, item } = this.props;
    updateItem({
      ...item,
      done: !item.done,
    })
  }
  
  render() {
    const { deleteItem, setInputText, item } = this.props;
    return (
      <div>
        <div className="item">
          <div>
            <input type="checkbox" onClick={this.doneClick} checked={item.done}></input>
            <span
              className={item.done ? 'done' : ''}
            >{item.text}</span>
          </div>
          <div>
            <MdEdit className="icon clickable" onClick={() => setInputText(item.text, item)}/>
            <FaTrash className="icon clickable" onClick={() => deleteItem(item)}/>
          </div>
        </div>
        <hr/>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  deleteItem: (item) => dispatch(actions.deleteItem(item)),
  setInputText: (text, itemToUpdate) => dispatch(actions.setInputText(text, itemToUpdate)),
  updateItem: (item) => dispatch(actions.updateItem(item))
});

export default connect(null, mapDispatchToProps)(ItemList);