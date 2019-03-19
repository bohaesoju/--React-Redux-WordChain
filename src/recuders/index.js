import * as types from '../actions/ActionTypes';

//랜덤으로 단어를 선택하는 함수
export const getRandomWord = () => {
    let words = ['지리산','건물','지하철','축구','텀블러','인사','의자','이어폰','노트북'];
    let numb = (Math.ceil(Math.random() * 9)) - 1; // 0 ~ 8
    return words[numb];
}

const initialState = {
    word: getRandomWord (),
    result: '',
    count: 0 ,
};

const wordChain = (state = initialState, action) => {
    switch(action.type){
        case types.SET_RESULT:
            return {
                ...state,
                result: action.result
            };
        case types.CHECK_RESULT:
            const { word, result, count } = state;
            if(result === ''){
                alert('값을 입력해주세요!')
            } else if(word.slice(-1) === result.substring(0, 1)){
                alert('정답 !!')
                return {
                    ...state,
                    count : count + 1,
                    word : result,
                    result: ''
                }
            } else {
                alert('땡')
                return {
                    ...state,
                    count : count - 1,
                    result : ''
                }
            }
        break;      
        default:
        return state;
    }      
  } 

export default wordChain;  