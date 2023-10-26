import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FetchColumnData } from '../Store/Actions/Column'
import { FormIdAct, ResetAct } from '../Store/Actions/GeneralStates'
import { MainObject } from './Elements/commonFun'
import FormTable from './FormTableDir/FormTable'

const GridForm = () => {

    const dispatch = useDispatch()

    const ColumnRed = useSelector((state)=>state.ColumnRed)
    const FormIdRed = useSelector((state)=>state.FormIdRed)

    useEffect(()=>{
    dispatch(FetchColumnData(FormIdRed))
    },[FormIdRed])

  return (
    <div>
        {/* {console.log(
          JSON.stringify(ColumnRed.val.map((res)=>{return res.accessor}).reduce((acc,val,ind)=>{
          acc[val] = ''
          return acc
        },{}))
        )} */}
      {
        ColumnRed.loading ? MainObject.loader() :
        <div>{ MainObject.table(ColumnRed.val.sort((a,b)=>{return a.number - b.number}),[{"auditId":"aud-00001","testTitle":"test title","testId":"testId","testRefNo":"testId","accountNumber":"acc Number","remark":"remarks","result":"","customerName":"","customerId":"","stage":"","status":"","action":"","attacment":"","nextApp":"","org":"","role":"","selectUser":"","currentUser":""},{"auditId":"aud-00020","testTitle":"test title","testId":"testId","testRefNo":"testId","accountNumber":"acc Number","remark":"remarks","result":"","customerName":"","customerId":"","stage":"","status":"","action":"","attacment":"","nextApp":"","org":"","role":"","selectUser":"","currentUser":""}],'') }</div>
        // <FormTable col={ColumnRed.val} dData={[]}/>
      }
    </div>
  )
}

export default GridForm
