import { connect } from 'react-redux';
import App from './App';

const mapStateToProps = (state, ownProps) => {
    return {
        isProcessing: state.calculator.isProcessing,
    };
};

//const mapDispatchToProps = dispatch => {
//    return {
//        addToList: (input) => dispatch(addToList(input)),
//    };
//};

export default connect(
    mapStateToProps
    //mapDispatchToProps
)(App);
