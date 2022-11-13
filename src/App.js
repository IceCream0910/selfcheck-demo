import './App.css';

import React, { useState, useEffect } from "react";
import { theme } from "./styles/theme";
import { ThemeProvider } from '@mui/material/styles';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import axios from 'axios';
import Lottie from 'react-lottie';
import animationData from "./animation/69380-success-check.json";

const App = () => {
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [pwd, setPwd] = useState("");

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [complete, setComplete] = useState(false);

  const lottieDefaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const handleOnChangeName = event => {
    setName(event.target.value);
  };

  const handleOnChangeBirth = event => {
    setBirth(event.target.value);
  };

  const handleOnChangePwd = event => {
    setPwd(event.target.value);
  };

  const submit = async () => {
    try {
      // 요청이 시작 할 때에는 error 와 users 를 초기화하고
      setError(null);
      setResult(null);
      // loading 상태를 true 로 바꿉니다.
      setLoading(true);
      // api 호출 url 형식의 예시는 아래와 같습니다.
      // http://localhost:8080/api?name=홍길동&birth=051225&password=0000
      const response = await axios.get(
        'http://localhost:8080/api?name=' + name + '&birth=' + birth + '&password=' + pwd
      );
      setResult(response.data); // 데이터는 response.data 안에 들어있습니다.
      if (response.data) {
        setComplete(true);
        setTimeout(() => { setComplete(false) }, 3000);
      }
      setLoading(true);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };


  if (loading) {
    return <div>제출중..</div>;
  }
  else if (complete) {
    return (<div><Lottie
      options={lottieDefaultOptions}
      height={200}
      width={200}
    />
      <br></br>제출 완료!</div>);
  }
  else if (error) {
    return <div>오류가 발생했습니다.<br></br>
      모든 정보를 올바르게 입력했는지 확인해주세요.</div>
  } else {
    return (
      <div className="App">
        <ThemeProvider theme={theme}>
          <TextField id="outlined-basic" label="이름" variant="outlined" onChange={handleOnChangeName} />
          <TextField id="outlined-basic" label="생년월일" variant="outlined" onChange={handleOnChangeBirth} />
          <TextField id="outlined-basic" label="비밀번호" variant="outlined" type="password" onChange={handleOnChangePwd} />

          <Button variant="contained" onClick={submit}>자가진단 제출하기</Button>
        </ThemeProvider>
      </div>
    );
  }



}

export default App;





/*
import './App.css';

import React, { useState, useEffect } from "react";
import { theme } from "./styles/theme";
import { ThemeProvider } from '@mui/material/styles';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import axios from 'axios';
import Lottie from 'react-lottie';
import animationData from "./animation/69380-success-check.json";

const App = () => {
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [pwd, setPwd] = useState("");

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [complete, setComplete] = useState(false);

  const lottieDefaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const handleOnChangeName = event => {
    setName(event.target.value);
  };

  const handleOnChangeBirth = event => {
    setBirth(event.target.value);
  };

  const handleOnChangePwd = event => {
    setPwd(event.target.value);
  };

  const submit = async () => {
    try {
      // 요청이 시작 할 때에는 error 와 users 를 초기화하고
      setError(null);
      setResult(null);
      // loading 상태를 true 로 바꿉니다.
      setLoading(true);
      const response = await axios.get(
        'http://localhost:8080/api?name=' + name + '&birth=' + birth + '&password=' + pwd
      );
      setResult(response.data); // 데이터는 response.data 안에 들어있습니다.
      if (response.data) {
        setComplete(true);
        setTimeout(() => { setComplete(false) }, 3000);
      }
      setLoading(true);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };


  if (loading) {
    return <div>제출중..</div>;
  }
  else if (complete) {
    return (<div><Lottie
      options={lottieDefaultOptions}
      height={200}
      width={200}
    />
      <br></br>제출 완료!</div>);
  }
  else if (error) {
    return <div>오류가 발생했습니다.<br></br>
      모든 정보를 올바르게 입력했는지 확인해주세요.</div>
  } else {
    return (
      <div className="App">
        <ThemeProvider theme={theme}>
          <TextField id="outlined-basic" label="이름" variant="outlined" onChange={handleOnChangeName} />
          <TextField id="outlined-basic" label="생년월일" variant="outlined" onChange={handleOnChangeBirth} />
          <TextField id="outlined-basic" label="비밀번호" variant="outlined" type="password" onChange={handleOnChangePwd} />

          <Button variant="contained" onClick={submit}>자가진단 제출하기</Button>
        </ThemeProvider>
      </div>
    );
  }



}

export default App;
*/