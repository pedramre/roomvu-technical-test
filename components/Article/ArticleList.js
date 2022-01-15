import Link from "../Link";
import Date from "../Date"
import {ReadDuration} from "../ReadDuration";

const ArticleList = ({articles}) => {
    return(
        articles.map((article) => (
            <div key={article.id} className="articles d-flex flex-column my-5">
                <div className="articles-title">
                    <h3><Link href={`/article/${article.id}`}>{ article.title }</Link></h3>
                </div>
                <div className="articles-date mb-1">
                    <span> <Date/> • <ReadDuration/> </span>
                </div>
                <div className="articles-abstract">
                    <span>{ article.body }</span>
                </div>
            </div>
        ))
    )
}

export default ArticleList;