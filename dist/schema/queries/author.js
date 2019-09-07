'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _Author = require('../types/Author');

var _FakeDatabase = require('../../FakeDatabase');

exports.default = {
  author: {
    type: _Author.Author,
    description: 'Gets a specific author.',
    args: {
      id: {
        type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
      }
    },
    resolve: function resolve(parent, _ref /* args.id */) {
      var id = _ref.id;

      return _FakeDatabase.fakeDatabase.getAuthor(id);
    }
  }
};