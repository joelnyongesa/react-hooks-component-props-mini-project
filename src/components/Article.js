import React from "react";
const defaultDate = "January 1, 1970"

function Article(props) {

  return (
    <>
      {props.articles.map(article => (
        <article key={article.id}>
          <h3>{article.title}</h3>
          <small>{article.date || defaultDate}</small>
          <p>{article.preview}</p>
        </article>
      ))}
    </>
  );
}

export default Article;
