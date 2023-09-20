import {connect} from 'react-redux';
import News from './News';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


let AuthRedirectComponent = withAuthRedirect(News)



let mapStateToProps = (state) => {
	return {
		newsPage: state.newsPage
	}
}

export default compose(
	connect (mapStateToProps),
	withAuthRedirect
)(News)

//export default connect (mapStateToProps)(AuthRedirectComponent); 

