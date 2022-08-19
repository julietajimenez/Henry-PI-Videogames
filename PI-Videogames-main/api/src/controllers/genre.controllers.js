require('dotenv').config();
const {API_KEY} = process.env;
const axios = require('axios')
const {Genero} = require('../db.js')

 const getGenre = async (req, res, next)=> {
    try {
       const requestApi = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
       const response = requestApi.data.results.map(el => {
        const obj = {
            id: el.id,
            name: el.name,
        } 
        return obj 
       })
        const allDB = await Genero.findAll()
       if(!allDB.length) await Genero.bulkCreate(response)
       const genreDB = await Genero.findAll() 

       res.send(genreDB)
    } catch (error) {
        next(error)
    }
} 



module.exports= {
    getGenre
}