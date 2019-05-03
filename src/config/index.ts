const config = {
  environment: process.env.NODE_ENV,
  marvel: {
    server: process.env.REACT_APP_MARVEL_SERVER || 'http://gateway.marvel.com',
    endpoints: {
      heroes: {
        get: '/v1/public/characters',
        getById: '/v1/public/characters/:id'
      }
    },
    publicKey: process.env.REACT_APP_MARVEL_PUBLIC_KEY,
    privateKey: process.env.REACT_APP_MARVEL_PRIVATE_KEY
  }
}

export default config;
