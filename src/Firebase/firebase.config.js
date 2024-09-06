
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCpJLRBTm5YBGYOBQILI4q31GmTKkdqlH4",
  authDomain: "simple-authentication-8bdfd.firebaseapp.com",
  projectId: "simple-authentication-8bdfd",
  storageBucket: "simple-authentication-8bdfd.appspot.com",
  messagingSenderId: "523020815872",
  appId: "1:523020815872:web:d2d6406ffbdc5fe23592e5"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;