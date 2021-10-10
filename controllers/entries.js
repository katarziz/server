import mongoose from 'mongoose';
import Entry from '../models/entry.js';

export const getEntries = async (req, res) => {
    try {
        const entries = await Entry.find();

        res.status(200).json(entries);
    } catch (error) {
        res.status(405).json({message:error});
    }
}

export const createEntry = async (req, res) => {
    const body = req.body;

    const newEntry = new Entry(body);

    try {
        await newEntry.save();

        res.status(201).json(newEntry);
    } catch (error) {
        res.status(409).json({message:error});
    }
}

/*
export const updateEntry = async (req, res) => {
    const { id: _id } = req.params;
    const body = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No entry with that id');

    const updatedEntry = await Entry.findByIdAndUpdate(_id, { ...body, _id }, { new: true });

    res.json(updatedEntry);
}

export const deleteEntry = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No entry with that id');

    await Entry.findByIdAndRemove(id);

    res.json({ message: 'Entry deleted successfully' });
}
*/