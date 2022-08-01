const {Router} = require ('express')
const {getGenre} = require('../controllers/genre.controllers.js')
const router = Router()

router.get('/', getGenre)

module.exports= router
