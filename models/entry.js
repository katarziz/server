import mongoose from 'mongoose';

const entrySchema = mongoose.Schema({
    title : String,
    message : String,
    creator : String,
    tags : [String],
    createdAt : {
        type : Date,
        default : new Date()
    },
});

const Entry = mongoose.model('Entry', entrySchema);

export default Entry;