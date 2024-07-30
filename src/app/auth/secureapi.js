// // import axios from 'axios';
// // import Cookies from 'js-cookie';

// // const SECURE_API_URL = 'http://192.168.29.192:8004/valid_token';

// // export async function fetchSecureData() {
// //   const token = Cookies.get('Tokens'); 

// //   try {

// //     const response = await axios.get(`${SECURE_API_URL}?user_token=${token}`);
// //     console.log("the response fetched data is ",response);
// //     return response.data;
// //   } catch (error) {
// //     console.error('Error fetching secure data', error);
// //     throw error;
// //   }
// // }


// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import Cookies from 'js-cookie';

// const SECURE_API_URL = 'http://192.168.29.192:8004/valid_token';

// export default function Home() {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchData = async () => {
//       const token = Cookies.get('Tokensss');

//       try {
//         const response = await axios.get(`${SECURE_API_URL}?user_token=${token}`);
//         setData(response.data);
//       } catch (err) {
//         setError('Failed to fetch secure data');
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Secure Data</h1>
//       {error && <p>{error}</p>}
//       {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
//     </div>
//   );
// } 


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const SECURE_API_URL = 'http://192.168.29.192:8004/valid_token';

export default function SecureData() {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const token = Cookies.get('Tokensss');

      if (!token) {
        setError('No token found');
        return;
      }

      try {
        const response = await axios.get(`${SECURE_API_URL}?user_token=${token}`);
        setData(response.data);
      } catch (err) {
        setError('Failed to fetch secure data');
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Secure Data</h1>
      {error && <p>{error}</p>}
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
}
