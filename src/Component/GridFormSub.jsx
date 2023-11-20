import React from 'react'
import { MainObject } from './Elements/commonFun'

const GridFormSub = ({column,data,gridData,handleSave}) => {
  return (
    <div>
      {
         column&&<div>{ MainObject.table(column,data,gridData,handleSave) }</div>
        // <FormTable col={ColumnRed.val} dData={[]}/>
      }
    </div>
  )
}

export default GridFormSub
