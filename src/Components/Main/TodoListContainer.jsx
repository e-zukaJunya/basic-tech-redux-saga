import { connect } from 'react-redux';
import { disposeTodo } from '../../Actions/CalcAction';
import TodoList from './TodoList';

const mapStateToProps = (state, ownProps) => {
    return {
        list: state.calculator.list,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        disposeTodo: (id) => dispatch(disposeTodo(id)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);
