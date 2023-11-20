import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MainObject } from './Elements/commonFun';
// import FormTable from './FormTableDir/FormTable';
import { FetchConfColumnData } from '../Store/Actions/ConfColumn'
import { FetchConfGridData } from '../Store/Actions/ConfGridAct'
import { FetchConfSectionData } from '../Store/Actions/ConfSection'
import { FormConfData } from '../Store/Actions/SendConfData';
import { useNavigate } from 'react-router';
import './CSS/FormConf.css'

const FormConf = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate()
    const SectionRed = useSelector((state)=>state.ConfSectionRed)
    const ColumnRed = useSelector((state)=>state.ConfColumnRed)
    const GridRed = useSelector((state)=>state.ConfGridRed)
    const FormIdRed = useSelector((state)=>state.FormIdRed)
    const FormDatRed = useSelector((state) => state.FormDatRed)
    const SendConfDataRed = useSelector((state) => state.SendConfDataRed)    


    const [defaultVal,setdefaultVal] =useState([])
    const [obj, setObj] = useState({});
    const [showAlert, setShowAlert] = useState(false);

    function funSave() {
      // console.log('finalObj',Object.values(obj))
    }

    useEffect(()=>{
        dispatch(FetchConfSectionData(FormIdRed))
        dispatch(FetchConfGridData(FormIdRed))
        dispatch(FetchConfColumnData(FormIdRed))
    },[FormIdRed])

    // useEffect(()=>{
    //   console.log('FormDatRed',Object.values(FormDatRed).filter((fil)=>{return fil.length > 0}))
    //   },[FormDatRed])

      //console.log('finalObj',Object.values(obj))

    // useEffect(()=>{
    //   console.log(SectionRed)
    //   console.log('GridRed',GridRed)
    //   console.log('ColumnHead',ColumnRed.val.sort((a,b) => parseInt(a.number) - parseInt(b.number)))
    // },[GridRed])

    // useEffect(()=>{
    //   console.log('saveGrid',SendConfDataRed)
    // },[SendConfDataRed])

    const width = '75vw'

    const handleSave = (val) =>{
      // console.log('subRes',val)

        if(Object.keys(FormDatRed).includes(val.gridId)){
          const FormData = FormDatRed[val.gridId].map((res) => {return {...res, ...SendConfDataRed.val}})
          dispatch(FormConfData(val.api,FormData))
        }



      // const gridId=GridRed.val.filter((fil)=>{return fil.secId==val})[0].gridId
      // console.log('handleSave',JSON.stringify(FormDatRed[gridId]))
      // const gridData = GridRed.val.map((res)=>{return {gridId : res.gridId, api : res.api}})
      // gridData.forEach((res)=>{
      //   dispatch(FormConfData(res.api,FormDatRed[res.gridId]))
      // })
      // console.log('Save Grid',FormDatRed)
        // const gridIdVal = GridRed.val.filter((grifil)=>{return grifil.secId == val})[0].gridId
        // const secApi = SectionRed.val.filter((secfil)=>{return secfil.secId == val})[0].api
        // if(Object.keys(FormDatRed).includes(gridIdVal)){
        //   const FormData = FormDatRed[gridIdVal].map((res) => {return {...res, ...SendConfDataRed.val}})
        //   dispatch(FormConfData(secApi,FormData))
        //   // console.log('Save Grid',FormData)
        //   // console.log('Save Grid',secApi)
        // }
    }

    useEffect(()=>{
      if(!SendConfDataRed.loading){
        setShowAlert(true)
      }
    },[SendConfDataRed])


  return (
    <div>
      {showAlert&&MainObject.CustomAlert(setShowAlert)}
      <div style={{float:'right'}}>  </div>
    <div style={{display: 'flex', flexDirection: 'row', maxHeight:'100vh' }} className='main-div'>
  <div style={{flex: '15%',height:'89vh',maxHeight:'89vh',overflow:'scroll'}} className='bg-light secNavDiv'>
{
  SectionRed.loading ? MainObject.loader() : GridRed.loading ? MainObject.loader() :  MainObject.SectionNav(SectionRed.val,GridRed.val,setdefaultVal)
  }
  </div>
  <div style={{flex: '95%',height:'89vh'}} data-spy="scroll" data-target='sectionNavbar' className='bg-light'>

  {
        SectionRed.loading ? MainObject.loader() : GridRed.loading ? MainObject.loader() : 
         ColumnRed.loading ? MainObject.loader() :
      defaultVal&&MainObject.tabs(SectionRed.val,GridRed.val,ColumnRed.val.sort((a,b) => parseInt(a.number) - parseInt(b.number)),[],defaultVal,setdefaultVal,handleSave)
        //  MainObject.accordion(SectionRed.val,SubSectionRed.val,ColumnRed.val,[],width,defaultVal,setdefaultVal) 
  }
  {/* <span className='mx-5 my-2' style={{float:'right'}}>
  {
    MainObject.button({classNameVal:'btn btn-primary', widthVal:'', heightVal:'',btnName:'Save'},(e)=>handleSave(e.target))
  }
  </span> */}
  </div>
    </div>
    </div>
  )
}

export default FormConf