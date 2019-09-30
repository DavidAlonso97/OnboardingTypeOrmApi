import { Post } from '../entity/Post';
import { User } from '../entity/User';
import { Category } from '../entity/Category';

export const createPost = async (request, response) => {
    const {title, text, categoryName, userID} = request.body;

    const post = new Post();
    post.title = title;
    post.text = text;

    const user = await User.findOne({ ID: userID });
    if (user.ID == userID) {
        post.craftedBy = user;
    }

    let category = await Category.findOne({ name: categoryName });
    if (category) {
        post.category = category;
    }
    else {
        category = new Category();
        category.name = categoryName;
        await category.save();
        post.category = category; 
    }

    await post.save();
    response.json({post: post});
}
