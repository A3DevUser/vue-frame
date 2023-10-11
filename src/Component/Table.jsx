import React, { useState } from 'react'
import data from './TableHead.json'
import rowdata from './TableRow.json'
import { MainObject } from './commonFun';

const Table = () => {

   const [DataColumn] = useState(data);
   const [DataRow,setDataRow] = useState(rowdata);

   function funsrnno(e,val){
        setDataRow(
            (old) =>{
                return old.map((res,i)=>{
                   if (i === e) {return {...res,srnoVal : val}}
                   else{return res}
                })
            }
        )
    }

    function funfname(e,val) {
        setDataRow(
            (old) =>{
                return old.map((res,i)=>{
                    if (i === e) {return {...res,fnameVal : val}}
                    else{return res}
                })
            }
        )
    }

    function funlname(e,val) {
        setDataRow(
            (old) =>{
                return old.map((res,i)=>{
                    if (i === e) {return {...res,lnameVal : val}}
                    else{return res}
                })
            }
        )
    }

    function fundob(e,val) {
        setDataRow(
            (old) =>{
                return old.map((res,i)=>{
                    if (i === e) {return {...res,dobVal : val}}
                    else{return res}
                })
            }
        )
    }

    function funemail(e,val) {
        setDataRow(
            (old) =>{
                return old.map((res,i)=>{
                    if (i === e) {return {...res,emailVal : val}}
                    else{return res}
                })
            }
        )
    }

    function funaddrow() {
    setDataRow((old) => {
            return [...old,{"srno": "number",
                            "fname": "text",
                            "lname": "text",
                            "dob": "date",
                            "email": "text",
                            "srnoVal": "",
                            "fnameVal": "",
                            "lnameVal": "",
                            "dobVal": "",
                            "emailVal": ""
                        }]
    })
   }

   function fundelrow(i) {
    //console.log("the no i = " + i)
    // setDataRow(old => 
    //     old.slice(i,1)
    // )

    let newArr = [];

    DataRow.forEach((res,ind)=>{
        if(i !== ind){
            newArr.push(res)
        }
    })

    setDataRow(newArr)

   }

   function funSave(){
    console.log(DataRow)
   }

    return (
    <>
    <p>Table</p>
    {
        MainObject.button("btn btn-primary btn-sm","90px","30px","Save",funSave)
    }
        {
        MainObject.button("btn btn-primary btn-sm","90px","30px","Add",funaddrow)
    }

    <table style={{ border:'1px solid black'}} id='TAB'>
        <thead>
            <tr>
            {
                DataColumn.map((res) => {
                                return <><td style={{ border:'1px solid black', padding:'10px'}}>{res.column1}</td>
                                        <td style={{ border:'1px solid black', padding:'10px'}}>{res.column2}</td>
                                        <td style={{ border:'1px solid black', padding:'10px'}}>{res.column3}</td>
                                        <td style={{ border:'1px solid black', padding:'10px'}}>{res.column4}</td>
                                        <td style={{ border:'1px solid black', padding:'10px'}}>{res.column5}</td>
                                        <td style={{ border:'1px solid black', padding:'10px'}}></td></>
                        })
            }
            </tr>
        </thead>
        <tbody>
            
                {
                    DataRow.map((res,i) => {
                        return <><tr key={i}><td style={{ border:'1px solid black', padding:'10px'}}>
                        <input type={res.srno} value={res.srnoVal} onChange={(e)=>{funsrnno(i,e.target.value)}}></input></td>
                        <td style={{ border:'1px solid black', padding:'10px'}}><input type={res.fname} value={res.fnameVal} onChange={(e)=>{funfname(i,e.target.value)}}/></td>
                        <td style={{ border:'1px solid black', padding:'10px'}}><input type={res.lname} value={res.lnameVal} onChange={(e)=>{funlname(i,e.target.value)}}/></td>
                        <td style={{ border:'1px solid black', padding:'10px'}}><input type={res.dob} value={res.dobVal} onChange={(e)=>{fundob(i,e.target.value)}}/></td>
                        <td style={{ border:'1px solid black', padding:'10px'}}><input type={res.email} value={res.emailVal} onChange={(e)=>{funemail(i,e.target.value)}}/></td>
                        <td style={{ border:'1px solid black', padding:'10px'}}><button onClick={()=>{fundelrow(i)}}>X</button></td></tr></>
                    })
                }
            
        </tbody>
    </table>
    </>
  )
}

export default Table