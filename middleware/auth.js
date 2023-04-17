import jwt from 'jsonwebtoken';
import User from '../src/user/userDb.js';
import { MESSAGE } from '../utils/constants.js';
import config from '../lib/config.js';

/***************** authenticate with token *********************************/
const verifyUser = async (req, res, next) => {
    try {
        const bearerToken = req.headers?.authorization?.split(' ');
        const token = bearerToken[1];
        const decoded = jwt.verify(
            token,
            config.JWT_SECRETE_KEY

        );
        const userData = await User.findOne({ email: decoded.data.email });
        if (!userData) {
            return res.status(404).send({ status: 404, data: MESSAGE.DATA_NOT_FOUND });
        }
        res.local = decoded.data;
        next();

    } catch {
        res.status(401).send({ status: 401, data: MESSAGE.UN_AUTHENTICATED_USER });
    }
};

/*********** Token Generate Function ******* */
const generateToken = (data) => {
    return jwt.sign({ data: data }, config.JWT_SECRETE_KEY);
};

export { verifyUser, generateToken };
