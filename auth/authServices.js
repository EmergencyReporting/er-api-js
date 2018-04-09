const axios = require('axios');

// defaulting timeout to 30 seconds
axios.defaults.timeout = 30000;

module.exports = {
    refreshAuthorization: (baseUrl, refresh_token, client_id, client_secret) => axios({
        url: `${baseUrl}/Token.php`,
        method: 'post',
        data: {
            grant_type: 'refresh_token',
            client_id,
            client_secret,
            refresh_token
        }
    }).then(response => response.data),

    authorizePassword: (baseUrl, username, password, client_id, client_secret) => axios({
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

    authorizationCode: (baseUrl, code, client_id, client_secret, redirect_uri) => axios({
        url: `${baseUrl}/Token.php`,
        method: 'post',
        data: {
            grant_type: 'authorization_code',
            client_id,
            client_secret,
            redirect_uri,
            code
        }
    }).then(result => result.data)
}
