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
    const FormDatRed = useSelector((state)=>state.FormDatRed)
    const EmdRed = useSelector((state)=>state.EmdRed)

    useEffect(()=>{
    dispatch(FetchColumnData(FormIdRed,EmdRed))
    dispatch(FetchGridData(FormIdRed))
    },[FormIdRed,EmdRed])

    useEffect(()=>{
    },[ColumnRed])

    useEffect(()=>{
      console.log('FormDatRed',Object.values(FormDatRed).filter((fil)=>{return fil.length > 0}))
      },[FormDatRed])

      const handleSave = () =>{
        console.log('FormDatRed',Object.values(FormDatRed).filter((fil)=>{return fil.length > 0}))      
      }

  return (
    <div>
      <span style={{float:'right'}} className='mx-5 my-2'>
      {MainObject.button({classNameVal:'btn btn-primary', widthVal:'', heightVal:'',btnName:'Submit'},handleSave)}
      </span>
      {
        ColumnRed.loading ? MainObject.loader() :
        GridRed.loading ? MainObject.loader() :
        GridRed.val.filter((fil)=>{return fil.isMain }).map((res,i)=>{
         return <GridFormSub column={ColumnRed.val.sort((a,b)=>{return a.number-b.number})} data={[{"auditId":"aud-00001","testTitle":"test title","testId":"testId","testRefNo":"testId","accountNumber":"acc Number","remark":"remarks","result":"","customerName":"","customerId":"","stage":"","status":"","action":"","attacment":"","nextApp":"","org":"","role":"","selectUser":"","currentUser":""},{"auditId":"aud-00020","testTitle":"test title","testId":"testId","testRefNo":"testId","accountNumber":"acc Number","remark":"remarks","result":"","customerName":"","customerId":"","stage":"","status":"","action":"","attacment":"","nextApp":"","org":"","role":"","selectUser":"","currentUser":""}]} gridData={res} key={i}/>
        })
        // <FormTable col={ColumnRed.val} dData={[]}/>
      }
    </div>
  )
}

export default GridForm
