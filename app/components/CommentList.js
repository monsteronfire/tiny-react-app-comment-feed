import React from 'react';
import CommentItem from './CommentItem';

class CommentList extends React.Component {
  render() {
    return (
      <ul className='comment-list'>
        <li><CommentItem/></li>
      </ul>
    )
  }
}

export default CommentList;
