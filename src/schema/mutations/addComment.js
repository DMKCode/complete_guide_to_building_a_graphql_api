import { Comment } from '../types/Comment';
import { fakeDatabase } from '../../FakeDatabase';
import { CommentInputType } from '../types/Comment';

export default {
  addCommnent: {
    type: Comment,
    description: 'Creates a new comment for a blog post',
    args: {
      post: {
        type: CommentInputType
      }
    },
    resolve: function(parent, { comment } /* args.comment */) {
      return fakeDatabase.addNewComment(comment);
    }
  }
};
