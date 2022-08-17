require('dotenv').config();
const {API_KEY} = process.env;
const axios = require('axios')
const { Op } = require("sequelize");
const {Videogame, Genero, conn} = require('../db.js')


  const getVideogame = async(req, res, next) => {
    try {
        const requestApi1 = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`)
        const requestApi2 = await axios.get(requestApi1.data.next)
        const requestApi3 = await axios.get(requestApi2.data.next)
        const requestApi4 = await axios.get(requestApi3.data.next)
        const requestApi5 = await axios.get(requestApi4.data.next)
      
        const allResponse = [...requestApi1.data.results, ...requestApi2.data.results, ...requestApi3.data.results, ...requestApi4.data.results, ...requestApi5.data.results]
        const response = allResponse.map(el =>{
            const obj = {
                id: el.id, 
                name: el.name,
//                 description: el.description,
//               released: el.released,
                rating: el.rating, 
                platforms: el.platforms.map(el => el.platform.name),
                genres: el.genres.map(el=> ' '+ el.name),
                background_image: el.background_image
            }
            return obj 
        })
    const gameDB = await Videogame.findAll({include: Genero})
    const allGames = gameDB.concat(response) 
    res.send(allGames)

    } catch (error) {
        next(error)
    }
}  

 const getVideogameByName = async (req, res, next) => {
    const {name} = req.query; 
    if(!name) res.status(400).json({msg: 'name invalid'})
    try {
        const requestApi = await axios(`https://api.rawg.io/api/games?search=${name}&&key=${API_KEY}`)
        const datafiltered = requestApi.data.results.filter((el, i)=> i < 15)
        const responseApi = datafiltered.map(el => {
                    const obj = {
                        id: el.id,
                        name: el.name,
                        genres: el.genres.map(el => el.name),
                        background_image: el.background_image
                    }
                    return obj
                
                })
        const namebyDB = await Videogame.findAll({
            where:{
                name: {
                    [Op.iLike]: '%' + name + '%'
                }
            },
            include: {model: Genero}
        })
        const allbyName = [...responseApi, ...namebyDB]
        res.status(200).send(allbyName)
    } catch (error) {
        next(error)
    }
} 

const getVideogameById = async (req, res, next) =>{
    const {id} = req.params
    if(!id) res.status(400).json({msg: 'you must enter an id'})
    try {
        if(id.length < 8){
        const requestApi = (await axios(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)).data;
                const obj = {
                    id: requestApi.id,
                    name: requestApi.name,
                    background_image: requestApi.background_image,
                    genres: requestApi.genres.map(el=>el.name + ' '),
                    description: requestApi.description_raw,
                    released: requestApi.released,
                    rating: requestApi.rating,
                    platforms: requestApi.platforms.map(el => el.platform.name + ' ')
                }
                    return res.send(obj)
            } else {
                const requestDB = await Videogame.findByPk(id, {include: [{model: Genero}]})            
                return res.send(requestDB)
            }
    } catch (error) {
        next(error)
    }
}


 const createVideogame = async (req, res, next)=> {
    const {name, description_raw, released, rating, platforms, background_image, genero, created} = req.body
    try {
        if(!name || !description_raw || !platforms) return res.status(400).json({msg: "missing data"})
            const obj = {name, description_raw, released, rating, platforms, background_image, created}
            const newVG = await Videogame.create(obj)
    
            const genreDB= await Genero.findAll({
                where:{
                    name: genero
                }
            })
            await newVG.addGenero(genreDB)
    
            return res.json(newVG)
    } catch (error) {
        next(error)
    }
} 


module.exports = {
    getVideogame,
    getVideogameByName,
    getVideogameById,
    createVideogame
}
