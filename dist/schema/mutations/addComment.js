'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Comment = require('../types/Comment');

var _FakeDatabase = require('../../FakeDatabase');

exports.default = {
  addCommnent: {
    type: _Comment.Comment,
    description: 'Creates a new comment for a blog post',
    args: {
      post: {
        type: _Comment.CommentInputType
      }
    },
    resolve: function resolve(parent, _ref /* args.comment */) {
      var comment = _ref.comment;

      return _FakeDatabase.fakeDatabase.addNewComment(comment);
    }
  }
};