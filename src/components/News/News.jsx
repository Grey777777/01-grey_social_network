import React from "react";
import cl from './News.module.css';

function News(props) {

  return (
    <div className={cl.content}>
	  {props.newsPage.news.map(n =>(
      <div key={n.id} className={cl.article}>
        <div className={cl.img}>
          <img src={n.picture} />
        </div>
        <div className={cl.articleText}>
          <div className={cl.title}>
            <b>{n.title}</b>
          </div>
          <div className={cl.news}>{n.text}</div>
        </div>
      </div>
	  ))}
    </div>
  );
}

export default News;
