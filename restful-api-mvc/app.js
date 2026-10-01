const express = require('express');
const app = express();

const mahasiswaRoutes = require('./routes/mahasiswaRoutes');
const prodiRoutes = require('./routes/prodiRoutes');
const fakultasRoutes = require('./routes/fakultasRoutes');
const dosenRoutes = require('./routes/dosenRoutes');

app.use(express.json());

app.use('/mahasiswa', mahasiswaRoutes);
app.use('/prodi', prodiRoutes);
app.use('/fakultas', fakultasRoutes);
app.use('/dosen', dosenRoutes);

// Export app untuk Vercel, dan jalankan app.listen jika diakses secara lokal (komputer sendiri)
if (process.env.NODE_ENV !== 'production') {
  app.listen(3000, () => {
    console.log('Server berjalan di port 3000');
  });
}

module.exports = app;