import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt
} from 'graphql';

export const Comment = new GraphQLObjectType({
  name: 'Comment',
  description: 'Details of a comment',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    content: { type: GraphQLString }
  })
});

export const CommentInputType = new GraphQLInputObjectType({
  name: 'CommentInput',
  fields: {
    title: {
      name: new GraphQLNonNull(GraphQLString),
      content: new GraphQLNonNull(GraphQLString),
      postId: new GraphQLNonNull(GraphQLInt)
    }
  }
});
