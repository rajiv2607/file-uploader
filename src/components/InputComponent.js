import React, { useState, useRef } from 'react'
import TableView from './TableView'
import Error from './Error'

export default function InputComponent(props) {

    const [delimiter, setdelimiter] = useState(',')
    const [numberOfLines, setnumberOfLines] = useState(2)
    const delimiterRef = useRef(null);
    const numberOfLineRef = useRef(null)
    let arrOfFileDoc = []
    let isValidFile = props.isValidFile

    //Dynamic change the Delimiter
    function setDelimiter(e) {
        setdelimiter(e.target.value)
    }
    //Dynamic change the Number of Lines
    function setNumberOfLines(e) {
        setnumberOfLines(e.target.value)
    }
    // When User click on Refesh 
    function refreshPage() {
        window.location.reload(false);
      }
    
      // We can Use Context APi instead of this 
      //TODO: Use contect api
    arrOfFileDoc = props.arrOfFileDoc

    return (
        <>
        <button onClick={refreshPage} className='reload'>Reload</button>
        <div className='input-container'>
            <div>
            <h3>Delimiter </h3>
            <input type='text' ref={delimiterRef} placeholder='Delimiter' onChange={setDelimiter} />
            </div>
            <div>
                <h3>Number of lines </h3>
            <input ref={numberOfLineRef} onChange={setNumberOfLines} placeholder='Number of lines' />
            </div>
        </div>
        <div>  
             <div>
                 <TableView numberOfLines={numberOfLines} delimiter={delimiter} arrOfFileDoc={arrOfFileDoc} isValidFile={isValidFile}/>
             </div> 
             {isValidFile === false ? <Error/> :  '' }
        </div>
        </>    
    );
}