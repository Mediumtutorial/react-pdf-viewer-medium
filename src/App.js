import React from 'react';
import Viewer, { Worker } from '@phuocng/react-pdf-viewer';
import '@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css';
import filePDF from './dummy.pdf'
import './App.css'

function App() {
  return (
    <div className="App">
     <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.5.207/build/pdf.worker.min.js">
    <div id="pdfviewer">
      {/* Internal pdf file load */}
        {/* <Viewer fileUrl={filePDF}/>  */}
      {/* External pdf file load. Uncomment below viewer to  external source and comment out the above viewer */}
      <Viewer fileUrl="https://cors-anywhere.herokuapp.com/http://www.africau.edu/images/default/sample.pdf" />
    </div>
</Worker>
    </div>
  );
}

export default App;
