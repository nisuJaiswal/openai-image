
const dotenv = require('dotenv').config()

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


const genImage = async (req, res, next) => {
    const { msg, size } = req.body
    const imgSize = size === 'small' ? '256x256' : size === 'medium' ? '512x512' : '1024x1024'
    try {
        const response = await openai.createImage({
            prompt: msg,
            n: 1,
            size: imgSize
        });
        image_url = response.data.data[0].url;

        res.status(200).json({ image_url })

    } catch (error) {
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
            return next(error)
            // res.status(error.response.status).json({ error: error.response.data })
            // throw new Error(error.response.data)
        } else {
            console.log(error.message);
        }
    }

}

module.exports = { genImage }