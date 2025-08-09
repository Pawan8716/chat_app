import React, { useState } from "react";
import "./login.css";
import assets from "../../assets/assets";

const Login = () => {
  // Start with Login first
  const [currState, setCurrState] = useState("Login");

  return (
    <div className="login">
      <img src={assets.logo_big} alt="App Logo" className="logo" />
      <form action="" className="login_form">
        <h2>{currState}</h2>

        {/* Show username only for Sign up */}
        {currState === "Sign up" && (
          <input
            type="text"
            className="form_input"
            placeholder="Username"
            required
          />
        )}

        <input
          type="email"
          className="form_input"
          placeholder="Email address"
          required
        />
        <input
          type="password"
          className="form_input"
          placeholder="Password"
          required
        />

        <button type="submit">
          {currState === "Sign up" ? "Create account" : "Login now"}
        </button>

        {/* Terms & Privacy only for Sign up */}
        {currState === "Sign up" && (
          <div className="login_term">
            <input type="checkbox" required />
            <p>Agree to the terms of use & privacy policy.</p>
          </div>
        )}

        {/* Toggle between Login and Sign up */}
        <div className="login_forgot">
          {currState === "Login" ? (
            <p className="login_toggle">
              Don’t have an account?{" "}
              <span onClick={() => setCurrState("Sign up")}>
                Create account
              </span>
            </p>
          ) : (
            <p className="login_toggle">
              Already have an account?{" "}
              <span onClick={() => setCurrState("Login")}>Login here</span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;

// // Original code commented out for reference

// import React from "react";
// import "./login.css";
// import assets from "../../assets/assets";

// import { useState } from "react";
// const Login = () => {
//   const [currState, setCurrState] = useState("Sign up");

//   return (
//     <div className="login">
//       <img src={assets.logo_big} alt="" className="logo" />
//       <form action="" className="login_form">
//         <h2>{currState}</h2>

//         {currState === "Sign up" ? (
//           <input
//             type="text"
//             className="form_input"
//             placeholder="Username"
//             required
//           />
//         ) : null}
//         <input
//           type="email"
//           className="form_input"
//           placeholder="email address"
//           required
//         />
//         <input
//           type="password"
//           className="form_input"
//           placeholder="password"
//           required
//         />
//         <button type="submit">
//           {currState === "Sign up" ? "Create account" : "login now"}
//         </button>
//        {currState === "Sign up" && (
//   <div className="login_term">
//     <input type="checkbox" />
//     <p>Agree to the terms of use & privacy policy.</p>
//   </div>
// )}
//         <div className="login_forgot">
//           {currState === "Sign up" ? (
//             <p className="login_toggle">
//               Already have an account{" "}
//               <span onClick={() => setCurrState("Login")}>Login here</span>
//             </p>
//           ) : (
//             <p className="login_toggle">
//               Create an account{" "}
//               <span onClick={() => setCurrState("Sign up")}>Click here</span>
//             </p>
//           )}
//         </div>
//       </form>
//     </div>
//   );
// };
// export default Login;
