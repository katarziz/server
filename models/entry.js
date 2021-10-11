import mongoose from 'mongoose';

const entrySchema = mongoose.Schema({
    0 : { answer: String},
    1 : { answer: String},
    2 : { answer: String},
    3 : { answer: String},
    4 : { answer: String},
    5 : { answer: String},
    6 : { answer: String},
    7 : { answer: String},
    8 : { answer: String},
    9 : { answer: String},
    10 : { answer: String},
    11 : { answer: String},
    12 : { answer: String},
    13 : { answer: String},
    14 : { answer: String},
    15 : { answer: String},
    16 : { score: Number}
});

const Entry = mongoose.model('Entry', entrySchema);

export default Entry;