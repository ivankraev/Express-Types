export default {
  port: 1337,
  dbUri:
    "mongodb+srv://ivankraev:ivankraev@cluster0.jgfex.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  saltWorkFactor: 10,
  publicKey: "MySecretPublicKey",
  privateKey: "MySecretPrivateKey",
  accessTokenTtl: "15m",
  refreshTokenTtl: "1y",
};
