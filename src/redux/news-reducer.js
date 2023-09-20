import kitten1 from '../images/cate1.jpg';
import kitten2 from '../images/cate2.jpg';
import kitten4 from '../images/cate4.jpg';


let InitialState = {
	news:[
		{id:1, picture: kitten1, title: 'Сам склепав 1', text: 'articlesText1'},
		{id:2, picture: kitten2, title: 'Сам склепав 2', text: 'articlesText2'},
		{id:3, picture: kitten4, title: 'Сам склепав 3', text: 'articlesText3'}
	]
}

const newsReducer = (state = InitialState, actions) => {
	return state;
}

export default newsReducer;
