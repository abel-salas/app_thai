

exports.responseDecorator = (err, res, data, name) => {
    console.log('_________ callbackResponse ________');

    if (err) {
        return res.status(res.statusCode).json({
            message: err.toString()
        });
    }

    res.status(res.statusCode).json({
        message: name,
        data: data
    });
};