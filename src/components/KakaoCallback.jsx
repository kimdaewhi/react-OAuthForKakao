import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

export default function KakaoCallback() {
    const [accessToken, setAccessToken] = useState(null);
    const [authCode, setAuthCode] = useState(null);
    const [userInfo, setUserInfo] = useState(null);

    const location = useLocation();

    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const code = urlParams.get('code'); // post -> get
        if (code) {
            setAuthCode(code); // 인가 코드를 상태에 저장
            getAccessToken(code);
        }
    }, [location.search]);

    const getAccessToken = async (code) => {
        try {
            const response = await axios.post('http://localhost:9000/auth_kakao/accessToken', {
                grant_type: 'authorization_code',
                client_id: '634fee3fbd20fdea483fc61f1eaf17ba',
                redirect_uri: 'http://localhost:3000/kakao/callback',
                code: code
            });
            console.log('Access Token:', response.data);
            setAccessToken(response.data);
            getUserInfo(response.data.access_token); // 사용자 정보 조회

        } catch (error) {
            console.error('Failed to get access token:', error);
        }
    }

    const getUserInfo = async (accessToken) => {
        try {
            const response = await axios.get('http://localhost:9000/auth_kakao/user_info', {
                params: {
                    access_token: accessToken
                }
            });
            console.log('User Info:', response.data);
            setUserInfo(response.data);
        } catch (error) {
            console.error('Failed to get user info:', error);
        }
    }

    return (
        <div>
            <h1>Kakao Auth Callback</h1>
            {authCode ? <p>Authorization Code: {authCode}</p> : <p>Loading Authorization Code...</p>}
            {accessToken ? (
                <div>
                    <p>Access Token: {accessToken.access_token}</p>
                    <p>Token Type: {accessToken.token_type}</p>
                    <p>Expires In: {accessToken.expires_in}</p>
                    <p>Refresh Token: {accessToken.refresh_token}</p>
                    <p>Refresh Token Expires In: {accessToken.refresh_token_expires_in}</p>
                    <p>Scope: {accessToken.scope}</p>
                </div>
            ) : (
                <div>Loading Access Token...</div>
            )}
            <hr/>
            {userInfo ? (
                <div>
                    <p>User ID: {userInfo.id}</p>
                    <p>Nickname: {userInfo.properties.nickname}</p>
                    <p>Email: {userInfo.kakao_account.email}</p>
                </div>
            ) : (
                <div>Loading User Info...</div>
            )}
        </div>
    );
}
