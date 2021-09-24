import React ,{useEffect} from "react";
import { history } from "../redux/configureStore";
import styled, { keyframes } from "styled-components";
import "../style/index.css";
import { useDispatch, useSelector } from "react-redux";
import { getCookie } from "../shared/Cookie";import Countdown from "components/Countdown"
import axios  from "axios";

const Main = (props) => {
  console.log(props);

  const token = getCookie("token"); // is_login 이라는 키값을 가진 토큰 가져와라
  const is_cookie = token ? true : false; // 그리고 is_cookie로 토큰 유무판단


  useEffect(() => {

    axios.request({
      method: 'GET',
      url: 'https://life-left.p.rapidapi.com/time-left',
      params: { birth: '14 April 1977', gender: 'male' },
      headers: {
        'x-rapidapi-host': 'life-left.p.rapidapi.com',
        'x-rapidapi-key': 'SIGN-UP-FOR-KEY'
      }
    }).then(function (response) {
        console.log('res',response.data);
      }).catch(function (error) {
        console.error('errir',error);
      });    
      
  }, [])

  return (
  
    <MainContainer>
      <Countdown mm={1111} hh={1111}/>
    </MainContainer>
    
  );
};

export default Main;

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
 
  z-index: 20;
  //background: url("../assets/paper-background.jpg") center/cover no-repeat;
  //z-index: -2;
`