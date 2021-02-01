import React, { Component } from 'react';
import PostWidget from '../components/PostWidget';
import Div from '../styled/Div';
import Loading from '../components/Loading';
import axios from 'axios';

export default class Post extends Component {
  constructor() {
    super();
    this.state = {
      post: {},
    };
  }
  async componentDidMount() {
    const data = await axios.get(
      `/api/post/${this.props.match.params.postId}`,
    );
    this.setState({ post: data });
  }

  render() {
    if (!Object.keys(this.state.post).length) return <Loading />;
    return (
      <Div flexed justify="center" padding="20px 100px">
        <PostWidget fullWidth expanded={true} {...this.state.post} />
      </Div>
    );
  }
}