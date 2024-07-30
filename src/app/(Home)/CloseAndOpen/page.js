// "use client"

// import React, { useEffect, useState } from 'react'
// import { IoMdClose } from "react-icons/io";
// import "bootstrap/dist/css/bootstrap.min.css"
// import "./close.css"

// const page = () => {

//     const [open,setOpen]=useState(false);


  

//     const handleOpen = ()=>{
//         setOpen(true);
//     }

//     const handleClose = ()=>{
//         setOpen(false);
//     }

//     useEffect(()=>{
//         const initialState = document.querySelector(".main-div");
//         if(open){
//             initialState.classList.add("delay-effect");
//         }
//     },[open])
    
//   return (
//     <>
//         <div >Close and Open page</div>
//         <button className='bg-primary btn-open' onClick={handleOpen}>{open ? "Open" : "Close"}</button>
 

//         {open && <div className='bg-success text-light w-50 text-right mx-auto h-50 main-div'>
//             <button className='p-4 ' onClick={handleClose}><IoMdClose/></button>
//             <form className='d-flex flex-column justify-content-center align-items-center gap-3 p-5 '>
//                 <label>
//                     UserName:
//                     <input type="text" placeholder='search' />
//                 </label>
//                 <label>
//                     email:
//                     <input type="text" placeholder='search' />
//                 </label>
//             </form>
//         </div> }


//     </>
    
//   )
// }

// export default page

"use client"

import React, { useEffect, useState } from 'react';
import { IoMdClose } from "react-icons/io";
import "bootstrap/dist/css/bootstrap.min.css";
import "./close.css";

const Page = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const options = ["Mumbai","Chennai",'Bangalore'];

  return (
    <>
      <div>Close and Open page</div>
      <button className='bg-primary btn-open delay-effect' onClick={handleOpen}>
        {open ? "Close" : "Open"}
      </button>

      {open && (
        <div className='bg-success text-light w-50 text-right mx-auto h-100'>
          <button className='p-4' onClick={handleClose}>
            <IoMdClose />
          </button>
          <form className='d-flex flex-column justify-content-center align-items-center gap-3 p-5 main-div delay-effect'>
            <label>
              UserName:
              <input type="text" placeholder='search' />
            </label>
            <label>
              Email:
              <input type="text" placeholder='search' />
            </label>
            <label>
                Select :
                <select>
                    {
                        options.map((data,index)=>( <option key={index} value={data}>
                            {data}
                        </option>) 
                        )
                    }
                </select>
            </label>
          </form>
        </div>
      )}
    </>
  );
};

export default Page;
