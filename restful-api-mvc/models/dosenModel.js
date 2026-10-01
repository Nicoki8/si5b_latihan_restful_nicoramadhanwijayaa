let dosen = [
  { id: 1, nama: 'Nur Rachmat, M.Kom.', nip: '198xxxx', prodiId: 1 }
];
function getAll() { return dosen; }
function getById(id) { return dosen.find(d => d.id === id); }
function create(data) {
  const baru = { id: dosen.length + 1, ...data };
  dosen.push(baru);
  return baru;
}
module.exports = { getAll, getById, create };