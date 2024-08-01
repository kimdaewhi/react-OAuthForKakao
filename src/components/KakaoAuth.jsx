import React, { useState, useRef } from 'react'


export default function KakaoAuth() {
    const rest_api_key = '634fee3fbd20fdea483fc61f1eaf17ba'
    const redirect_uri = 'http://localhost:9000/docs'


    const handleKakaoAuth = (event) => {
        console.log("Clicked Kakao Open Auth 2.0");
        
        // 여기에 카카오 OAuth 인증을 구현하세요!
    }


    return (
        <div>
            <h1>OAuth 2.0</h1>
            <a href={`http://localhost:9000/kakao/authorize?api_key=${rest_api_key}&redirect_uri=${redirect_uri}`} onClick={handleKakaoAuth}>
                <img height="30px" src={`${process.env.PUBLIC_URL}/images/kakao_login_small.png`} alt="Kakao Auth" />
            </a>
        </div>
    )
}