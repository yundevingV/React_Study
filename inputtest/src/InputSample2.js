import React,{useState} from "react";


function InputSample2(){
    const [inputs, setInputs] = useState({
        name : '',
        nickname : ''
    });
    const { name, nickname} = inputs
    // inputs = {name = '' , nickname: ''}
    // 비구조화 할당

    const onChange = (e) => {
        const {name,value} = e.target;
        // e.target.name , e.target.value
        setInputs({
            ...inputs,
            [name]: value
        })
    }
    const onReset = () => {
        setInputs({
            name : '',
            nickname : ''
        })
    }


    return(
        <div>
            <input name="name" onChange={onChange} value={name}/>
            <input name="nickname" onChange={onChange} value={nickname}/>
            <button onClick={onReset}> 초기화 </button> 
            <div>
                <b>{name} ({nickname})</b>
            </div>
        </div>


    )
}

export default InputSample2