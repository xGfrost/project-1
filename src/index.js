require('dotenv').config()

const PORT = process.env.PORT || 5000;

const express = require('express');

const usersRoutes = require('./routes/users');

const wasteexchangesRoutes = require('./routes/wasteexchanges');

const badgesRoutes = require('./routes/badges');

const achievementsRoutes = require('./routes/achievements');

const user_achievementsRoutes = require('./routes/user_achievements');

const waste_reportsRoutes = require('./routes/waste_reports');

const middlewareLogRequest = require('./middleware/logs');

const upload = require('./middleware/multer');

const app = express();



app.use(middlewareLogRequest);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/assets', express.static('./public/images'))

app.use((req, res, next) => {
    console.log('middleware ke dua')
    next();
});

app.use('/users', upload.single('foto_profil'), usersRoutes);
app.post('/upload', upload.single('foto_profil'), (req, res) => {
    res.json({
        data: req.file,
        message: 'Upload Berhasilv'
    })
})

app.use((err, req, res, next) => {
    res.json({
        message: err.message
    })
})

app.use('/wasteexchanges', upload.single('image'), wasteexchangesRoutes);
app.post('/upload', upload.single('image'), (req, res) => {
    res.json({
        data: req.file,
        message: 'Upload Berhasil'
    })
})

app.use((err, req, res, next) => {
    res.json({
        message: err.message
    })
})

app.use('/badges', upload.single('image'), badgesRoutes);
app.post('/upload', upload.single('image'), (req, res) => {
    res.json({
        data: req.file,
        message: 'Upload Berhasil'
    })
})

app.use((err, req, res, next) => {
    res.json({
        message: err.message
    })
})

app.use('/achievements', upload.single('image'), achievementsRoutes);
app.post('/upload', upload.single('image'), (req, res) => {
    res.json({
        data: req.file,
        message: 'Upload Berhasil'
    })
})

app.use((err, req, res, next) => {
    res.json({
        message: err.message
    })
})

app.use('/user_achievements',  user_achievementsRoutes);

app.use('/waste_reports', upload.single('image'), waste_reportsRoutes);
app.post('/upload', upload.single('image'), (req, res) => {
    res.json({
        data: req.file,
        message: 'Upload Berhasil'
    })
})

app.use((err, req, res, next) => {
    res.json({
        message: err.message
    })
})

app.listen(PORT, () => {
    console.log(`Server berhasil di running di post ${PORT}`)
})