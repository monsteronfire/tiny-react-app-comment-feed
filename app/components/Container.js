import React from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

class Container extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    console.log('hello');
  }

  render() {
    return (
      <div className='comment-container'>
        <CommentForm action={this.handleClick} />
        <CommentList/>
      </div>
    )
  }
}

export default Container;
