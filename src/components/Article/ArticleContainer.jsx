import React from "react";
import { Article } from "./Article";
import { connect } from "react-redux";




let mapStateToProps = (state) => {
	return{
		articlePage:state.articlePage
	}
}	
const ArticleContainer = connect(mapStateToProps)(Article)

export default ArticleContainer  ;


