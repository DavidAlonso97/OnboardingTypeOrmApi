import { User } from "../entity/User";


export const createUser = async (request, response) => {
    const user = new User();
    user.nickName = request.body.nickname;

    await user.save();
}