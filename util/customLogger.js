const logger = function(request, response, next) {
    console.log(request.url);
    next();
}

module.exports = {
    logger: logger
}