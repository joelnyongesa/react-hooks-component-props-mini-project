import Article from "./Article";


function ArticleList({posts}){
    const articleLists = posts.map(post =>
        post)
    console.log(articleLists)

    return(
        <main>
            <Article articles={articleLists}/>
        </main>
    )
}


export default ArticleList;