export default function KakaoAuth() {
    const rest_api_key = '634fee3fbd20fdea483fc61f1eaf17ba'
    const redirect_uri = 'http://localhost:3000/kakao/callback'



    return (
        <div>
            <h1>OAuth 2.0</h1>
            <a href={`http://localhost:9000/auth_kakao/authorize?api_key=${rest_api_key}&redirect_uri=${redirect_uri}`}>
                <img height="30px" src={`${process.env.PUBLIC_URL}/images/kakao_login_small.png`} alt="Kakao Auth" />
            </a>
        </div>
    )
}