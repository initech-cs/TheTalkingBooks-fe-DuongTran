import React from "react";
import FacebookLogin from "react-facebook-login";

export default function Login() {
  const responseFacebook = (response) => {
    console.log(response);
  };
  return (
    <div>
      <FacebookLogin
        appId="656968314900863"

        fields="name,email,picture"
        callback={responseFacebook}
      />
    </div>
  );
}
