const jwt = require('jsonwebtoken');
const ApiError = require('../Utils/api_error');
const tokenService = require('../service/token-service');
module.exports = function (req, res, next) {
    try {
        const authorizationHeader = req.headers.authorization;
        if(!authorizationHeader){
            return next(ApiError.UnauthorizedError())
        }
        const accessToken = authorizationHeader.split('')[1];
        if(!accessToken){
            return next(ApiError.UnauthorizedError())
        }
        const userData = tokenService.validateAccessToken(accessToken);
        if(!userData){
            return next(ApiError.UnauthorizedError())
        }
        req.user = userData;
        next()
    } catch (e) {
        console.log(e)
        return res.status(403).json({message: 'user is not authorized !'})
    }
}
