const errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode ? err.statusCode : 500
    res.status(statusCode)
    res.json({
        message: err.message,
        stack: err.stack
    })
    // return res.status(400).json({ error: err.response.data })
}

module.exports = errorHandler