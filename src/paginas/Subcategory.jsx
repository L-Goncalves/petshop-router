import React from 'react';
import {useParams, useRouteMatch } from 'react-router-dom'
import ListPost from '../components/ListPost'
const SubCategory = () => {

    
    const { subcategoria } = useParams()
    const { path } = useRouteMatch()

    return(  <ListPost url={`/posts/?subcategoria=${subcategoria}`}/>)
}

export default SubCategory;