import { connect } from 'react-redux';
import { onPlusClick, onMinusClick } from '../../Actions/CalcAction';
import Main from './Main';
import '../../App.css';

const mapStateToProps = (state, ownProps) => {
    return {
        count: state.calculator.count,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onPlusClick: () => dispatch(onPlusClick()),
        onMinusClick: () => dispatch(onMinusClick()),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);
