import { useEffect, useState } from "react";
import "./App.css";
import PhoneVerify from "./components/PhoneVerify/PhoneVerify";
import firebase from "firebase/compat/app";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyAmqLcI0Ka6UHx_xu8HVWuk3e89sfqF1d0",
    authDomain: "verify-otp-df9ce.firebaseapp.com",
    projectId: "verify-otp-df9ce",
    storageBucket: "verify-otp-df9ce.appspot.com",
    messagingSenderId: "829737744550",
    appId: "1:829737744550:web:f1439f8aa1df111f489c67",
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unSubscriber = onAuthStateChanged(firebase.auth(), (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });

    return () => unSubscriber();
  }, []);

  return (
    <div className="App">
      <h1>Verify Phone Number with OTP</h1>
      <PhoneVerify auth={firebase.auth()}></PhoneVerify>
    </div>
  );
}

export default App;
