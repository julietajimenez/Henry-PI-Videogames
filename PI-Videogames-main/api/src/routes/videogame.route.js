const {Router} = require ('express')
const {getVideogame, getVideogameByName, getVideogameById, createVideogame} = require('../controllers/videogame.controllers.js')
const router = Router()

router.get('/', getVideogame)
router.get('/byName', getVideogameByName)
router.get('/:id', getVideogameById)
router.post('/create', createVideogame)

module.exports = router