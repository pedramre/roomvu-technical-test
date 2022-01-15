import Head from 'next/head'
import Link from '../components/Link'
import Image from 'next/image'
import ArticleList from "../components/Article/ArticleList";
import {fetchArticles} from "../Services/articles";

export default function Home({articles}) {
  return (
    <div>
      <Head>
        <title>RoomVu Technical Test</title>
        <meta name="description" content="RoomVu Technical Test - Created for RoomVu " />
      </Head>

      <section>
        <div className='user-brief d-flex'>
          <Image src="/images/avatar.jpg" width={60} height={60} alt="Dan Abramove" />
          <div className="d-flex flex-column align-items-start ms-2">
            <span>Personal blog by <Link href="">Dan Abramov.</Link></span>
            <span>I explain with words and code.</span>
          </div>
        </div>

        <ArticleList articles={articles} />

      </section>

    </div>
  )
}

export const getStaticProps = async () => {
  const articles = await fetchArticles();
  return {
    props: {
      articles,
    },
  }
}