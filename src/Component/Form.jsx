import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FetchSectionData } from '../Store/Actions/Section';
import { MainObject } from './Elements/commonFun';
// import FormTable from './FormTableDir/FormTable';
import { FetchColumnData } from '../Store/Actions/Column';

const Form = () => {

    const dispatch = useDispatch();
    const SectionRed = useSelector((state)=>state.SectionRed)
    const ColumnRed = useSelector((state)=>state.ColumnRed)

    useEffect(()=>{
        dispatch(FetchSectionData('Form-101'))
        dispatch(FetchColumnData('Form-101'))
    },[])

    useEffect(()=>{
      console.log(SectionRed)
      console.log(ColumnRed)
    },[SectionRed,ColumnRed])

    const colData = [{fieldName : 'Checker', accessor : 'checker',secId : '001'},{fieldName : 'Maker', accessor : 'maker',secId : '001'}]

  return (
    <div>
      {
        SectionRed.loading ? MainObject.loader() : ColumnRed.loading ? MainObject.loader() : 
        MainObject.accordion(SectionRed.val,ColumnRed.val,[{col1 : '',col2:'', col3 :''}]) 
      }
    </div>
  )
}

export default Form
