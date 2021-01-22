import React from 'react';
import ItemList from './ItemList';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';

class List extends React.Component {

  constructor() {
    super();
    this.renderList = this.renderList.bind(this);
  }
  renderList(list, title) {
    if (list && list.length) {
      return (
        <>
          <span className="todo-or-done">{title}</span>
          {list.map((item) => (<ItemList key={item.id} item={item}/>))}
        </>
      );
    }
    return (<></>);  
  };

  render() {
    const { list } = this.props;
    return (
      <div>
        <Container>
          {this.renderList(list.filter(i => !i.done), 'A FAZER')}
          {this.renderList(list.filter(i => i.done), 'FEITO')}
        </Container>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  list: state.listReducer.items
});

export default connect(mapStateToProps)(List);