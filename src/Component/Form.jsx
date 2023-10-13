import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FetchSectionData } from '../Store/Actions/Section';
import { MainObject } from './Elements/commonFun';
// import FormTable from './FormTableDir/FormTable';
import { FetchColumnData } from '../Store/Actions/Column';
import { FetchSubSectionData } from '../Store/Actions/SubSection';

const Form = () => {

    const dispatch = useDispatch();
    const SectionRed = useSelector((state)=>state.SectionRed)
    const ColumnRed = useSelector((state)=>state.ColumnRed)
    const SubSectionRed = useSelector((state)=>state.SubSectionRed)

    useEffect(()=>{
        dispatch(FetchSectionData('FORM-101'))
        dispatch(FetchSubSectionData('FORM-101'))
        dispatch(FetchColumnData('FORM-101'))
        
    },[])

    // useEffect(()=>{
    //   console.log(SectionRed)
    //   console.log(ColumnRed)
    // },[SectionRed,ColumnRed])


  return (
    <div>
      {
        // SectionRed.loading ? MainObject.loader() : SubSectionRed.loading ? MainObject.loader() : 
        // ColumnRed.loading ? MainObject.loader() :
        // MainObject.accordion(SectionRed.val,SubSectionRed.val,ColumnRed.val,[{col1 : '',col2:'', col3 :''}]) 
        SectionRed.loading ? MainObject.loader() : SubSectionRed.loading ? MainObject.loader() : MainObject.SectionNav(SectionRed.val,SubSectionRed.val)
      }
    </div>
  )
}

export default Form
