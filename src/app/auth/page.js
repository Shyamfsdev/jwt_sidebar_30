// // // // "use client";

// // // // import { useState } from "react";
// // // // import { useRouter } from "next/navigation";
// // // // import login from "./auth";
// // // // import Cookies from "js-cookie";
// // // // import "bootstrap/dist/css/bootstrap.min.css";
// // // // import "./style.css";
// // // // import { FaRegUser } from "react-icons/fa";
// // // // import { RiLockPasswordFill } from "react-icons/ri";

// // // // export default function LoginPage() {
// // // //   const [formData, setFormData] = useState({ username: "", password: "" });
// // // //   const [error, setError] = useState("");
// // // //   const router = useRouter();

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();
// // // //     console.log("Attempting to login", formData.username, formData.password);

// // // //     try {
// // // //       const response = await login(formData.username, formData.password);

// // // //       if (response.access_token) {
// // // //         console.log("Login successful");
// // // //         Cookies.set("token", response.access_token, { expires: 1 });
// // // //         router.push("/"); // Redirect to the home page
// // // //       } else {
// // // //         throw new Error("Token not fetched successfully");
// // // //       }
// // // //     } catch (error) {
// // // //       console.log("Login failed");
// // // //       setError("Invalid credentials");
// // // //     }
// // // //   };

// // // //   const handleChange = (e) => {
// // // //     const { name, value } = e.target;

// // // //     setFormData((prevState) => ({
// // // //       ...prevState,
// // // //       [name]: value,
// // // //     }));
// // // //   };

// // // //   return (
// // // //     <div className="main-containers d-flex justify-content-center align-items-center">
// // // //       <div className="sub-containers">
// // // //         <form onSubmit={handleSubmit} className="p-4 rounded shadow-sm form-background">
// // // //           <img src="https://i.pinimg.com/564x/db/c6/57/dbc657389ad3cd2a6c0be320f7be1c12.jpg" alt="tesla" className="w-25 mx-auto mb-2" />
// // // //           <h5 className="text-center mb-4">Welcome!</h5>
// // // //           <div className="mb-3">
// // // //             <label htmlFor="username" className="form-label">Username:</label>
// // // //             <div className="input-group">
// // // //               <span className="input-group-text"><FaRegUser className="text-danger" /></span>
// // // //               <input
// // // //                 type="text"
// // // //                 id="username"
// // // //                 name="username"
// // // //                 value={formData.username}
// // // //                 onChange={handleChange}
// // // //                 className="form-control"
// // // //                 placeholder="Email ID"
// // // //               />
// // // //             </div>
// // // //           </div>
// // // //           <div className="mb-3">
// // // //             <label htmlFor="password" className="form-label">Password:</label>
// // // //             <div className="input-group">
// // // //               <span className="input-group-text"><RiLockPasswordFill className="text-danger" /></span>
// // // //               <input
// // // //                 type="password"
// // // //                 id="password"
// // // //                 name="password"
// // // //                 value={formData.password}
// // // //                 onChange={handleChange}
// // // //                 className="form-control"
// // // //                 placeholder="Password"
// // // //               />
// // // //             </div>
// // // //           </div>
// // // //           <div className="d-flex justify-content-between align-items-center mb-3">
// // // //             <div className="form-check">
// // // //               <input type="checkbox" className="form-check-input" id="rememberMe" />
// // // //               <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
// // // //             </div>
// // // //             <a href="#" className="text-decoration-none text-danger">Forgot password?</a>
// // // //           </div>
// // // //           <button type="submit" className="btn btn-danger w-100">Login</button>
// // // //         </form>
// // // //         {error && <div className="alert alert-danger mt-3">Error Occurred: {error}</div>}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }


// // // "use client";

// // // import { useState } from "react";
// // // import { useRouter } from "next/router";
// // // import axios from "axios";
// // // import Cookies from "js-cookie";
// // // import "bootstrap/dist/css/bootstrap.min.css";
// // // import { FaRegUser } from "react-icons/fa";
// // // import { RiLockPasswordFill } from "react-icons/ri";

// // // const API_URL = "http://192.168.29.192:8004/multiple_login";
// // // const SECURE_API_URL = 'http://192.168.29.192:8004/valid_token';

// // // export default function LoginPage() {
// // //   const [formData, setFormData] = useState({ username: "", password: "" });
// // //   const [error, setError] = useState("");
// // //   const router = useRouter();

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     console.log("Attempting to login", formData.username, formData.password);

// // //     try {
// // //       const response = await axios.post(API_URL, { user_name: formData.username, show_password: formData.password }, {
// // //         headers: {
// // //           "Authorization": "engguergi09ertgiojg",
// // //         }
// // //       });

// // //       if (response.data.access_token) {
// // //         Cookies.set("Tokensss", response.data.access_token, { expires: 1 });
// // //         const tokenResponse = await axios.get(`${SECURE_API_URL}?user_token=${response.data.access_token}`);
        
// // //         if (tokenResponse.data) {
// // //           console.log("Token validation successful");
// // //           router.push("/"); // Redirect to the home page
// // //         } else {
// // //           throw new Error("Token validation failed");
// // //         }
// // //       } else {
// // //         throw new Error("Token not found in response");
// // //       }
// // //     } catch (error) {
// // //       console.log("Login or token validation failed", error);
// // //       setError("Invalid credentials or token validation failed");
// // //     }
// // //   };

// // //   const handleChange = (e) => {
// // //     const { name, value } = e.target;

// // //     setFormData((prevState) => ({
// // //       ...prevState,
// // //       [name]: value,
// // //     }));
// // //   };

// // //   return (
// // //     <div className="main-containers d-flex justify-content-center align-items-center">
// // //       <div className="sub-containers">
// // //         <form onSubmit={handleSubmit} className="p-4 rounded shadow-sm form-background">
// // //           <img src="https://i.pinimg.com/564x/db/c6/57/dbc657389ad3cd2a6c0be320f7be1c12.jpg" alt="tesla" className="w-25 mx-auto mb-2" />
// // //           <h5 className="text-center mb-4">Welcome!</h5>
// // //           <div className="mb-3">
// // //             <label htmlFor="username" className="form-label">Username:</label>
// // //             <div className="input-group">
// // //               <span className="input-group-text"><FaRegUser className="text-danger" /></span>
// // //               <input
// // //                 type="text"
// // //                 id="username"
// // //                 name="username"
// // //                 value={formData.username}
// // //                 onChange={handleChange}
// // //                 className="form-control"
// // //                 placeholder="Email ID"
// // //               />
// // //             </div>
// // //           </div>
// // //           <div className="mb-3">
// // //             <label htmlFor="password" className="form-label">Password:</label>
// // //             <div className="input-group">
// // //               <span className="input-group-text"><RiLockPasswordFill className="text-danger" /></span>
// // //               <input
// // //                 type="password"
// // //                 id="password"
// // //                 name="password"
// // //                 value={formData.password}
// // //                 onChange={handleChange}
// // //                 className="form-control"
// // //                 placeholder="Password"
// // //               />
// // //             </div>
// // //           </div>
// // //           <div className="d-flex justify-content-between align-items-center mb-3">
// // //             <div className="form-check">
// // //               <input type="checkbox" className="form-check-input" id="rememberMe" />
// // //               <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
// // //             </div>
// // //             <a href="#" className="text-decoration-none text-danger">Forgot password?</a>
// // //           </div>
// // //           <button type="submit" className="btn btn-danger w-100">Login</button>
// // //         </form>
// // //         {error && <div className="alert alert-danger mt-3">Error Occurred: {error}</div>}
// // //       </div>
// // //     </div>
// // //   );
// // // }


// // "use client";

// // import { useState } from "react";
// // import { useRouter } from "next/navigation";
// // import axios from "axios";
// // import Cookies from "js-cookie";
// // import "bootstrap/dist/css/bootstrap.min.css";
// // import { FaRegUser } from "react-icons/fa";
// // import { RiLockPasswordFill } from "react-icons/ri";

// // const API_URL = "http://192.168.29.192:8004/multiple_login";
// // const SECURE_API_URL = 'http://192.168.29.192:8004/valid_token';

// // export default function LoginPage() {
// //   const [formData, setFormData] = useState({ username: "", password: "" });
// //   const [error, setError] = useState("");
// //   const router = useRouter();

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     console.log("Attempting to login", formData.username, formData.password);

// //     try {
// //       const response = await axios.post(API_URL, { user_name: formData.username, show_password: formData.password }, {
// //         headers: {
// //           "Authorization": "engguergi09ertgiojg",
// //         }
// //       });

// //       if (response.data.access_token) {
// //         Cookies.set("Tokensss", response.data.access_token, { expires: 1 });
// //         const tokenResponse = await axios.get(`${SECURE_API_URL}?user_token=${response.data.access_token}`);
        
// //         if (tokenResponse.data) {
// //           console.log("Token validation successful");
// //           router.push("/"); // Redirect to the home page
// //         } else {
// //           throw new Error("Token validation failed");
// //         }
// //       } else {
// //         throw new Error("Token not found in response");
// //       }
// //     } catch (error) {
// //       console.log("Login or token validation failed", error);
// //       setError("Invalid credentials or token validation failed");
// //     }
// //   };

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;

// //     setFormData((prevState) => ({
// //       ...prevState,
// //       [name]: value,
// //     }));
// //   };

// //   return (
// //     <div className="main-containers d-flex justify-content-center align-items-center">
// //       <div className="sub-containers">
// //         <form onSubmit={handleSubmit} className="p-4 rounded shadow-sm form-background">
// //           <img src="https://i.pinimg.com/564x/db/c6/57/dbc657389ad3cd2a6c0be320f7be1c12.jpg" alt="tesla" className="w-25 mx-auto mb-2" />
// //           <h5 className="text-center mb-4">Welcome!</h5>
// //           <div className="mb-3">
// //             <label htmlFor="username" className="form-label">Username:</label>
// //             <div className="input-group">
// //               <span className="input-group-text"><FaRegUser className="text-danger" /></span>
// //               <input
// //                 type="text"
// //                 id="username"
// //                 name="username"
// //                 value={formData.username}
// //                 onChange={handleChange}
// //                 className="form-control"
// //                 placeholder="Email ID"
// //               />
// //             </div>
// //           </div>
// //           <div className="mb-3">
// //             <label htmlFor="password" className="form-label">Password:</label>
// //             <div className="input-group">
// //               <span className="input-group-text"><RiLockPasswordFill className="text-danger" /></span>
// //               <input
// //                 type="password"
// //                 id="password"
// //                 name="password"
// //                 value={formData.password}
// //                 onChange={handleChange}
// //                 className="form-control"
// //                 placeholder="Password"
// //               />
// //             </div>
// //           </div>
// //           <div className="d-flex justify-content-between align-items-center mb-3">
// //             <div className="form-check">
// //               <input type="checkbox" className="form-check-input" id="rememberMe" />
// //               <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
// //             </div>
// //             <a href="#" className="text-decoration-none text-danger">Forgot password?</a>
// //           </div>
// //           <button type="submit" className="btn btn-danger w-100">Login</button>
// //         </form>
// //         {error && <div className="alert alert-danger mt-3">Error Occurred: {error}</div>}
// //       </div>
// //     </div>
// //   );
// // }

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Use next/navigation for the new app directory
import axios from "axios";
import Cookies from "js-cookie";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import "./style.css"
import login from "./auth";


const API_URL = "http://192.168.29.192:8004/multiple_login";
const SECURE_API_URL = 'http://192.168.29.192:8004/valid_token';

export default function LoginPage() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Attempting to login", formData.username, formData.password);

    try {
      const response = await login(formData.username,formData.password);

      if (response.access_token) {
        
        Cookies.set("Tokensss", response.access_token, { expires: 1 });

        
        const tokenResponse = await axios.get(`${SECURE_API_URL}?user_token=${response.access_token}`, {
          headers: {
            Authorization: `Bearer ${response.access_token}`,
          },
          params:{
            user_token: `Bearer ${response.access_token}`
          }
          
        });

        console.log("The token response is sucessfully generated in this range is ",tokenResponse);

        
        
        if (tokenResponse.status === 200) {
          console.log("Token validation successful");
          router.push("/"); // Redirect to the home page
        } else {
          throw new Error("Token validation failed");
        }
      } else {
        throw new Error("Token not found in response");
      }
    } catch (error) {
      console.log("Login or token validation failed", error);
      setError("Invalid credentials or token validation failed");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="main-containers d-flex justify-content-center align-items-center">
      <div className="sub-containers">
        <form onSubmit={handleSubmit} className="p-4 rounded shadow-sm form-background">
          <img src="https://i.pinimg.com/564x/db/c6/57/dbc657389ad3cd2a6c0be320f7be1c12.jpg" alt="tesla" className="w-25 mx-auto mb-2" />
          <h5 className="text-center mb-4">Welcome!</h5>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username:</label>
            <div className="input-group">
              <span className="input-group-text"><FaRegUser className="text-danger" /></span>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="form-control"
                placeholder="Email ID"
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password:</label>
            <div className="input-group">
              <span className="input-group-text"><RiLockPasswordFill className="text-danger" /></span>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="form-control"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="rememberMe" />
              <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
            </div>
            <a href="#" className="text-decoration-none text-danger">Forgot password?</a>
          </div>
          <button type="submit" className="btn btn-danger w-100">Login</button>
        </form>
        {error && <div className="alert alert-danger mt-3">Error Occurred: {error}</div>}
      </div>
    </div>
  );
}
