import React from "react";
import cl from './BlockButtonPages.module.css';

const BlockButtonPages = (props)=>{
		
	let numberOfPages = Math.ceil(props.totalCountBook / props.countBook);
	let pages = [];
	for(let i = 1;i<numberOfPages;i++){
		pages.push(i);
	}	
		// обрезаем количество кнопок
	let slicedPages;
	let curPage = props.currentPage; // номер активной страницы
	if (curPage - 6 < 0 ) {
		slicedPages = pages.slice(1, 10); // пропускаем 0считаем с 1 по 10
	}
	else 
		if (curPage - 5 > numberOfPages-10 ) {
		  	slicedPages = pages.slice(numberOfPages-10, numberOfPages+1); //справа с 9 до 0 
	}
	else {
		slicedPages = pages.slice(curPage - 5, curPage + 4); // слева и справа по 4
	}
		// END обрезаем количество кнопок

	return (
		<div className={cl.blockBut}>
			<div>  
				<button onClick={(e)=>{props.onCurrentPage(1)}} className={curPage === 1 && cl.but}>1</button>
				<current className={curPage <= 5 && cl.butO}>...</current>
				{slicedPages.map((p)=>{
					return(
						<button onClick={(e)=>{props.onCurrentPage(p)}}
							className={props.currentPage === p && cl.but}>{p}</button>
					)
				})}
				<current className={curPage >= numberOfPages-5 && cl.butO}>...</current>
				<button onClick={(e)=>{props.onCurrentPage(numberOfPages)}} className={curPage === numberOfPages && cl.but}>{Math.round(numberOfPages)}</button>
			</div>
		</div>
	)
}

export default BlockButtonPages;
