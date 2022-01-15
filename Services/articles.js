import { api } from '../config'

export const fetchArticles = async ()=>{
    const res = await fetch(`${api}?_limit=15`)
    return await res.json()
}

export const fetchArticle = async (id)=>{
    const res = await fetch(`${api}/${id}`)
    return await res.json()
}