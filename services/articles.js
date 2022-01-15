import { api } from '../config'

export const fetchArticles = async ()=>{
    const res = await fetch(`${api}?_limit=15`)
    const articles =await res.json()
    return await articles.sort((a, b) => b.id - a.id);;
}

export const fetchArticle = async (id)=>{
    const res = await fetch(`${api}/${id}`)
    return await res.json()
}