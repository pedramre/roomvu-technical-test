export const fetchArticles = async ()=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=15`)
    const articles = await res.json()
    return articles;
}