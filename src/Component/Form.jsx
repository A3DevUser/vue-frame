import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FetchSectionData } from '../Store/Actions/Section';
import { MainObject } from './Elements/commonFun';
import FormTable from './FormTableDir/FormTable';

const Form = () => {

    const dispatch = useDispatch();
    const SectionRed = useSelector((state)=>state.SectionRed)

    useEffect(()=>{
        dispatch(FetchSectionData('Form-101'))
    },[])

    const colData = [{fieldName : 'Checker', accessor : 'checker',secId : '001'},{fieldName : 'Maker', accessor : 'maker',secId : '001'}]

  return (
    <div>
      {
        SectionRed.loading ? MainObject.loader() : MainObject.accordion(SectionRed.val,colData,[])
      }
    </div>
  )
}

export default Form
