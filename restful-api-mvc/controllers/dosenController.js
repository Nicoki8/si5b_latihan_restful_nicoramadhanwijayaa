const dosenModel = require('../models/dosenModel');
exports.getAll = (req, res) => { res.json(dosenModel.getAll()); };
exports.getById = (req, res) => {
  const data = dosenModel.getById(parseInt(req.params.id));
  if (!data) return res.status(404).json({ message: 'Dosen tidak ditemukan' });
  res.json(data);
};
exports.create = (req, res) => {
  const baru = dosenModel.create(req.body);
  res.status(201).json(baru);
};