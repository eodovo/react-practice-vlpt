import React, { useState, useRef } from "react";

function InputSample() {
  const [input, setInput] = useState({
    name: "",
    nickname: "",
  });
  const { name, nickname } = input; //input에 name,nickname 비구조화를 통한 삽입
  const nameInput = useRef();

  const onChange = (event) => {
    const { value, name } = event.target; //event.target에 value와 name 값 삽입
    setInput({
      ...input, //useState를 한 번 더 사용하는 것이 아닌 객체 복사
      [name]: value, //name키를 value로 설정
    });
  };

  const onReset = () => {
    setInput({
      name: "",
      nickname: "",
    });
    nameInput.current.focus(); //nameInput에 current 메소드를 통해 초기화가 될 때 nameInput으로 이동
  };

  return (
    <div>
      <input ref={nameInput} onChange={onChange} name="name" value={name} placeholder="이름" />
      <input onChange={onChange} name="nickname" value={nickname} placeholder="닉네임" />
      <button onClick={onReset}>초기화</button>
      <div>
        <strong>값 </strong>
        {name} ({nickname})
      </div>
    </div>
  );
}

export default InputSample;
