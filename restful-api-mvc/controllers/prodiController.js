const prodiModel = require('../models/prodiModel');
exports.getAll = (req, res) => { res.json(prodiModel.getAll()); };
exports.getById = (req, res) => {
  const data = prodiModel.getById(parseInt(req.params.id));
  if (!data) return res.status(404).json({ message: 'Prodi tidak ditemukan' });
  res.json(data);
};
exports.create = (req, res) => {
  const baru = prodiModel.create(req.body);
  res.status(201).json(baru);
};