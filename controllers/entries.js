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