const ACTIVE_ENV = 'development';

const base = {
  DEFAULT_GAS: 4000000,
  DEFAULT_USER_ID: 'Anonymous'
};

const env = {
  development: {
    RPC_ADDRESS: 'http://192.168.0.120:8545'
  }
};

const activeEnv = env[ACTIVE_ENV];
export default { ...base, ...activeEnv, ACTIVE_ENV };
