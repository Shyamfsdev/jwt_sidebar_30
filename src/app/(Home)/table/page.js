// "use client"
// import React, { useState, useEffect } from 'react';
// import { DataGrid } from '@mui/x-data-grid';
// import axios from 'axios';
// import Cookies from 'js-cookie';
// import "bootstrap/dist/css/bootstrap.min.css"
// import "./table.css"
// import { CiSearch } from "react-icons/ci";


// const DataTable = () => {
//   const TOKEN = Cookies.get('Tokensss');

//   console.log(TOKEN);
//   const [columns, setColumns] = useState([]);
//   const [rows, setRows] = useState([]);
//   const [error, setError] = useState(null); // State to hold error message

//   const API_TOKEN = "engguergi09ertgiojg"

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Make sure the URL and parameters are correct
//         const response = await axios.get(`http://192.168.29.187:8000/customer_master_list?access_token=${TOKEN}`, {
//           headers: {
//             'Authorization': `${API_TOKEN}`,
//             'Content-Type': 'application/json'
//           },
//         });

//         console.log("Data fetched successfully:", response.data);

//         const result = response.data;

//         if (result.action === 'success') {
//           const apiData = result.data;

//           // Define columns based on API response structure
//           const fetchedColumns = [
//             { field: 'id', headerName: 'ID', width: 100 },
//             { field: 'customer_name', headerName: 'Customer Name', width: 210 },
//             { field: 'bussiness_name', headerName: 'Business Name', width: 210 },
//             { field: 'customer_code', headerName: 'Customer Code', width: 210 },
//             { field: 'contact_number', headerName: 'Contact Number', width: 210 },
//             { field: 'gst_no', headerName: 'GST No', width: 210 },
//             { field: 'trading_type', headerName: 'Trading Type', width: 210 },
//             // Add more columns as per your requirements
//           ];

//           // Map API data to rows
//           const fetchedRows = apiData.map((item, index) => ({
//             id: index, // Assuming 'id' is required for DataGrid row identification
//             customer_name: item.customer_name,
//             bussiness_name: item.bussiness_name,
//             customer_code: item.customer_code,
//             contact_number: item.contact_number,
//             gst_no: item.gst_no,
//             trading_type: item.trading_type,
//             // Add more fields as per your requirements
//           }));

//           setColumns(fetchedColumns);
//           setRows(fetchedRows);
//         } else {
//           setError("There has been some error while fetching the data");
//         }
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setError(`Error fetching data: ${error.message}`);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <>
//     <div className='text-right mb-3 d-flex justify-content-end align-items-center input-div p-3'>
//       <div className='d-flex w-25 bg-light rounded justify-content-between p-2 align-items-center'>
//       <input type="text" className='w-50 rounded p-1 ' placeholder='search'/>
//       <CiSearch />
//       </div>
//     </div>
//     <div style={{ height: 400, width: '100%' }}>
//       {error && <div style={{ color: 'red' }}>Error: {error}</div>}
//       <DataGrid
        
//         rows={rows}
//         columns={columns}
//         disableColumnFilter
//         disableColumnMenu
//         initialState={{
//           pagination: {
//             paginationModel: { page: 0, pageSize: 5 },
//           },
//         }}
//         pageSizeOptions={[5, 10, 15]}
//         className='d-flex justify-content-between w-100'
//       />
//     </div>
//     </>
//   );
// };

// export default DataTable;

"use client"

import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import Cookies from 'js-cookie';
import "bootstrap/dist/css/bootstrap.min.css";
import "./table.css";
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; 
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import CustomPagination from './CustomPagination';

const DataTable = () => {
  const TOKEN = Cookies.get('Tokensss');
  const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState([]);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [modalInfo, setModalInfo] = useState({ show: false, recipient: '' });
  const [page, setPage] = useState(1);
  const API_TOKEN = "engguergi09ertgiojg";



  const handleNext = () => {
    setPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrev = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://192.168.29.187:8000/customer_master_list?access_token=${TOKEN}`, {
          headers: {
            'Authorization': `${API_TOKEN}`,
            'Content-Type': 'application/json'
          },
        });

        console.log("Data fetched successfully:", response.data);

        const result = response.data;

        if (result.action === 'success') {
          const apiData = result.data;

          const fetchedColumns = [
            { field: 'id', headerName: 'ID', width: 100 },
            { field: 'customer_name', headerName: 'Customer Name', width: 210 },
            { field: 'bussiness_name', headerName: 'Business Name', width: 210 },
            { field: 'customer_code', headerName: 'Customer Code', width: 210 },
            { field: 'contact_number', headerName: 'Contact Number', width: 210 },
            { field: 'gst_no', headerName: 'GST No', width: 210 },
            { field: 'trading_type', headerName: 'Trading Type', width: 210 },
          ];

          const fetchedRows = apiData.map((item, index) => ({
            id: index,
            customer_name: item.customer_name,
            bussiness_name: item.bussiness_name,
            customer_code: item.customer_code,
            contact_number: item.contact_number,
            gst_no: item.gst_no,
            trading_type: item.trading_type,
          }));

          setColumns(fetchedColumns);
          setRows(fetchedRows);
        } else {
          setError("There has been some error while fetching the data");
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(`Error fetching data: ${error.message}`);
      }
    };

    fetchData();
  }, [TOKEN]);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredRows = rows.filter(row =>
    Object.values(row).some(value =>
      value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );
  console.log(filteredRows);

  

  const handleOpenModal = () => {
    setModalInfo({ show: true });
  };

  const handleCloseModal = () => {
    setModalInfo({ show: false, recipient: '' });
  };


  return (
    <>
      <div className='text-right mb-3 w-100 d-flex justify-content-between align-items-center input-div p-3'>
          <div className='input-button '>
            <button className=' text-light p-1 me-5 fs-6 d-flex align-items-center gap-1 justify-content-between' onClick={() => handleOpenModal()}><FaPlus />
            Add New</button>
          </div>
          <div className='d-flex w-25 bg-light rounded justify-content-between p-2 align-items-center'>
            <input
              type="text"
              className='w-50 rounded p-1'
              placeholder='Search'
              value={searchQuery}
              onChange={handleSearch}
            />
            <CiSearch className='me-3 fs-5'/>
          </div>
      </div>
      <div style={{ height: 400, width: '100%' }}>
        {error && <div style={{ color: 'red' }}>Error: {error}</div>}
        <DataGrid
          rows={filteredRows}
          columns={columns}
          disableColumnFilter
          disableColumnMenu
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
              
            },
          }}
          pageSizeOptions={[5, 10, 15]}
          className='d-flex justify-content-between w-100'
          // components={{
          //   Pagination: CustomPagination(),
          // }}
        >
           
        </DataGrid>

      

        {/* <Stack spacing={2}>
            <Pagination count={5} showFirstButton showLastButton />
          </Stack> */}

        
        
      </div>

      <div>
      {/* <button type="button" className="btn btn-primary" onClick={() => handleOpenModal('@mdo')}>
        Open modal for @mdo
      </button> */}
      {/* <button type="button" className="btn btn-primary" onClick={() => handleOpenModal('@fat')}>
        Open modal for @fat
      </button>
      <button type="button" className="btn btn-primary" onClick={() => handleOpenModal('@getbootstrap')}>
        Open modal for @getbootstrap
      </button> */}

      {modalInfo.show && (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-boxx" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Add Details</h5>
                <button type="button" className="btn-close" onClick={handleCloseModal} aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label">Customer Name:</label>
                    <input type="text" className="form-control" id="Customer-name" value={modalInfo.recipient} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label">Buisness Name:</label>
                    <input type="text" className="form-control" id="buisness-name" value={modalInfo.recipient} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label">Customer Code:</label>
                    <input type="text" className="form-control" id="Customer-code" value={modalInfo.recipient} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label">Contact Number:</label>
                    <input type="text" className="form-control" id="Contact-number" value={modalInfo.recipient} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label">GST No:</label>
                    <input type="text" className="form-control" id="GST-number" value={modalInfo.recipient} />
                  </div>
                  {/* <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label">trading Type:</label>
                    <input type="text" className="form-control" id="trading-type" value={modalInfo.recipient} />
                  </div> */}
                  {/* <div className="mb-3">
                    <label htmlFor="message-text" className="col-form-label">Message:</label>
                    <textarea className="form-control" id="message-text"></textarea>
                  </div> */}
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-danger" onClick={handleCloseModal}>Close</button>
                <button type="button" className="btn btn-primary">Save</button>
              </div>
            </div>
          </div>
        </div>
      )}
      </div>
    </>
  );
};

export default DataTable;

