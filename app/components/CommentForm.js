import React from 'react';

class CommentForm extends React.Component {
  render() {
    return (
      <form className='comment-form'>
        <textarea></textarea>
        <button onClick={this.props.action}>Add comment</button>
      </form>
    )
  }
}

export default CommentForm;
