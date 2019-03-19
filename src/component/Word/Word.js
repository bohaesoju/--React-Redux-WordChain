import React from 'react';

const Word = (props) => {
    const { newword, onSetResult,checkResult, counts, onEnterCheck, result } = props;
    return(
        <div>
            <p>{newword}</p>
            <input type="text" onChange={onSetResult} onKeyPress={onEnterCheck} value={result} />
            <button onClick={checkResult}>입력</button>
            <p>{counts}</p>
        </div>
    )
};

export default Word;
