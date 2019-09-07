import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList } from "graphql";
import { Author } from "./Author";
import { Comment } from "./Comment";
import { fakeDatabase } from "../../FakeDatabase";

const export Post = new GraphQLObjectType({
	name: "Post",
	description: "All details of a blog post",
	fields: () => ({
		id: { type: GraphQLInt },
		title: { type: GraphQLString },
		content: { type: GraphQLString },
		author: {
			type: Author,
			resolve: (post) => {
				return fakeDatabase.getAuthor(post.author);
			}
		},
		comments: {
			type: new GraphQLList(Comment),
			resolve: (post) => {
				return fakeDatabase.getCommentsForPost(post.id);
			}
		}
	})
});
