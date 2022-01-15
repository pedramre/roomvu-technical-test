import Link from 'next/link'
import CustomLink from "../../../components/Link";
import Date from "../../../components/Date";
import {ReadDuration} from "../../../components/ReadDuration";

const article = ({ article }) => {

    return (
        <section className="main-single-article">
            <main className="single-article articles d-flex flex-column my-5">
                <article>
                    <header>
                        <h1><CustomLink href="/">{ article.title }</CustomLink></h1>

                        <div className="articles-date mb-5">
                            <span> <Date/> • <ReadDuration/></span>
                        </div>
                    </header>
                    <div className="article-description">
                        { article.body }
                    </div>
                    <footer className="d-flex justify-content-start">
                        <a href="/">Discuss on Twitter</a>
                        <a href="/" className="ms-2">Edit on GitHub</a>

                    </footer>
                </article>

            </main>

            <footer className="d-flex justify-content-between mt-5">
                <div>
                    <CustomLink href="/">← Back to home</CustomLink>
                </div>
            </footer>
        </section>
    )
}

export const getStaticProps = async (context) => {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${context.params.id.toString()}`
    )

    const article = await res.json()

    return {
        props: {
            article,
        },
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)

    const articles = await res.json()

    const paths = articles.map((article) => ({ params: { id: article.id.toString()} }))

    return {
        paths,
        fallback: false,
    }
}

export default article