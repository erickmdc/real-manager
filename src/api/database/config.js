import * as admin from 'firebase-admin';
import mongoose from 'mongoose';

// admin.initializeApp({
//   credential: admin.credential.cert({
//     "type": "service_account",
//     "project_id": "real-manager-1",
//     "private_key_id": "c3076535cd58711ff18ab731bdff1fecd463d4e0",
//     "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCmeGiunRyVIi0S\nA+F8gbwt8HTQ/3I2jjuJuazM0cMvmjOoAgifG0HqaOcsNiXHlFXR5edi9ykrtpPj\nzPwQt4gMoxG56DEVbVb6CIbUNuvFmORrstdqI5CRsBS5lmNTDP1aAqlg6UicXc7r\n0od7tA9wL0StScmh46C6dwgovrBURGsjzzer/0vzZ4SR89OOuwpQ0yBwh+dqIkqs\nNmorn0tM7Gpu78RIcWC9isCek4GGmU0AdngGjojfFm6jtCt9maVyNl7BsmFyh4KC\nD6sa+I1BAEEwNN8s/Ko7HUo+MKS2u/NC6BhLxxmOhfnPd0cqQnFK7k21yoKsFX86\ng4qpwlDfAgMBAAECggEAQDW4dwWd1T458TVy/4HREk0p2cV2CeoBuAVYzCXqqg1J\n+HdUWP58Bc0RweFe4CTsl0oc3nTkOfqx/498+Hu6K9moSDNx30ht4IJycx9+AJkR\nHiN86HEwXalzzQPfatTbUiEtsPY6binW2uo5HPNecxCgZlDMR7fTsqigCotG2zFq\nkcYwaYXEsU6iU9i8j3RVJwFLLpGUqb40EHrsN/X79P9Q8RqESah6LM5dtWMc2e2d\nuUQXO4B0DuGVZGcFLFQaFf2ncstnFLdTfqahqUubA3e3cv1lRqx5NU9nN5I5MqBk\nkxloW20yAmmYn5Jma8lmAyehKIQ78t+GS8ZVlAEZMQKBgQDlu94fHMgRU9R9BdE1\nEcWnZl65gZ2G5Gm7LLWFfOWy9aGMQEEGdCobHGXHfkwQYstBLp+ELHgOSfhwVqcO\noPVjo1ahOEK6zHeKN22V832IbueQen+io8WSZWlLUlrHRZHPo6zq/INavlMEDbyS\nzQIyyUirZBQkq+bspciLuT4qkQKBgQC5gN4CZiXvRXG0Yhdx1yrh1NLWD2vParKp\n1PofsJI2F6FVm6QwqiWKP5a/MOOztJamIPcYo1FwThlOiKKo+628qkMEjJeegVZL\nxSfURSU6dBlCG9ZMjSrXJP9xahOP6Ow1mlcEXfqY7SgbvK+MrdMcUQev9YKxjxts\n6O59L8YcbwKBgEYq8HgOQWlRcnhRO4n7CKTNlqcQWL3nrAeYa0T/VeUoMxR0V6gR\n+P5Y2RlqkO78Tdp11BD5yB2NKE2fmdzU+r5ZGE+bsH3/j49uyJDhUvlF7oJpd+yE\nGwdQ5C02VTXCIPwLoPgQ8knYEeEOFQe9iCtc4U4//gsJWjnzlOJgTQWRAoGBAJd5\nlk/pL3LJhwafzrsj0x1jVuJ65zMQ0mGBytjTqyDGfPRVymX+mfbg4+ytNFJK1XVE\nl+Ejg12sOFf7lK9eDElx0pXFZA2HWXs3u8VGzRaFNRbZek06PNA/ouLulpi9vxwq\nMoIbZ4U2qrizg7nhOvD1bcyOMrFgxSlSr2PD/ga7AoGAc1ALKwcWocxR8ozrlYhC\nTXr2s5vv21YQUtof+woGEIqLq9AXJiBxBFi0AF58815ycL85jv85KZc2Xw7UWx2D\nb+hd5Bk85gYUKAuwULThbQ9vKLiEnUcjsgTjYH6SVWCOi/v2x75JMJHgSxqBI/RT\nssOMsLvmoPTcNlTgY4liabA=\n-----END PRIVATE KEY-----\n",
//     "client_email": "firebase-adminsdk-2mwzp@real-manager-1.iam.gserviceaccount.com",
//     "client_id": "103074148390374570261",
//     "auth_uri": "https://accounts.google.com/o/oauth2/auth",
//     "token_uri": "https://oauth2.googleapis.com/token",
//     "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
//     "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-2mwzp%40real-manager-1.iam.gserviceaccount.com"
//   }),
//   databaseURL: "https://real-manager-1.firebaseio.com"  
// });

// var db = admin.firestore();

mongoose.Promise = global.Promise;

const host = 'mongodb+srv://realmanager:UNKDZ8lQhjiGYr54@lfu1-mno7t.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(host, { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("Connected to MongoDB database")
});

export default mongoose;