import React from 'react';
import { SafeAreaView, ViewPropTypes, Text } from 'react-native';
import PropTypes from 'prop-types';


import CommentInput from '../CommentInput';
import CommentList from '../CommentList';
import NavigationBar from '../NavigationBar';

export default function Comments({
    style,
    comments,
    onClose,
    onSubmitComment,
}) {
  console.log(comments);
  return (
      <SafeAreaView style={style}>
        <NavigationBar
            title="Comments"
            leftText="Close"
            onPressLeftText={onClose}
        />
        <CommentInput placeholder="Leave a comment" onSubmit={onSubmitComment} />
        <CommentList items={comments} />
      </SafeAreaView>
  );
}

Comments.propsType = {
  style: ViewPropTypes.style,
  comments: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmitComment: PropTypes.func.isRequired,
};

Comments.defaultProps = {
  style: null
};
