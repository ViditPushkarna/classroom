import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    myCourse: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Courses',
        },
    ],
})

const Users = mongoose.model('Users', userSchema)

export default Users
