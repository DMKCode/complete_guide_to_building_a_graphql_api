import { GraphQLString, GraphQLNonNull } from 'graphql';
import { Author } from '../types/Author';
import { fakeDatabase } from '../../FakeDatabase';

export default {
  posts: {
    type: new GraphQLList(Post),
    description: 'Gets a specific author.',
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLString)
      }
    },
    resolve: function(parent, { id } /* args.id */) {
      return fakeDatabase.getAuthor(id);
    }
  }
};
