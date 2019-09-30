import { Post } from '../entity/Post';
import { Category } from '../entity/Category';

export const searchPostByCategory = async (request, response) => {
    const categoryName = request.body.categoryName;

    let posts = [];

    if (categoryName) {
        let category = await Category.findOne({ where: { name: categoryName } });
        posts = await Post.find({ where: { category: category } });
    }

    response.json(posts);
}