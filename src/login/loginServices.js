import { MESSAGE } from '../../utils/constants.js';
import User from '../../src/user/userDb.js';
import bcrypt from 'bcrypt';
import GuestUser from '../../src/guestUser/guestUserDb.js';

/**
 *
 * @param {*} data
 * @returns
 */
const login = async(data) => {
    const { email, password } = data;
    const user = await User.findOne({ email: email }).lean();
    if (!user) {
        return MESSAGE.INVALID_USER_PASSWORD;
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
        return MESSAGE.INVALID_USER_PASSWORD;
    }

    return user;
};


/**
 *
 * @param {*} data
 * @returns
 */
const guestLoginUser = async(data) => {
    const { email, password, type } = data;
    if(type.toLowerCase() !== 'p'){
        const usere = await GuestUser.findOne({ email: email }).lean();
        if (!usere) {
            delete data.password;
            return await User.create(data);
        }
        return usere;
    }
    const user = await GuestUser.findOne({ email: email }).lean();
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
        return MESSAGE.INVALID_USER_PASSWORD;
    }

    return user;
};

export { login, guestLoginUser };
