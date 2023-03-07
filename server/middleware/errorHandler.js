const errorHandler = (err, req, res, next) => {
    return res.status(400).json({ error: err.response.data })
}

module.exports = errorHandler