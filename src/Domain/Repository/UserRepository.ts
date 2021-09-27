import { getNoAuthClient } from '../../Infrastructure/RestClient';
import { User } from '../../Domain/Entity/User';
import {
    UserFactory,
    UserResponseObject,
} from '../../Domain/Factory/UserFactory';

export class UserRepository {
    static async index(id: number): Promise<User> {
        const res = await getNoAuthClient().get<UserResponseObject>(`/users`);
        return UserFactory.createFromResponse(res.data);
    }
}
