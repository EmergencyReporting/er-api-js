const axios = require('axios');

let env = {
    url: 'https://auth.emergencyreporting.com'
};

const setEnv = (opts) => {
    env = {
        ...opts
    };
};

const refreshAuthorization = (refresh_token, client_id, client_secret) => axios({
    url: `${env.url}/Token.php`,
    method: 'post',
    data: {
        grant_type: 'refresh_token',
        client_id,
        client_secret,
        refresh_token
    }
});

const authorizePassword = (username, password, client_id, client_secret) => axios({
    url: `${env.url}/Token.php`,
    method: 'post',
    data: {
        grant_type: 'password',
        client_id,
        client_secret,
        username,
        password
    }
}).then(response => response.data);

module.exports = {
    refreshAuthorization,
    authorizePassword,
    setEnv
}