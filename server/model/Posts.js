import mongoose from 'mongoose'

const postSchema = new mongoose.Schema({
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Courses",
        required: true
    },
    subject: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
})

const Posts = mongoose.model('Posts', postSchema)

export default Posts
