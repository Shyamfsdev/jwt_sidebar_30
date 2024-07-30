"use client";

import { useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useRouter } from "next/navigation";
import Cookies from 'js-cookie';
import SecureData from '../auth/secureapi';




export default function Home() {

  const router = useRouter();

  useEffect(() => {
    // Check if the user is authenticated
    const token = Cookies.get('Tokensss');

    if (!token) {
      // Redirect to /auth if not authenticated
      router.push('/auth');
    }
  }, [router]);

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Typography component="div" paragraph>
        <div className="flex min-h-screen flex-col items-center justify-between p-24" style={{ flexGrow: 1 }}>
          <h1 className="fw-strong text-center">Awesome features</h1> 

          <div className="container row d-flex justify-content-center main-container mt-5">
            <div className="d-flex col-lg-3 col-md-3 col-sm-6">
              <div className="d-flex sub-container">
                <img src="https://templates.iqonic.design/booksto/intro/images/features/01.png" alt="create-design"/>
                <span className="fs-5 ms-3 mt-3 ">Creative Design</span>
              </div>
            </div>

            <div className="d-flex col-lg-3 col-md-3 col-sm-6">
              <div className="d-flex sub-container">
                <img src="https://templates.iqonic.design/booksto/intro/images/features/02.png" alt="create-design"/>
                <span className="fs-5 ms-3 mt-3 ">AmCharts</span>
              </div>
            </div>

            <div className="d-flex col-lg-3 col-md-3 col-sm-6">
              <div className="d-flex sub-container">
                <img src="https://templates.iqonic.design/booksto/intro/images/features/03.png" alt="create-design"/>
                <span className="fs-5 ms-3 mt-3 ">ApexChart</span>
              </div>
            </div>

            <div className="d-flex col-lg-3 col-md-3 col-sm-6">
              <div className="d-flex sub-container">
                <img src="https://templates.iqonic.design/booksto/intro/images/features/04.png" alt="create-design"/>
                <span className="fs-5 ms-3 mt-3 ">Wow Animation</span>
              </div>
            </div>

            <div className="d-flex col-lg-3 col-md-3 col-sm-6">
              <div className="d-flex sub-container">
                <img src="https://templates.iqonic.design/booksto/intro/images/features/05.png" alt="create-design"/>
                <span className="fs-5 ms-3 mt-3 ">Animated.css</span>
              </div>
            </div>

            <div className="d-flex col-lg-3 col-md-3 col-sm-6">
              <div className="d-flex sub-container">
                <img src="https://templates.iqonic.design/booksto/intro/images/features/06.png" alt="create-design"/>
                <span className="fs-5 ms-3 mt-3 ">Flot Chart</span>
              </div>
            </div>

            <div className="d-flex col-lg-3 col-md-3 col-sm-6">
              <div className="d-flex sub-container">
                <img src="https://templates.iqonic.design/booksto/intro/images/features/07.png" alt="create-design"/>
                <span className="fs-5 ms-3 mt-3 ">Moriss Chart</span>
              </div>
            </div>

            <div className="d-flex col-lg-3 col-md-3 col-sm-6">
              <div className="d-flex sub-container">
                <img src="https://templates.iqonic.design/booksto/intro/images/features/08.png" alt="create-design"/>
                <span className="fs-5 ms-3 mt-3 ">Creative Design</span>
              </div>
            </div>

            <div className="d-flex col-lg-3 col-md-3 col-sm-6">
              <div className="d-flex sub-container">
                <img src="https://templates.iqonic.design/booksto/intro/images/features/09.png" alt="create-design"/>
                <span className="fs-5 ms-3 mt-3 ">Bodymovin.Js</span>
              </div>
            </div>

            <div className="d-flex col-lg-3 col-md-3 col-sm-6">
              <div className="d-flex sub-container">
                <img src="https://templates.iqonic.design/booksto/intro/images/features/10.png" alt="create-design"/>
                <span className="fs-5 ms-3 mt-3 ">Countdown.Js</span>
              </div>
            </div>

            <div className="d-flex col-lg-3 col-md-3 col-sm-6">
              <div className="d-flex sub-container">
                <img src="https://templates.iqonic.design/booksto/intro/images/features/11.png" alt="create-design"/>
                <span className="fs-5 ms-3 mt-3 ">Slick.Js</span>
              </div>
            </div>

            <div className="d-flex col-lg-3 col-md-3 col-sm-6">
              <div className="d-flex sub-container">
                <img src="https://templates.iqonic.design/booksto/intro/images/features/12.png" alt="create-design"/>
                <span className="fs-5 ms-3 mt-3 ">Counterup.Js</span>
              </div>
            </div>

            <div className="d-flex col-lg-3 col-md-3 col-sm-6">
              <div className="d-flex sub-container">
                <img src="https://templates.iqonic.design/booksto/intro/images/features/13.png" alt="create-design"/>
                <span className="fs-5 ms-3 mt-3 ">Fully Responsive</span>
              </div>
            </div>

            <div className="d-flex col-lg-3 col-md-3 col-sm-6">
              <div className="d-flex sub-container">
                <img src="https://templates.iqonic.design/booksto/intro/images/features/14.png" alt="create-design"/>
                <span className="fs-5 ms-3 mt-3 ">Speed Optimized</span>
              </div>
            </div>

            <div className="d-flex col-lg-3 col-md-3 col-sm-6">
              <div className="d-flex sub-container">
                <img src="https://templates.iqonic.design/booksto/intro/images/features/01.png" alt="create-design"/>
                <span className="fs-5 ms-3 mt-3 ">Clean Code</span>
              </div>
            </div>

            <div className="d-flex col-lg-3 col-md-3 col-sm-6">
              <div className="d-flex sub-container">
                <img src="https://templates.iqonic.design/booksto/intro/images/features/15.png" alt="create-design"/>
                <span className="fs-5 ms-3 mt-3 ">W3c Validation</span>
              </div>
            </div>

            <div className="d-flex col-lg-3 col-md-3 col-sm-6">
              <div className="d-flex sub-container">
                <img src="https://templates.iqonic.design/booksto/intro/images/features/16.png" alt="create-design"/>
                <span className="fs-5 ms-3 mt-3 ">Google Font</span>
              </div>
            </div>

            <div className="d-flex col-lg-3 col-md-3 col-sm-6">
              <div className="d-flex sub-container">
                <img src="https://templates.iqonic.design/booksto/intro/images/features/17.png" alt="create-design"/>
                <span className="fs-5 ms-3 mt-3 ">Magnific Popup</span>
              </div>
            </div>

            <div className="d-flex col-lg-3 col-md-3 col-sm-6">
              <div className="d-flex sub-container">
                <img src="https://templates.iqonic.design/booksto/intro/images/features/18.png" alt="create-design"/>
                <span className="fs-5 ms-3 mt-3 ">bootstrap V4+</span>
              </div>
            </div>

            <div className="d-flex col-lg-3 col-md-3 col-sm-6">
              <div className="d-flex sub-container">
                <img src="https://templates.iqonic.design/booksto/intro/images/features/19.png" alt="create-design"/>
                <span className="fs-5 ms-3 mt-3 ">Font Awesome</span>
              </div>
            </div>

            <div className="d-flex col-lg-3 col-md-3 col-sm-6">
              <div className="d-flex sub-container">
                <img src="https://templates.iqonic.design/booksto/intro/images/features/20.png" alt="create-design"/>
                <span className="fs-5 ms-3 mt-3 ">Jquery</span>
              </div>
            </div>
          </div>
          <SecureData />
        </div>
        
      </Typography>
    </Box>
  );
}


//study purposes
// import { useRouter } from 'next/router';
// import Cookies from 'js-cookie';

// const AuthPage = () => {
//   const router = useRouter();

//   // Check if the user is already logged in
//   if (Cookies.get('Tokensss')) {
//     // If they are, redirect them to the / page
//     router.push('/');
//     return null;
//   }

//   // If they're not logged in, render the auth page as usual
//   return (
//     <div>
//       <!-- auth page content -->
//     </div>
//   );
// };

// export default AuthPage;