import React from 'react'
import { MainObject } from './Elements/commonFun'

const GridFormSub = ({column,data,gridData}) => {
  return (
    <div>
      {
         column&&<div>{ MainObject.table(column,data,gridData) }</div>
        // <FormTable col={ColumnRed.val} dData={[]}/>
      }
    </div>
  )
}

export default GridFormSub
