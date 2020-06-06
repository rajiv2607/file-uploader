import React from 'react'
import * as valid from '../constants/ValidFiles'

export default function TableView(props) {
    //Default Values
    let delimiter = props.delimiter || ','
    let numberOfLines = props.numberOfLines || 2
    let isValidFile = props.isValidFile

    // This has login to iterate and render the Table
    return (<div>
            <div className='table-header'>
                    <h3>Table to be Displayed Here</h3>
                    <h4>Current we are showing table with delimiter as: <span>{delimiter}</span> and Number of lines : <span> {numberOfLines}</span></h4> 
            </div>
            <table className='table-container'>
            <tbody >
                <tr className='table-row'>
                    {
                        props.arrOfFileDoc.map((rowData, index) => {
                            if (index < numberOfLines && isValidFile && index <= valid.MAX_VIEW ) {
                                return (

                                    <tr>{
                                        rowData.split(`${delimiter}`).map((data, index) => {
                                            return (<td className='table-data'key={index}>{data}</td>)
                                        })
                                    }
                                    </tr>
                                )
                            }
                        })
                    }
                </tr>
            </tbody>
        </table>
    </div>
    )
}