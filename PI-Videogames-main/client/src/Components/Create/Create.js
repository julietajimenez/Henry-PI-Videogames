import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {createVideogames, getAllVideogame} from '../../Redux/Actions.js';
import {Link, useHistory} from 'react-router-dom';
import style from './create.module.css';
import img from './create5.jpg';


export default function Create (){
    const [input, setInput]= useState({
        name:'',
        background_image: '',
        description_raw: '',
        released: '',
        rating: '',
        platforms: [],
        genero: []
    })
    const [errors, setErrors] = useState({})
    const dispatch = useDispatch()
    const history = useHistory()
    const videogames = useSelector(state=>state.videogames)
    const genre = useSelector(state => state.genre)
    


    const allPlataforms = videogames.map(el=> el.platforms)
    const setPlataforms = [...new Set(allPlataforms.toString().split(',').sort())]


    function handleChange(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    function handleSelect(e){
        console.log(input.platforms);
        setInput({
            ...input,
            platforms: [...new Set([...input.platforms, e.target.value])]
        })
    }

    function handleSelectGenre (e){
        console.log(input.genero);
        setInput({
            ...input,
            genero: [...new Set([...input.genero, e.target.value])]
        })
    }

    function validate (input){ 
        let errors = {}
        let regexName = /^[0-9a-zA-Z \-':_]+$/;
        let regexRating = /^[0-9]+([.])?([0-9]+)?$/;

        if(!input.name.trim()){
            errors.name = 'input name is required'
        } else if(!regexName.test(input.name)){
                errors.name = "can only contain letters, numbers, spaces and (: - ')"
            }
        
        videogames.map(vg => {
            if(input.name.toLowerCase() === vg.name.toLowerCase()){
                errors.name= 'the name entered already exists'
            }
        })
        

        if(!input.description_raw.trim()){
            errors.description_raw = 'input description is requires'
        
        }    
        if(input.rating > 5 || input.rating < 0){
            errors.rating = 'the score must be between 0 and 5'
        } else if(!regexRating.test(input.rating)){
            errors.rating = 'only numbers can be entered'
        }

        if(!input.platforms || input.platforms.length < 1){
            errors.platforms = 'platforms is required'
        }
        if(!input.platforms || input.platforms.length < 1){
            errors.genero =' genre is required'
        }
        return errors
    }

    function handleBlur(e){
        handleChange(e)
        setErrors(validate(input))
    }
    function handleBlurPlatform(e){
        handleSelect(e)
        setErrors(validate(input))
    }
    function handleBlurGenre(e){
        handleSelectGenre(e)
        setErrors(validate(input))
    }

    function clear(){
        setInput({
            name:'',
            background_image: '',
            description_raw: '',
            released: '',
            rating: '',
            platforms: [],
            genero: []
        })
    }
    
    function handleSubmit(e){
        e.preventDefault()
        dispatch(createVideogames(input))
        setErrors(validate(input))
        if(Object.keys(errors).length===0){
            alert('successfully created video game')
            setInput({
                name:'',
                background_image: '',
                description_raw: '',
                released: '',
                rating: '',
                platforms: [],
                genero: []
            })
            dispatch(getAllVideogame())
            history.push('/home')
        }
        else {
            return;
        }
    }
    function deleteOption(e){
        e.preventDefault()
        setInput({
            ...input,
            genero: input.genero.filter(el => el !== e.target.value),
            platforms: input.platforms.filter(el => el !== e.target.value)
        })
    }
    return(
        <div className={style.div}>
            <img className={style.img} src={img}/> 
            
            <h1 className={style.title}>CREATE YOUR VIDEOGAME</h1>
            <form className={style.form} onSubmit={(e)=>handleSubmit(e)}>
                <div className={style.divName}>
                    <label className={style.label}>Name <font color='red'>*</font> </label>
                    <input className={style.input} type={'text'} name={'name'} value={input.name} onChange={(e)=>handleChange(e)} onBlur={handleBlur}/>
                    {errors.name && <p className={style.p}>{errors.name}</p>}
                </div>

                <div className={style.divRating}>
                    <label className={style.label}>Rating: </label>
                    <input className={style.input} type={'text'} name={'rating'} value={input.rating} onChange={(e)=>handleChange(e)} onBlur={handleBlur}/>
                    {errors.rating && <p className={`${style.p} ${style.errorRating}`}>{errors.rating}</p>}
                </div>

                <div className={style.divImage}>
                    <label className={style.label}>Image: </label>
                    <input className={`${style.input} ${style.inputImage}`} type={'text'} name={'background_image'} value={input.background_image} onChange={(e)=>handleChange(e)} onBlur={handleBlur} placeholder={"if you don't put an image, one will be put by default"}/> 
                </div>

                <div className={style.divDescription}>
                    <label className={style.label}>Description <font color='red'>*</font> </label>
                    <input className={style.input} type={'text'} name={'description_raw'} value={input.description_raw} onChange={(e)=>handleChange(e)} onBlur={handleBlur}/>
                    {errors.description_raw && <p className={style.p}>{errors.description_raw}</p>}
                </div>

                <div className={style.divReleased}>
                    <label className={style.label}>Released: </label>
                    <input className={`${style.input} ${style.inputReleased}`} type={'date'} name={'released'} value={input.released} min="1960-01-01" max="2100-12-31" onChange={(e)=>handleChange(e)} onBlur={handleBlur}/>
                </div>


                <div className={style.divSelectPlatforms}>
                    <select className={`${style.platforms} ${style.select}`} onChange={(e)=> handleSelect(e)} onBlur={handleBlurPlatform}>

                        <option className={style.option} value=''>Select platforms *</option>
                        {
                            setPlataforms && setPlataforms.map((el) => {
                                return(
                                    <option className={style.option} key={el.name} value={el}>{el}</option>
                                )
                        })
                        }
                    </select>
                    {errors.platforms && <p className={`${style.p} ${style.errorPlatforms}`}>{errors.platforms}</p>}
                    </div>
                <div>
                    {
                        input.platforms.map(el => (
                            <div className={style.optionSelect}>
                                <h6 className={style.nameSelect} key={el}>{el}</h6>
                                <button className={style.delete} type="button" onClick={deleteOption} value={el}>X</button>
                            </div>
                        ))
                    }
                </div>



                <div className={style.divSelectGenre}>
                    <select className={`${style.genres} ${style.select}`} onChange={handleSelectGenre} onBlur={handleBlurGenre}>
                        <option className={style.option} value=''>Select genre *</option>
                        {
                            genre && genre.map(el => {
                                return(
                                <option className={style.option} key={el.name} value={el.name}>{el.name}</option>
                            )
                            })
                        }
                    </select>
                    {errors.genero && <p className={`${style.p} ${style.errorGenre}`}>{errors.genero}</p>}
                    </div>
                <div>
                    {
                        input.genero.map(el => (
                            <div className={style.optionSelect} key={el.id}>
                                <h6 className={style.nameSelect}>{el}</h6>
                                <button className={style.delete} type="button" onClick={deleteOption} value={el}>X</button>
                            </div>
                    ))
                    }
                </div>
                <div className={style.divButton}>
                    {Object.keys(errors).length > 0 ? <button className={style.buttonCreate} type='submit' disabled={true}>CREATE</button> : <button className={style.buttonCreate} type='submit' disabled={false}>CREATE</button>}
                </div>
            </form>
            <Link to={'/home'}>
                <button className={style.buttonHome}>Home</button>
            </Link>
            <button className={style.buttonHome} onClick={clear}>Clear</button>

        </div>
    )
}
