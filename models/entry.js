import mongoose from 'mongoose';

const entrySchema = mongoose.Schema({
    input1 : String,
    input2 : String,
    input3 : String,
    input4 : String,
    input5 : String,
    input6 : String,
    input7 : String,
    input8 : String,
    input9 : String,
    createdAt : {
        type : Date,
        default : new Date()
    },
});

const Entry = mongoose.model('Entry', entrySchema);

export default Entry;