import mongoose from 'mongoose'

const massageSchema = new mongoose.Schema({
    senderId:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    receaverId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    message:{
        type: String,
        required: true
    }
    //createdat , updatedat 
},{timestamps: true})

const Messages = mongoose.model('Messages',massageSchema )

export default Messages;