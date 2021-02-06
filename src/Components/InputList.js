import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class InputsList extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.saveItem = this.saveItem.bind(this);
  }

  handleSubmit({ target }) {
    const { value } = target;
    const { setInputText, itemToUpdate } = this.props;
    setInputText(value, itemToUpdate);
  }

  saveItem() {
    const { add, update, inputText, itemToUpdate } = this.props;
    if (!itemToUpdate) {
      add({
        id: new Date().getTime(),
        text: inputText,
        done: false
      });
    } else {
      update({
        ...itemToUpdate,
        text: inputText,
      });
    }
  }

  handleKeyDown(e) {
    if (e.key === 'Enter') {
      this.saveItem();
    }
  }
  render() {
    const { itemToUpdate, inputText } = this.props;
    return (
      <div className="input-size">
        <InputGroup className="mb-3 input-size">
          <FormControl
            type="text"
            placeholder="Enter a task"
            value={inputText}
            onChange={this.handleSubmit}
            onKeyDown={this.handleKeyDown}
          />
          <InputGroup.Append>
            <Button variant="info" className="button-config color-button" onClick={this.saveItem}>
              {!itemToUpdate ? 'Add' : 'Update'}
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  inputText: state.listReducer.inputText,
  itemToUpdate: state.listReducer.itemToUpdate,
});

const mapDispatchToProps = dispatch => ({
  add: item => dispatch(actions.addItem(item)),
  update: item => dispatch(actions.updateItem(item)),
  setInputText: (text, itemToUpdate) => dispatch(actions.setInputText(text, itemToUpdate))
});

export default connect(mapStateToProps, mapDispatchToProps)(InputsList);