import { User } from "../entity/User";

export const findUserByNickName = async (request, response) => {
    const user = await User.findOne({ where: request.body.nickname });

    if (user) {
        response.json([user]);
    }
}