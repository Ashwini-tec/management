import * as artistSevice from './artistService.js';
import { MESSAGE } from '../../utils/constants.js';
/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
const createArtist = async(req, res) => {
    try {
        const data = req.body;
        const detail = await artistSevice.createArtist(data);
        return res.status(200).json({
            data: detail,
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns all the data
 */
const getArtist = async(req, res) => {
    try {
        const detail = await artistSevice.getArtist();
        return res.status(200).json({
            data: detail ?? [],
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns data by id
 */
const getById = async(req, res) => {
    try {
        const { id : ArtistId } = req.params;
        const detail = await artistSevice.getById(ArtistId);
        return res.status(200).json({
            data: detail ?? MESSAGE.DATA_NOT_FOUND,
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns updated data
 */
const updateArtist = async(req, res) => {
    try {
        const { id: ArtistId } = req.params;
        const data =  req.body;
        const detail = await artistSevice.updateArtist(ArtistId, data);
        return res.status(200).json({
            data: detail ?? MESSAGE.DATA_NOT_FOUND,
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
const deleteArtist = async(req, res) => {
    try {
        const { id: ArtistId } = req.params;
        const detail = await artistSevice.deleteArtist(ArtistId);
        return res.status(200).json({
            data: detail ?? MESSAGE.DATA_NOT_FOUND,
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

export{
    createArtist,
    getArtist,
    getById,
    updateArtist,
    deleteArtist,
};
