import { Post } from '../entity/Post';
import {Like} from "typeorm";


export const searchPostByText = async (request, response) => {
    const text = request.body.text;

    let posts = [];

    if (text) {
        posts = await Post.find({ text: Like(text) });
    }

    response.json(posts);
}
