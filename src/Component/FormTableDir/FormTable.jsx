import  { useEffect, useState } from 'react'
import { useBlockLayout, useTable } from 'react-table'
import './TableStyle.css'
import { Styles,VerticalTableStyles } from './TableStyles'
import { ColumnHeader } from './ColumnHeader'
import TableStruc from './TableStruc'
import { useSticky } from 'react-table-sticky'
import { useDispatch, useSelector } from 'react-redux'
import { FormDataAct } from '../../Store/Actions/GeneralStates'

const FormTable = ({col,dData}) => {
    const [data,setdata]=useState([...dData])
    const [chngRow,setchngRow]=useState({})
    const [finalArr, setfinalArr] =useState([])
  
    const FormDatRed = useSelector((state) => state.FormDatRed)

    // const mySelRowState = useSelector((state)=>state.selectedRowState)
    // const AreaSchemeDateSetRed = useSelector((state)=>state.AreaSchemeDateSetRed)
  

    const dispatch = useDispatch()
  
  
  const formData = new FormData()
    const updateMyData = (rowIndex, columnId, value, fileData) => {
  if(fileData){
    formData.append('file',fileData)
    // formData is the final variable for fileData
  }
  
      setchngRow({rowIndex})
      setdata(old =>
        old.map((row, index) => {
          if (index == rowIndex) {
            return {
              ...old[rowIndex],
              [columnId]: value,
              ['auditId'] : 'auditId'
            }
          }
          return row
        })
      )
    }
  
    const addAndDeleteRow = (index,obj,action) => {
      if(action=='add'){
      // setdata((old)=>{
      //   return old.map((res,i)=>{
      //     if(i == index){
      //       return [{...res},{...obj}]
      //     }else{
      //       return res
      //     }
      //   }).flat()
      // })
      setdata((old)=>{return [...old,obj]})
    }else{
          setdata((old)=>{
            return old.filter((fil,i)=>{
              return i !== Number(index)})
          })
      }
    }
      const[columns,setcolumns]=useState(ColumnHeader(col,updateMyData,'',addAndDeleteRow))
      console.log(ColumnHeader(col,updateMyData))

      useEffect(()=>{
        setcolumns(ColumnHeader(col,updateMyData,'',addAndDeleteRow))
      },[col])
  
  
        useEffect(()=>{
          console.log(data)
              dispatch(FormDataAct([...FormDatRed,data]))    
       //   if(data.length > 0){
        //   setfinalArr((old)=>{
        //     if(old.some((sres)=>{return sres.id == data[chngRow].id})){
        //       return old.map((res)=>{
        //         if(res.id == data[chngRow].id){
        //           return data[chngRow]
        //         }else{
        //           return res
        //         }
        //       })
        //     }else{
        //       return [...old,data[chngRow]]
        //     }
        //   })
        //   }
          },[data])
  
          useEffect(()=>{
            console.log(finalArr)
          },[finalArr])
        
          const handleAddRow = ()=>{
            let obj ={}
            columns.forEach((res)=> obj[res.accessor]='')
            addAndDeleteRow('',obj,'add')
          }
  
      const tableInstance = useTable({
          columns,
          data
      },useBlockLayout,useSticky)
  
  const {getTableProps,getTableBodyProps,headerGroups,prepareRow,rows} = tableInstance
    return (
      <div>
        <VerticalTableStyles>
        <button className='btn btn-primary mx-5 my-2' style={{float:'right', display : col.some(res => res.cellType =='addRemove') ? 'block' : 'none' }}
        onClick={handleAddRow}
        >Add</button>
        <TableStruc getTableBodyProps={getTableBodyProps} getTableProps={getTableProps}  headerGroups={headerGroups} prepareRow={prepareRow} rows={rows} />
        </VerticalTableStyles>
    </div>
  )
}

export default FormTable
