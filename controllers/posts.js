import mongoose from 'mongoose';
import Entry from '../models/entry.js';

export const getPosts = async (req, res) => {
    try {
        const entries = await Entry.find();

        res.status(200).json(entries);
    } catch (error) {
        res.status(404).json({message:error});
    }
}

export const createPost = async (req, res) => {
    const body = req.body;

    const newPost = new Entry(body);

    try {
        await newPost.save();

        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({message:error});
    }
}

export const updatePost = async (req, res) => {
    const { id: _id } = req.params;
    const body = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');

    const updatedPost = await Entry.findByIdAndUpdate(_id, { ...body, _id }, { new: true });

    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

    await Entry.findByIdAndRemove(id);

    res.json({ message: 'Post deleted successfully' });
}