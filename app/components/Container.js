import React from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

class Container extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      comments: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    var newComment = {
      text: this.state.text,
      id: Date.now(),
    };
    this.setState((prevState) => ({
      comments: prevState.comments.concat(newComment),
      text: '',
    }));
  }

  handleChange(event) {
    this.setState({text: event.target.value});
  }

  render() {
    return (
      <div className='comment-container'>
        <CommentForm text={this.state.text} onSubmit={this.handleSubmit} onChange={this.handleChange} />
        <CommentList comments={this.state.comments} />
      </div>
    )
  }
}

export default Container;
