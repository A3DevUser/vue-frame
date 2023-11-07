import { EditableActionCell, EditableActionPopCell, EditableAnaCell, EditableAttachCell, EditableCell, EditableDateCell, EditableDdCell, EditableLogicCell, EditableMixCell, EditableMksCell, EditableNumCell, EditableStaticCell } from "./EditableCell"

export const ColumnHeader = (colData,updateMyData,dropDown,addAndDeleteRow,gridData,data) =>{

  return colData.filter((fil)=>{return fil.gridId == gridData.gridId}).map((res)=>{
    console.log("cell Values",res)
    if(res.cellType==='textArea'){
      return {
        Header : res.fieldName,
        accessor : res.accessor,
        Cell: ({cell})=>{  return <EditableCell column={cell.column.id} row={cell.row.id} updateMyData={updateMyData} value={cell.value} colObj={cell.column} parentId={cell} rowObj={cell.row} />},
        width : res.width,
        sticky : res.sticky
      }
    }else if(res.cellType==='dropDown'){
      let formIdVal = res.formId
      let gridIdVal = res.gridId
      let colIdVal = res.columnId
      // console.log("to get id",res.formId)
      return {
        Header : res.fieldName,
        accessor : res.accessor,
        Cell: ({cell})=>{return <EditableDdCell column={cell.column.id} row={cell.row.id} updateMyData={updateMyData} value={cell.value} dropDown={dropDown}  rowObj={cell.row} colObj={cell.column} parentId={{formIdVal, gridIdVal, colIdVal}} />},
        width : res.width,
        sticky : res.sticky
      }
    }else if(res.cellType==='date'){
      return {
        Header : res.fieldName,
        accessor : res.accessor,
        Cell: ({cell})=>{return <EditableDateCell column={cell.column.id} row={cell.row.id} updateMyData={updateMyData} value={cell.value} colObj={cell.column} parentId={cell} rowObj={cell.row} />},
        width : res.width,
        sticky : res.sticky


      }
    }else if(res.cellType==='number'){
      return {
        Header : res.fieldName,
        accessor : res.accessor,
        Cell: ({cell})=>{return <EditableNumCell column={cell.column.id} row={cell.row.id} updateMyData={updateMyData} value={cell.value} dropDown={dropDown} colObj={cell.column} parentId={cell} rowObj={cell.row} />},
        width : res.width,
        sticky : res.sticky


      }
    }else if(res.cellType==='attach'){
      return {
        Header : res.fieldName,
        accessor : res.accessor,
        Cell: ({cell})=>{return <EditableAttachCell column={cell.column.id} row={cell.row.id} updateMyData={updateMyData} value={cell.value} colObj={cell.column} parentId={cell} rowObj={cell.row} />},
        width : res.width,
        sticky : res.sticky
      }
    }else if(res.cellType==='addRemove'){
      return {
        Header : res.fieldName,
        accessor : res.accessor,
        Cell : ({cell}) =>{return <EditableActionCell colObj={cell.column} column={cell.column.id} row={cell.row.id} rowObj={cell.row} addAndDeleteRow={addAndDeleteRow}/> },
        width : res.width,
        sticky : res.sticky
      }
    }else if(res.cellType === 'modalBtn'){
      return{
        Header : res.fieldName,
        accessor : res.accessor,
        Cell : ({cell}) =>{ return<EditableActionPopCell colObj={cell.column} column={cell.column.id} row={cell.row.id} rowObj={cell.row}  /> },
        width : res.width,
        sticky : res.sticky
      }
    }
    else{
      return {
        Header : res.fieldName,
        accessor : res.accessor,
        width : res.width,
        sticky : res.sticky

      }
    }
  
  })

}