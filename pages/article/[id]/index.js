import Link from 'next/link'
import CustomLink from "../../../components/Link";
import Date from "../../../components/Date";
import {ReadDuration} from "../../../components/ReadDuration";
import {fetchArticle} from "../../../Services/articles";
import Head from "next/head";

const article = ({ article }) => {

    return (
        <>
            <Head>
                <title>{article.title} | RoomVu Technical Test</title>
                <meta name="description" content={`${article.title}-RoomVu Technical Test`} />
            </Head>
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
        </>

    )
}

export const getStaticProps = async (context) => {
    const article = await fetchArticle(context.params.id.toString())

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