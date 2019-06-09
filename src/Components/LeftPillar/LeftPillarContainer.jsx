import { connect } from 'react-redux';
import { disposeAllTodos, reqHolidays } from '../../Actions/CalcAction';
import LeftPillar from './LeftPillar';

//const mapStateToProps = (state, ownProps) => {
//    return {
//        count: state.calculator.count,
//    };
//};

const mapDispatchToProps = dispatch => {
    return {
        disposeAllTodos: () => dispatch(disposeAllTodos()),
        reqHolidays: () => dispatch(reqHolidays()),
    };
};

export default connect(
    null,
    mapDispatchToProps
)(LeftPillar);
