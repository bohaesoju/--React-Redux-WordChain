import Word from '../component/Word';
import * as actions from '../actions';
import { connect } from 'react-redux';

//store 안의 state 값을 props로 연결
const mapStateToProps = (state) => ({
    newword: state.word,
    counts: state.count,
    result: state.result
})

/* 액션 생성 함수를 사용하여 액션을 생성하고 
해당 액션을 dispatch 하는 함수를 만든후 이를 props 로 연결 */
const mapDispatchToProps = (dispatch) => ({
    onSetResult : (e) => {
        const result = e.target.value;
        dispatch(actions.setResult(result))
    },
    checkResult : () => {
        dispatch(actions.checkResult())
    },
    onEnterCheck : (e) => {
        const keyvalue = e.key;
        if(keyvalue === 'Enter'){
            dispatch(actions.checkResult())
        }
    }
})

const WordContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Word);

export default WordContainer;                                                                                         