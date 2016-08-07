

exports.responseDecorator = (err, res, data, name) => {
    console.log('_________ response Decorator ________');

    if (err) {
        return res.status(res.statusCode).json({
            message: err.toString(),
            name: name,
            data: data
        });
    }

    res.status(res.statusCode).json({
        message: name,
        data: data
    });
};