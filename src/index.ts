import {Router} from "express";
import {createUser} from "./controllers/CreateUserController";
import {findUserByNickName} from "./controllers/FindByNickNameUserController";
import {createPost} from "./controllers/CreatePostController";
import {searchPostByCategory} from "./controllers/SearchByCategoryPostController";
import {searchPostByText} from "./controllers/SearchByTextPostController";
import {searchPostByUser} from "./controllers/SearchByUserPostController";

const router = Router();

router.post('/users', createUser);
router.get('/users', findUserByNickName);
router.post('/posts', createPost);
router.get('/posts/category', searchPostByCategory);
router.get('/posts/text', searchPostByText);
router.get('/posts/user', searchPostByUser);

export {router}