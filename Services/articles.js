export const fetchArticles = async ()=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=15`)
    return await res.json()
}

export const fetchArticle = async (id)=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return await res.json()
}