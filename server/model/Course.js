import mongoose from 'mongoose'

const courseSchema = new mongoose.Schema({
    tutor: {
        type: String,
        required: true
    },
    students: [
        {
            student: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Users",
            },
            cr: {
                type: Boolean
            }
        }
    ],
    name: {
        type: String,
        required: true,
    },
    posts: [
        {
            post: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Posts",
            }
        }
    ],
    fees: {
        type: Number,
    },
    venue: {
        type: String
    },
    gaffar: {
        type: String
    }
})

const Courses = mongoose.model('Courses', courseSchema)

export default Courses
