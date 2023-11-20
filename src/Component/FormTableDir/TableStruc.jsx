import { MainObject } from '../../Component/Elements/commonFun'
import React from 'react'
import { Button } from 'react-bootstrap'
import TableCell from './TableCell'
import { useSelector } from 'react-redux'


const TableStruc = ({getTableProps,getTableBodyProps,headerGroups,prepareRow,rows,gridData,handleAddRow,handleSave,handleRemove,handleCopy}) => {

    const EmdRed = useSelector((state)=>state.EmdRed)

  return (
    <div>
 <div style={{display:'flex', flexDirection:'row',justifyContent:'space-between',maxWidth:'83vw'}}>
    <div >
    <h6 className="mx-5 my-2" id={gridData.gridId}>{gridData.gridName}</h6>
    </div>
    <div style={{display:'flex', flexDirection:'row'}}>
        <button className='btn btn-success mx-2' style={{display : (gridData.isMrow =='true'&& EmdRed=='add') || (window.location.pathname.includes('confform')&&gridData.isMrow =='true')  ? 'block' : 'none', }}
        // disabled={EmdRed == 'yes'}
        onClick={handleAddRow}
        ><i class="bi bi-plus-lg"></i> Add</button>
        <Button variant='success' style={{display : (gridData.isMrow =='true'&& EmdRed=='add') || (window.location.pathname.includes('confform')&&gridData.isMrow =='true') ? 'block' : 'none'}} onClick={handleRemove}><i class="bi bi-trash"> </i>Remove</Button>
        <Button variant='success' style={{display : (gridData.isMrow =='true'&& EmdRed=='add') || (window.location.pathname.includes('confform')&&gridData.isMrow =='true') ? 'block' : 'none'}} className='mx-2' onClick={handleCopy}><i class="bi bi-copy"> </i>Duplicate</Button>          
          {
    MainObject.button({classNameVal:'btn btn-success', widthVal:'', heightVal:'',btnName: <><i class="bi bi-floppy"></i> Save</>},()=>{handleSave(gridData)})
  }   
  </div>             
  </div>
      <div {...getTableProps()} className="table sticky mx-3 my-1 tableCont "  style={{maxHeight :'66vh', maxWidth:'83vw' , overflow:'scroll', border:'none' }} >
        <div className='header'>
            {
                headerGroups.map((headerGroup)=>(
            <div className='tr' {...headerGroup.getHeaderGroupProps()}>
                {
                    headerGroup.headers.map((column)=>(
                        <div className='th' {...column.getHeaderProps()}>{column.render('Header')}
                                            <div
                      {...column.getResizerProps()}
                      className={`resizer`}
                    />
                        </div>
                    ))
                }
            </div>
                ))
            }
        </div>
        <div className='body' {...getTableBodyProps()}>
            {
                rows.map((row)=>{
                    prepareRow(row)
                    return   <div className='tr' {...row.getRowProps()}>
                        {
                            row.cells.map((cell)=>(
                                <div className='td' {...cell.getCellProps()}>
                                    <TableCell cell={cell}/>
                                    </div>
                            ))
                        }
                </div>
                })
            }
        </div>
      </div>
    </div>
  )
}

export default TableStruc
