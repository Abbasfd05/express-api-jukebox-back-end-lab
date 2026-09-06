const Track = require('../models/Track.js');

// POST /tracks
async function create(req, res) {
  try {
    const track = await Track.create(req.body);
    res.status(201).json(track);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// GET /tracks
async function index(req, res) {
  try {
    const tracks = await Track.find({});
    res.status(200).json(tracks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// GET /tracks/:id
async function show(req, res) {
  try {
    const track = await Track.findById(req.params.id);
    res.status(200).json(track);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// PUT /tracks/:id
async function update(req, res) {
  try {
    const updatedTrack = await Track.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedTrack);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// DELETE /tracks/:id
async function deleteTrack(req, res) {
  try {
    const deletedTrack = await Track.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedTrack);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = {
  create,
  index,
  show,
  update,
  delete: deleteTrack,
};