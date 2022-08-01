const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const videogameRoute = require('./videogame.route.js')
const genreRoute = require('./genre.route.js')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/videogame', videogameRoute)
router.use('/genre', genreRoute)

module.exports = router;
