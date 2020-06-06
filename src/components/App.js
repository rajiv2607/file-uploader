import React, { useState, useEffect } from 'react';
import InputComponent from './InputComponent'
import '../resources/style.scss'
import * as valid from '../constants/ValidFiles'

function App() {
  const [dataFromFile, setdataFromFile] = useState('')
  const [arrOfFileDoc, setarrOfFileDoc] = useState([])
  const [isValidFile , setisValidFile] = useState(true)

  function getDataFromFile(event) {
    // Read data from the file
    const reader = new FileReader();
    if(!(event.target.files[0].name.includes(valid.TEXT_FILE) || event.target.files[0].name.includes(valid.CSV_FILE))){
      setisValidFile(false)
      setTimeout(() =>{
        // Back to Initial State after 3 Second 
        setdataFromFile('')
        setarrOfFileDoc([])
        setisValidFile(true)
      },3000)
    }
    
    reader.onload = function () {
      var text = reader.result;
      console.log(text)
      setdataFromFile(text)
      _processData(text)
    }
    reader.readAsText(event.target.files[0]);
  }

  // private function which split data on the basis of new Line 
  function _processData(data) {
    setarrOfFileDoc(data.split('\n').map((item, i) => {
      return item
    }));
  }

  return (
    <div>
      <h3 className='header'>Choose a file txt/csv or Drop it in container</h3>
      <div className="image-uploader-container">
        <input type='file'
        className='image-uploader'
        onDragOver={(e) =>{
          e.preventDefault()
        }}

        onDrag={(e) => {
          e.preventDefault()
          getDataFromFile(e)
        }}

        onChange={(e) =>{
          e.preventDefault()
          getDataFromFile(e)
        }}>
        </input>   
      </div>
      <InputComponent arrOfFileDoc={arrOfFileDoc} isValidFile={isValidFile}/>
    </div>
  );
}

export default App;
