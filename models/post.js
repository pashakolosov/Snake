const mng = require('mongoose')

const postSchema = mng.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    data: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mng.model('posts', postSchema)