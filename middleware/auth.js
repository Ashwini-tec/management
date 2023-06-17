import jwt from 'jsonwebtoken';
import User from '../src/user/userDb.js';
import { MESSAGE } from '../utils/constants.js';
import config from '../lib/config.js';
import GuestUser from '../src/guestUser/guestUserDb.js';

/***************** authenticate with token *********************************/
const verifyUser = async (req, res, next) => {
    try {
        const bearerToken = req.headers?.authorization?.split(' ');
        const token = bearerToken[1];
        const decoded = jwt.verify(
            token,
            config.JWT_SECRETE_KEY

        );
        if(decoded?.data?.userType == 'guestUser'){
            const userData = await GuestUser.findOne({ email: decoded.data.email });
            if (!userData) {
                return res.status(404).send({ status: 404, data: MESSAGE.DATA_NOT_FOUND });
            }
            res.local = decoded.data;
        }else{
            const userData = await User.findOne({ email: decoded.data.email });
            if (!userData) {
                return res.status(404).send({ status: 404, data: MESSAGE.DATA_NOT_FOUND });
            }
            res.local = decoded.data;
        }
        next();

    } catch {
        res.status(401).send({ status: 401, data: MESSAGE.UN_AUTHENTICATED_USER });
    }
};

/*********** Token Generate Function ******* */
const generateToken = (data) => {
    return jwt.sign({ data: data }, config.JWT_SECRETE_KEY);
};

/********************** verify opt *********** */
const verifyOTP = async(req, res)=>{
    try {
        const { email, otp } = req.body; 
        const info = await User.findOne({ email: email}).lean();
        if ( !info ){
            return res.status(404).json({data: MESSAGE.DATA_NOT_FOUND });
        }
        if(otp !== info.otp){
            return res.status(400).json({ data: MESSAGE.INCORRECT_OTP });
        }
        return res.status(200).json({ data: MESSAGE.OTP_VALIDATION_SUCCESS });
    } catch (error) {
        return res.status(500).send({error: error.message});
    }
};


/********************** verify opt *********** */
const verifyOTPUser = async(req, res)=>{
    try {
        const { email, otp } = req.body; 
        const info = await GuestUser.findOne({ email: email}).lean();
        if ( !info ){
            return res.status(404).json({data: MESSAGE.DATA_NOT_FOUND });
        }
        if(otp !== info.otp){
            return res.status(400).json({ data: MESSAGE.INCORRECT_OTP });
        }
        return res.status(200).json({ data: MESSAGE.OTP_VALIDATION_SUCCESS });
    } catch (error) {
        return res.status(500).send({error: error.message});
    }
};

export { verifyUser, generateToken ,verifyOTP,verifyOTPUser };
