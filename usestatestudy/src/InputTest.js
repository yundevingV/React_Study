import React, {useState} from "react";

function InputTest(){
    const [text,setText] = useState('');

    const onChange = (e) => {
        setText(e.target.value);
    }

    const onReset = () => {
        setText('');
    }

    return (
        <div>
            <input onChange={onChange} value={text} /><br />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>내용 : {text} </b>
            </div>
        </div>
    )
}

export default InputTest