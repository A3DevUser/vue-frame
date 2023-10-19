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
    const [loading, setloading] =useState()

    useEffect(()=>{
    dispatch(FetchColumnData(FormIdRed))
    },[])

  return (
    <div>
        {console.log(ColumnRed.val)}
      {
        loading ? MainObject.loader() :
        ColumnRed&&<div>{ MainObject.table(ColumnRed.val,[]) }</div>
        // <FormTable col={ColumnRed.val} dData={[]}/>
      }
    </div>
  )
}

export default GridForm
