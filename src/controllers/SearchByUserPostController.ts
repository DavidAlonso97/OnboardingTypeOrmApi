import { Post } from '../entity/Post';
import { User } from '../entity/User';
import { Category } from '../entity/Category';


export const searchPostByUser = async (request, response) => {
    const ID = request.body.ID;
    const categoryName = request.body.categoryName;

    let posts = [];
    let user = (await User.find({ where: { ID: ID } }))[0];

    if (user) {
        if (categoryName) {
            let category = await Category.findOne({ where: { name: categoryName } });
            posts = await Post.find({ where: { user: user, category: category } });
        }
        else {
            posts = await Post.find({ where: { user: user } });
        }
    }
    response.json(posts);
}
