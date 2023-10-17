import React, { useEffect } from 'react'
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
    },[])

  return (
    <div>
      {
        ColumnRed.loading ? MainObject.loader() : <FormTable col={ColumnRed.val} dData={[]}/>
      }
    </div>
  )
}

export default GridForm
