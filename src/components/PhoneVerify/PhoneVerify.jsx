import React, { useEffect } from "react";
import firebase from "firebase/compat/app";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";

const PhoneVerify = ({ auth }) => {
  useEffect(() => {
    const ui =
      firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);
    ui.start(".otp-container", {
      signInOptions: [firebase.auth.PhoneAuthProvider.PROVIDER_ID],
      signInSuccessUrl:
        "https://firebase.google.com/docs/auth/web/firebaseui#:~:text=FirebaseUI%20is%20a%20library%20built,Twitter%20and%20GitHub%20sign%2Din.",
      privacyPolicyUrl: "/",
    });
  });

  return <div className="otp-container"></div>;
};

export default PhoneVerify;
