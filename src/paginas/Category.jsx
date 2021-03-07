import React, { useEffect, useState } from 'react'
import { useParams, Route, useRouteMatch, Link, Switch } from 'react-router-dom'
import '../assets/css/blog.css'
import ListCategories from '../components/ListCategories'
import ListPost from '../components/ListPost'
import SubCategory from './Subcategory'
import { search } from '../api/api';
const Category = () => {
    const { id } = useParams()
    const { url, path } = useRouteMatch()
    console.log(url)
    const [subcategorias, setSubCategorias] = useState([]);

    useEffect(() => {
        search(`/categorias/${id}`, (categoria) => {
            setSubCategorias(categoria.subcategorias)
            console.log(categoria.subcategorias)
        })
    }, [id])

    console.log(id)
    console.log(path)
    return (
        <>
            <div className="container">
                <h2 className="titulo-pagina">Pet Notícias</h2>
            </div>
                <ListCategories />
                { <ul className="lista-categorias container flex">
                    {
                        subcategorias.map( subcategoria => {
                            return(
                                <li className={`lista-categorias__categoria lista-categorias__categoria--${id}`} key={subcategoria}>
                                    <Link to={`${url}/${subcategoria}`}>{subcategoria}</Link>
                                </li>
                            )
                        })
                    }
                   
                </ul> }
              
            <Switch>
            <Route exact path={`${path}/`}>
                    <ListPost url={`/posts/?categoria=${id}`} />
                </Route>
                <Route path={`${path}/:subcategoria`}>
                    <SubCategory/>
                </Route>
            </Switch>
               

         
        </>
    )
}

export default Category