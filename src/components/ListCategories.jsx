import React, { useEffect, useState } from 'react';
import {search} from '../api/api';
import { Link } from 'react-router-dom'
import '../assets/css/blog.css'
const ListCategories = () =>{

    const [categorias, setCategories] = useState([])

    useEffect(() =>{
        search(`/categorias`, setCategories)
        
    }, [categorias])

    return(
        <ul className="lista-categorias container flex">
            {categorias.map( (categoria => {
                return(
                <Link key={categoria.id} to={`/categoria/${categoria.id}`}>
                    <li className={`lista-categorias__categoria lista-categorias__categoria--${categoria.nome}`}>
                        {categoria.nome}
                    </li>
                </Link>)
            }))}
        </ul>
    )
}

export default ListCategories;