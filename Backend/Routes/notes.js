const express = require("express");
const fetchuser = require("../middleware/fetchuser");
const { body, validationResult } = require("express-validator");
const Note = require("../models/Note");
const router = express.Router();

router.get("/fetchallnotes", fetchuser, async (req, res) => {
  const notes = await Note.find({ user: req.user.id });
  res.json(notes);
});

router.post(
  "/addnotes",
  fetchuser,
  [
    body("title").isLength({ min: 3 }),
    body("descreption").isLength({ min: 10 }),
  ],
  async (req, res) => {
    const { title, descreption, tag } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const notes = new Note({ title, descreption, tag, user: req.user.id });
    const saveote = await notes.save();
    res.json(saveote);
  }
);

router.put(
  "/updatenotes/:id",
  fetchuser,

  async (req, res) => {
    const { title, descreption, tag } = req.body;
    //new note
    const newNote = {};
    if (title) {
      newNote.title = title;
    }
    if (descreption) {
      newNote.descreption = descreption;
    }
    if (tag) {
      newNote.tag = tag;
    }
    //note to be update

    let note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Not Found");
    }
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }
    note = await Note.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      { new: true }
    );
    res.json(note);
  }
);
router.delete(
  "/deletenotes/:id",
  fetchuser,

  async (req, res) => {
    //note to be update

    let note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Not Found");
    }
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }
    note = await Note.findByIdAndDelete(req.params.id);
    res.json({ Success: "Note has been deleted", note: note });
  }
);

module.exports = router;
