// import React, { useEffect, useState } from 'react';
// import { fetchSecureData } from './secureapi';

// export default function SecureData() {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const getData = async () => {
//       try {
//         const result = await fetchSecureData();
//         setData(result);
//         console.log("The result data is")
//       } catch (err) {
//         setError('Failed to fetch secure data');
//       }
//     };

//     getData();
//   }, []);

//   return (
//     <div>
//       <h1>Secure Data</h1>
//       {error && <p>{error}</p>}
//       {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
//     </div>
//   );
// }
