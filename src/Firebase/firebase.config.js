console.log(process.env);

const firebaseConfig = {
    // apiKey: "AIzaSyA2mz38j6wj4p8zt9ABBDS4GkFpj93bpR0",
    // authDomain: "ema-jone-simple-3522a.firebaseapp.com",
    // projectId: "ema-jone-simple-3522a",
    // storageBucket: "ema-jone-simple-3522a.appspot.com",
    // messagingSenderId: "1065647648165",
    // appId: "1:1065647648165:web:255afc14403be2518c4c4c"
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FOREBASE_PROHECT_ID,
    storageBucket: process.envREACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
};

export default firebaseConfig