import GridForm from "../GridForm"
import TestComp from "../../TestComp"
import React, { useEffect, useState } from "react"
import { MainObject } from "../Elements/commonFun"
import Form from "../Form"
import ModalForm from "../ModalForm"
import { useDispatch, useSelector } from "react-redux"
import { DropDownVal, FormDataAct } from "../../Store/Actions/GeneralStates"
import { FetchDropValData } from "../../Store/Actions/DropVal"
import { FetchDropValSecData } from "../../Store/Actions/DropValSec"
export const EditableCell = ({
    value: initialValue,
    row:  index ,
    column:  id ,
    updateMyData, 
    colObj:colObj,
    rowObj : rowObj,
    parentId
  }) => {
    const SendConfDataRed = useSelector((state) => state.SendConfDataRed)    

    const [value, setValue] = React.useState(initialValue)
    const onChange = e => {
      setValue(e.target.value)
    }
  
    console.log('colId',id)
    useEffect(()=>{
      if(id=='formId'){
        // setValue(SendConfDataRed.val.formId)
        updateMyData(index, id, SendConfDataRed.val.formId,null)

      }
    },[SendConfDataRed])
    const onBlur = () => {
      updateMyData(index, id, value,null)
    }
  
    React.useEffect(() => {
      setValue(initialValue)
    }, [initialValue])
  
    return <div>
      <textarea value={value} className='form-control' style={{width:colObj.width
      // , background : value ? '#28a745' : 'white', color : 'white',
      }} onChange={onChange} onBlur={onBlur} placeholder='Enter Remark...'  />
      {/* xyz */}
    </div>
  }

  // let dataObj ={}

  export const EditableDdCell = ({
    value: initialValue,
    row:  index ,
    column:  id ,
    updateMyData,
    dropDown : dropDown ,
    colObj:colObj,
    rowObj : rowObj,
    parentId ,
  }) => {
    const [value, setValue] = React.useState(initialValue)
    const [loading,setloading]=useState(true)
    const [colId,setcolId]=useState('')
    
    const onChange = e => {
      setValue(e.target.value)
    }
  
    const onBlur = () => {
        updateMyData(index, id, value,null,'')
    }
  
    React.useEffect(() => {
      setValue(initialValue)
    }, [initialValue])

    // let opt = []
    // if(dropDown){
    //   opt = dropDown.filter((fil,i)=>{return i==index})[0].dropDown.split(',')
    // }
    const dispatch = useDispatch()
    const DropValRed = useSelector((state) => state.DropValRed)
    const DropDownValRed = useSelector((state)=> state.DropDownValRed)
    const ColumnRed = useSelector((state)=>state.ConfColumnRed)

    

    function handleOnfocus() {
      // console.log('DropValRedFin',parentId.colIdVal)
      // setcolId(parentId.colIdVal)
      let rowData = encodeURI(JSON.stringify(parentId.json.original))
      dispatch(FetchDropValData(parentId.formIdVal,parentId.gridIdVal,parentId.colIdVal,rowData))
    }

    function handelOnClick(){
      setcolId(parentId.colIdVal)
    }
    
    useEffect(()=>{
      // setdataObj({...dataObj})
      },[DropValRed])
    
    useEffect(()=>{
      // console.log('DropValRedFin',colId)
    },[colId])

    useEffect(()=>{
        // console.log('DropValRedFin', parentId.gridIdVal)
    },[DropDownValRed])

    console.log('DropValRedFin',colId)
    return <select name={id} value={value} onFocus={handleOnfocus} onChange={onChange} onBlur={onBlur} onClick={handelOnClick} className='form-control' style={{width:colObj.width,height:'7vh'}} disabled={rowObj.original.isDisable}>
      <option>Select One</option>
      {/* {
       DropValRed.loading ? <option value="">Drop Down</option> : 
       colId.length < 1 ?  <option value="">Drop Down</option> :
       DropDownValRed[colId].map((res,i)=>{
            return <option key={i} value={res.storedValue}>{res.displayValue}</option>
      })
      } */}
           </select>
  }

  export const EditableNumCell = ({
    value: initialValue,
    row:  index ,
    column:  id ,
    updateMyData, 
    colObj:colObj,
    rowObj : rowObj,
    parentId
  }) => {
    const [value, setValue] = React.useState(initialValue)
  
    const onChange = e => {
      setValue(e.target.value)
    }
  
    const onBlur = () => {
      updateMyData(index, id, value,null,parentId.column.parent.id)
    }
  
    React.useEffect(() => {
      setValue(initialValue)
    }, [initialValue])

  
    return <div>
      <input value={value} type={'number'} className='form-control' style={{width:colObj.width}} onChange={onChange} onBlur={onBlur} placeholder='Enter Remark...' disabled={rowObj.original.isDisable} />
      {/* xyz */}
    </div>
  }

  export const EditableDateCell = ({
    value: initialValue,
    row:  index ,
    column:  id ,
    updateMyData, 
    colObj:colObj,
    rowObj : rowObj,
    parentId
  }) => {
    const [value, setValue] = React.useState(initialValue)
  
    const onChange = e => {
      setValue(e.target.value)
    }
  
    const onBlur = () => {
      updateMyData(index, id, value,null,parentId.column.parent.id)
    }
  
    React.useEffect(() => {
      setValue(initialValue)
    }, [initialValue])
  
    return <div>
      <input value={value} type={'date'} className='form-control' style={{width:colObj.width}} onChange={onChange} onBlur={onBlur} placeholder='Enter Remark...' disabled={rowObj.original.isDisable} />
      {/* xyz */}
    </div>
  }

  export const EditableMixCell = ({
    value: initialValue,
    row:  index ,
    column:  id ,
    updateMyData,
    dropDown,
    rowObj : obj,
    colObj:colObj,
    parentId
  }) => {
    const [value, setValue] = React.useState(initialValue)
  
    const onChange = e => {
      setValue(e.target.value)
    }
  
    const onBlur = () => {
      updateMyData(index, id, value,null,parentId.column.parent.id)
    }
  
    React.useEffect(() => {
      setValue(initialValue)
    }, [initialValue])

    let opt
if(dropDown.filter((fil,i)=>{return i==index})[0].mixVal){
  opt= dropDown.filter((fil,i)=>{return i==index})[0].mixVal.split(',')
}
  
    if(obj.original.inputType==='text'){
      return <div>
      <textarea value={value} className='form-control' style={{width:colObj.width
      }} onChange={onChange} onBlur={onBlur} placeholder='Enter Remark...' disabled={obj.original.isDisable} />
    </div>
    }else if(obj.original.inputType==='number'){
      return <div>
      <input value={value} type={'number'} className='form-control' style={{width:colObj.width}} onChange={onChange} onBlur={onBlur} placeholder='Enter Remark...' disabled={obj.original.isDisable} />
    </div>
    }else if(obj.original.inputType==='date'){
      return <div>
      <input value={value} type={'date'} className='form-control' style={{width:colObj.width}} onChange={onChange} onBlur={onBlur} placeholder='Enter Remark...' disabled={obj.original.isDisable} />
    </div>
    }else if(obj.original.inputType==='dropDown'){
      return <select value={value} onChange={onChange} onBlur={onBlur} className='form-control' style={{width:colObj.width,height:'7vh'}} disabled={obj.original.isDisable}>
      <option>Select One</option>
      {
        opt.map((res,i)=>{
            return <option key={i}>{res}</option>
        })

      }
           </select>
    }
  }

  export const EditableAttachCell = ({
    value: initialValue,
    row:  index ,
    column:  id ,
    updateMyData, 
    colObj:colObj,
    rowObj : rowObj,
    parentId
  }) => {
    const [value, setValue] = React.useState(initialValue)

    const onChange = e => {
      let date =  Date.now()
      const modifiedFile = new File([e.target.files[0]],e.target.files[0].name.replace('.',date+'.'))
      
      setValue(modifiedFile.name )
      // const formData = new FormData()
      // formData.append('file',modifiedFile)
      updateMyData(index, id,modifiedFile.name,modifiedFile)
    }

    const handleDownload = (downTxt) =>{
      alert(downTxt)
    }

  
    React.useEffect(() => {
      setValue(initialValue)
    }, [initialValue])

    const handleRemove = ()=>{
      setValue(null)
    }



    return <div>
      { value==='' || value===null || value === undefined ?
        <input type={'file'}  className='form-control' style={{width:colObj.width}} onChange={onChange}  placeholder='Enter Remark...' disabled={rowObj.original.isDisable} /> :
        <div ><span onClick={(e)=>{handleDownload(value)}} className='fileName'>{value}</span><br/><button className="btn btn-danger btn-sm"  onClick={handleRemove}>Remove</button></div>
      }
    </div>
  }


  export const EditableLogicCell = ({
    value: initialValue,
    row:  index ,
    column:  id ,
    updateMyData,
    dropDown ,
    colObj:colObj,
    rowObj : rowObj,
    parentId

  }) => {
    const [value, setValue] = React.useState(initialValue)

    const onChange = e => {
      setValue(e.target.value)
    }
  
    const onBlur = () => {
      updateMyData(index, id, value,null,parentId.column.parent.id,true)
    }
  
    React.useEffect(() => {
      setValue(initialValue)
    }, [initialValue])

    let opt = dropDown.filter((fil,i)=>{return i==index})[0].logicDd.split(',').map((res)=>{ return res.split('-')}).map((res)=>{ return {title :res[0], value : res[1]}})
  
    return <select value={value} onChange={onChange} onBlur={onBlur} className='form-control' style={{width:colObj.width,height:'7vh'}} disabled={rowObj.original.isDisable}>
      <option>Select One</option>
      {
        opt.map((res,i)=>{
            return <option key={i} value={res.value}>{res.title}</option>
        })

      }
           </select>
  }

  export const EditableMksCell = ({
    value: initialValue,
  }) => {
    const [value, setValue] = React.useState(initialValue)
  
  
    React.useEffect(() => {
      setValue(initialValue)
    }, [initialValue])
  
    return <h3 align='center'>{value}</h3>
  }

  export const EditableAnaCell = ({
    value: initialValue,
    rowObj : obj,
  }) => {
    const [value, setValue] = React.useState(initialValue)

    useEffect(()=>{
      setValue()
    },[])
  
  
    React.useEffect(() => {
      if(initialValue==0){
        setValue(0)
      }else{
        setValue(obj.original[
          Object.keys(obj.original).filter((fil)=>{return fil.includes('$#')}).filter((fil)=>{return fil.includes('max')})[0]])
      }
    }, [initialValue])
  
    return <h3 align='center'>{value}</h3>
  }


  export const EditableStaticCell = ({
    value: initialValue,
  }) => {
    const [value, setValue] = React.useState(initialValue)
  
  
    React.useEffect(() => {
      setValue(initialValue)
    }, [initialValue])
  
    return <h3 align='center'>{value}</h3>
  }

  export const EditableActionCell = ({
    row:  index ,
    column:  id ,
    addAndDeleteRow, 
    colObj:colObj,
    rowObj : rowObj,
  }) => {

    const handleClick = (act) =>{
      let Obj = {}
      Object.keys(rowObj.original).forEach((fe)=>{Obj[fe] =''})
      console.log(Obj)
      addAndDeleteRow(index,Obj,act)
    }
    return <div>
      {/* <button className="btn btn-success mx-1" onClick={()=>{handleClick('add')}}>Add</button> */}
      <button className="btn btn-danger mx-" onClick={()=>{handleClick('remove')}}>Remove</button>
    </div>
  }

  export const EditableActionPopCell = ({
    row:  index ,
    column:  id ,
    colObj:colObj,
    rowObj : rowObj,
  }) => {

    const dispatch = useDispatch()
    const[show,setshow] = useState(false)
    const FormDatRed = useSelector((state) => state.FormDatRed)


    const handleFunc = () => {
      setshow(!show)
      dispatch(FormDataAct([rowObj.original]))    

    }
    
    return <div>
      {MainObject.modalButton('Actions', handleFunc)}
      {MainObject.modalpop('',<><ModalForm/></>,show,handleFunc)}
    </div>
  }