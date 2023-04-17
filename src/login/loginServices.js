import { MESSAGE } from '../../utils/constants.js';
import User from '../../src/user/userDb.js';
import bcrypt from 'bcrypt';

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
const guestLogin = async(data) => {
    const { email, password, type} = data;
    const user = await User.findOne({ email: email }).lean();
    if (!user) {
        return MESSAGE.INVALID_USER_PASSWORD;
    }
    if(type.toLowerCase() !== 'p'){
        return user;
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
        return MESSAGE.INVALID_USER_PASSWORD;
    }

    return user;
};

export { login, guestLogin };
