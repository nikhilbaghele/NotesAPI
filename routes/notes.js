import express from 'express'
import { body, validationResult } from 'express-validator';

import Note from '../models/Note.js'
import auth from '../middleware/authMiddleware.js'

const router = express.Router()

//Create
router.post(
  '/',
  auth,
  [
    body('title').notEmpty().withMessage('Title is required'),
    body('content').notEmpty().withMessage('Content is required')
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array().map(err => err.msg) });
    }

    const { title, content } = req.body;

    const note = new Note({
      title,
      content,
      user: req.user.id
    });

    note.save()
      .then(savedNote => res.json(savedNote))
      .catch(err => {
        console.error(err.message);
        res.status(500).send('Server Error');
      });
  }
);


//Get Notes
router.get('/', auth, async (req, res) => {
    try {
        const notes = await Note.find({user: req.user.id}).sort({createdAt: -1})
        res.json(notes)
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
})

export default router