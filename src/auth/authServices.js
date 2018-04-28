import axios from 'axios';

// defaulting timeout to 30 seconds
axios.defaults.timeout = 30000;

export default {
    refreshAuthorization : (baseUrl, refresh_token, client_id, client_secret) => axios({
        url: `${baseUrl}/Token.php`,
        method: 'post',
        data: {
            grant_type: 'refresh_token',
            client_id,
            client_secret,
            refresh_token
        }
    }).then(response => response.data),

    authorizePassword : (baseUrl, username, password, client_id, client_secret) => axios({
        url: `${baseUrl}/Token.php`,
        method: 'post',
        data: {
            grant_type: 'password',
            client_id,
            client_secret,
            username,
            password
        }
    }).then(response => response.data),

    authorizationCode : (baseUrl, code, client_id, client_secret, redirect_uri) => axios({
        url: `${baseUrl}/Token.php`,
        method: 'post',
        data: {
            grant_type: 'authorization_code',
            client_id,
            client_secret,
            redirect_uri,
            code
        }
    }).then(result => result.data),

    revokeAccessToken : (baseUrl, access_token) => axios({
        url: `${baseUrl}/Revoke.php`,
        method: 'post',
        data: {
            token: access_token
        }
    }).then(result => result.data),

    revokeRefreshToken : (baseUrl, refresh_token) => axios({
        url: `${baseUrl}/Revoke.php`,
        method: 'post',
        data: {
            token_type_hint: 'refresh_token',
            token: refresh_token
        }
    }).then(result => result.data)
};
