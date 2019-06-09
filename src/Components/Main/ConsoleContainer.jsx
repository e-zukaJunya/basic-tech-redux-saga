import { connect } from 'react-redux';
import { addToList } from '../../Actions/CalcAction';
import Console from './Console';
import '../../App.css';

//const mapStateToProps = (state, ownProps) => {
//    return {
//        count: state.calculator.count,
//    };
//};

const mapDispatchToProps = dispatch => {
    return {
        addToList: (input) => dispatch(addToList(input)),
    };
};

export default connect(
    null,
    mapDispatchToProps
)(Console);
