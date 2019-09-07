import { Post } from '../types/Post';
import { fakeDatabase } from '../../FakeDatabase';
import { PostInputType } from '../types/Post';

export default {
  addPost: {
    type: Post,
    description: 'Creates a new blog post',
    args: {
      post: {
        type: PostInputType
      }
    },
    resolve: function(parent, { post } /* args.post */) {
      return fakeDatabase.addNewBlogPost(post);
    }
  }
};
