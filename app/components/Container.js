import React from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

class Container extends React.Component {
  render() {
    return (
      <div className='comment-container'>
        <CommentForm/>
        <CommentList/>
      </div>
    )
  }
}

export default Container;
