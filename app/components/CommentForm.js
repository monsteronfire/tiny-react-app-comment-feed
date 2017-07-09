import React from 'react';

class CommentForm extends React.Component {
  render() {
    return (
      <form className='comment-form'>
        <input type='text'/>
        <button>Add comment</button>
      </form>
    )
  }
}

export default CommentForm;
