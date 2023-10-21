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
        {console.log(ColumnRed.val)}
      {
        ColumnRed.loading ? MainObject.loader() :
        <div>{ MainObject.table(ColumnRed.val,[{col1 :'',col2:''}],'') }</div>
        // <FormTable col={ColumnRed.val} dData={[]}/>
      }
    </div>
  )
}

export default GridForm
