import React from 'react';

class CommentForm extends React.Component {
  render() {
    return (
      <form className='comment-form' onSubmit={this.props.onSubmit}>
        <textarea value={this.props.text} onChange={this.props.onChange}></textarea>
        <button type='submit'>Add comment</button>
      </form>
    )
  }
}

export default CommentForm;
