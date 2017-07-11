import React from 'react';

class CommentList extends React.Component {
  render() {
    return (
      <ul className='comment-list'>
        {this.props.comments.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    )
  }
}

export default CommentList;
