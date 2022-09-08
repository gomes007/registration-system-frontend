
const envConfig = {
  "development": {
    "backendURL": "http://localhost:8080/api"
  },

  "production": {
    "backendURL": "http://localhost:8080/api"
  }
}

const config = envConfig[process.env.NODE_ENV];

export default config;
