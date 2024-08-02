import React, { useState, useRef, useEffect } from 'react'
import axios from 'axios'


export default function KakaoAuth() {
    const rest_api_key = '634fee3fbd20fdea483fc61f1eaf17ba'
    const redirect_uri = 'http://localhost:9000/docs'
    const [code, setCode] = useState(null)

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search)
        const code = urlParams.get('code')
        if(code) {
            setCode(code);
            getAccessToken(code)
        }
    }, []);


    const handleKakaoAuth = (event) => {
        console.log("Clicked Kakao Open Auth 2.0");
        
        // 여기에 카카오 OAuth 인증을 구현하세요!
    }

    const getAccessToken = async (code) => {
        try {
            const response = await axios.post('http://localhost:9000/auth_kakao/accessToken', {
                grant_type: 'authorization_code',
                client_id: rest_api_key,
                redirect_uri: redirect_uri,
                code: code
            });
            console.log('Access Token : ', response.data);
        } 
        catch(error) {
            console.error('access token 발급 실패 : ', error)
        }
    }


    return (
        <div>
            <h1>OAuth 2.0</h1>
            <a href={`http://localhost:9000/auth_kakao/authorize?api_key=${rest_api_key}&redirect_uri=${redirect_uri}`} onClick={handleKakaoAuth}>
                <img height="30px" src={`${process.env.PUBLIC_URL}/images/kakao_login_small.png`} alt="Kakao Auth" />
            </a>
        </div>
    )
}