import React, { Component } from 'react';
import { connect } from 'react-redux';

import FileUpload from './FileUpload';
import { upload, getImages } from '../actions/ImageActions';
import ImageList from './ImageList';

@connect((state) => ({
  pics: state.images
}), dispatch => ({
  upload(file) {
    dispatch(upload(file));
  },
  getPics() {
    dispatch(getImages());
  },
}))
export default class Layout extends Component {
  componentDidMount() {
    this.props.getPics();
  }
  render() {
    console.log('this.props.pics:', this.props.pics)
    return (
      <div className="container">
        <h1>Image Uploader</h1>
        <FileUpload submitFile={this.props.upload} />
        <ImageList images={this.props.pics} />
      </div>
    );
  }
}
