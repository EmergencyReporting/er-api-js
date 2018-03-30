let env = {
    url: 'https://api.emergencyreporting.com'
};

const setAPIEnv = (opts) => {
    env = Object.assign({}, env, opts);
};

const getAPIEnv = () => ({
    ...env
});

module.exports = {
    setAPIEnv,
    getAPIEnv
};
