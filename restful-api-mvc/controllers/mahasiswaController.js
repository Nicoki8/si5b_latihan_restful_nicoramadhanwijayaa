const mahasiswaModel = require('../models/mahasiswaModel');
exports.getAll = (req, res) => { res.json(mahasiswaModel.getAll()); };
exports.getById = (req, res) => {
  const data = mahasiswaModel.getById(parseInt(req.params.id));
  if (!data) return res.status(404).json({ message: 'Mahasiswa tidak ditemukan' });
  res.json(data);
};
exports.create = (req, res) => {
  const baru = mahasiswaModel.create(req.body);
  res.status(201).json(baru);
};