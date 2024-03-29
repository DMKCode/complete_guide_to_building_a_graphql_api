import { GraphQLString, GraphQLNonNull, GraphQLList } from 'graphql';
import { Author } from '../types/Author';
import { fakeDatabase } from '../../FakeDatabase';

export default {
  author: {
    type: Author,
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
