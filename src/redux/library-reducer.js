const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_BOOKS = 'SET-BOOKS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_COUNT_BOOK = 'SET-TOTAL-COUNT-BOOK';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_BLOCK_BUTTON = 'TOGGLE-IS-BLOCK-BUTTON';

let InitialState ={
	books: [
		{id:1, followed: true, name: 'John'},
		{id:2, followed: false, name: 'Serge'},
		{id:3, followed: true, name: 'Ann'},
		{id:4, followed: false, name: 'Kitty'}
	],
	totalCountBook: 0,
	countBook: 8,
	currentPage: 1,
	isFetching: false,
	isBlockButton: []
}

const libraryReducer = (state = InitialState, action) => {
	switch(action.type){
		case FOLLOW:{
			return{
				...state,books:state.books.map((b)=>{
					if(b.id === action.bookId){
						return{...b, followed: true}
					}
					return b;
				})
			}
		}
		case UNFOLLOW:{
			return{
				...state,books:state.books.map((b)=>{
					if(b.id === action.bookId){
						return{...b, followed: false}
					}
					return b;
				})
			}
		}
		case SET_BOOKS:{
			return{
				...state, books:[...action.books]
			}
		}
		case SET_CURRENT_PAGE:{
			return{
				...state, currentPage:action.currentPage
			}
		}
		case SET_TOTAL_COUNT_BOOK:{
			return{
				...state, totalCountBook:action.totalCountBook
			}
		}
		case TOGGLE_IS_FETCHING:{
			return{
				...state, isFetching:action.isFetching
			}
		}
		case TOGGLE_IS_BLOCK_BUTTON:{
			return{
				...state, 
				isBlockButton:action.anyBlock?
					([...state.isBlockButton, action.anyId])
				   :(state.isBlockButton.filter(id => id != action.anyId))
			}
		}
		default:
			return state;
	}	
}

export const follow = (bookId) => ({type: FOLLOW, bookId })
export const unfollow = (bookId) => ({type: UNFOLLOW, bookId })
export const setBooks = (books) => ({type: SET_BOOKS, books })
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage })
export const setTotalCountBook = (totalCountBook) => ({type: SET_TOTAL_COUNT_BOOK, totalCountBook})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching })
export const toggleIsBlockButton = (anyBlock,anyId) => ({type: TOGGLE_IS_BLOCK_BUTTON, anyBlock,anyId })

export default libraryReducer;
