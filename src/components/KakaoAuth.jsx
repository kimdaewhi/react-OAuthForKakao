import React, { useState, useRef } from 'react'


export default function KakaoAuth() {
    const handleKakaoAuth = (event) => {
        console.log("Clicked Kakao Open Auth 2.0");
        // 여기에 카카오 OAuth 인증을 구현하세요!
    }


    return (
        <div>
            <h1>Kakao OAuth 2.0</h1>
            <button onClick={handleKakaoAuth}>Login for Kakao</button>
        </div>
    )
}