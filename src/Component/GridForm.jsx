import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FetchGridData } from '../Store/Actions/GridAct'
import { FetchModalGridData } from '../Store/Actions/ModalGrid'
import { FetchColumnData } from '../Store/Actions/Column'
import { FormIdAct, ResetAct } from '../Store/Actions/GeneralStates'
import { MainObject } from './Elements/commonFun'
import FormTable from './FormTableDir/FormTable'
import GridFormSub from './GridFormSub'

const GridForm = () => {

    const dispatch = useDispatch()

    const ColumnRed = useSelector((state)=>state.ColumnRed)
    const FormIdRed = useSelector((state)=>state.FormIdRed)
    const GridRed = useSelector((state)=>state.GridRed)

    useEffect(()=>{
    dispatch(FetchColumnData(FormIdRed))
    dispatch(FetchGridData(FormIdRed))
    },[FormIdRed])

    useEffect(()=>{
    },[ColumnRed])


  return (
    <div>
      {
        ColumnRed.loading ? MainObject.loader() :
        GridRed.loading ? MainObject.loader() :
        GridRed.val.filter((fil)=>{return fil.isMain }).map((res,i)=>{
         return <GridFormSub column={ColumnRed.val} data={[{"auditId":"aud-00001","testTitle":"test title","testId":"testId","testRefNo":"testId","accountNumber":"acc Number","remark":"remarks","result":"","customerName":"","customerId":"","stage":"","status":"","action":"","attacment":"","nextApp":"","org":"","role":"","selectUser":"","currentUser":""},{"auditId":"aud-00020","testTitle":"test title","testId":"testId","testRefNo":"testId","accountNumber":"acc Number","remark":"remarks","result":"","customerName":"","customerId":"","stage":"","status":"","action":"","attacment":"","nextApp":"","org":"","role":"","selectUser":"","currentUser":""}]} gridData={res} key={i}/>
        })
        // <FormTable col={ColumnRed.val} dData={[]}/>
      }
    </div>
  )
}

export default GridForm
