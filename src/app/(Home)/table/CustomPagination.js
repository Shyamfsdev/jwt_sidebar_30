// import React from 'react';
// import Pagination from '@mui/material/Pagination';
// import { useGridApiContext, useGridSelector, gridPageSelector, gridPageCountSelector } from '@mui/x-data-grid';

// const CustomPagination = () => {
//   const apiRef = useGridApiContext();
//   const page = useGridSelector(apiRef, gridPageSelector);
//   const pageCount = useGridSelector(apiRef, gridPageCountSelector);

//   const handleChange = (event, value) => {
//     apiRef.current.setPage(value - 1);
//   };

//   return (
//     <Pagination
//       color="primary"
//       count={pageCount}
//       page={page + 1}
//       onChange={handleChange}
//       showFirstButton
//       showLastButton
//     />
//   );
// };

// export default CustomPagination;
