// import React, { useState } from "react";
// import { Document,Page} from 'react-pdf';
// import pdf from "../test.pdf";

// const PdfViewer = () => {

//   const [totalPages,setTotalPages]=useState(0);
//   const[pageNo,setPageNo]=useState(1);

//   function fileLoadSuccess({numPages}){
//     setTotalPages(numPages)
//   }
//   return (
//     <>
//       <nav className="navbar">
//         <button className="btn">
//           <i className="fas fa-arrow-left"></i> Prev
//         </button>
//         <button className="btn">
//           <i className="fas fa-arrow-right"></i> Next
//         </button>
//         <div className="pdf-info">
//           page <span id="page-no">{pageNo}</span>
//           of <span id="total-pages">{totalPages}</span>
//         </div>
//         <input
//           type="file"
//           id="file"
//           accept="application/pdf"
//           onChange={setFile}
//           style={{ display: "none" }}
//         />
//         <label htmlFor="file" className="fas fa-file"></label>
//       </nav>
//       <div>
//       <Document file={pdf} onChange={setFile} onLoadSuccess={fileLoadSuccess}>
//           <Page pageNumber={pageNo}></Page>
//       </Document>
//       </div>
//     </>
//   );
// };

// export default PdfViewer;




// trying my style

// import React, { useState } from "react";
// import { Document,Page} from 'react-pdf';
// import pdf from "../test.pdf";

// const PdfViewer = () => {
//   const [numPages, setNumPages] = useState(null);
//   const [pageNumber, setPageNumber] = useState(1);

//   function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages);
//     console.log(numPages);
//   }

//   const showNext=()=>{
//   if(pageNumber<numPages)
//   {    
//   setPageNumber(pageNumber+1);
//   }
//   else
//   {
//       setPageNumber(pageNumber);
//   }
//   }

//   const showPrev=()=>{
//     if(pageNumber>1)
//     {    
//     setPageNumber(pageNumber-1);
//     }
//     else
//     {
//         setPageNumber(pageNumber);
//     }
//     }

//   return (
//     <>
//     <nav className='navbar'>
//         <h3>PDF Viewer</h3>
//        <button className='btn' onClick={showPrev}>
//            <i className="fas fa-arrow-left"></i>Prev
//        </button>
//        <button className='btn'>
//            Next<i className="fas fa-arrow-right" onClick={showNext}></i>
//        </button>
//        <div className='pdf-info'>
//        Page<span id='page-no'>{pageNumber}</span> 
//        Of<span id='page-count'>{numPages}</span>
//        </div>
//     </nav>
//    <div className='pdf-container'>
//    <Document 
//      className='pdf-viewer'
//         file={pdf}
//         onLoadSuccess={onDocumentLoadSuccess}
//       >
//       <Page className='page' pageNumber={pageNumber} 
//       scale={2} />
//       </Document>
//    </div>
    
//     </>
//   );
// };

// export default PdfViewer;
