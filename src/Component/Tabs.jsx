import { Tab, Tabs } from "react-bootstrap"
import { MainObject } from "./Elements/commonFun"

function TabsBar({accordionVal,gridData,columnData,data,defaultVal,setdefaultVal,handleSave}) {
    // console.log('columnData',columnData)

    return <Tabs activeKey={defaultVal ? defaultVal[0] : ''} id="fill-tab-example" className="mb-3 m-2 bg-gray" fill>
        
        {
            accordionVal.map((res,i)=>{
                return <Tab eventKey={res.secId} title={<span className="tabTitle">{res.secName}</span>} key={i} >
                                {
                gridData.filter((fil)=>{
                    return fil.secId == res.secId
                }).map((subRes)=>{
                    let dataObj ={}
                    // columnData.filter((fil)=>{return fil.gridId == subRes.gridId}).
                    columnData.forEach((fe)=>{
                        if(fe.gridId==subRes.gridId){
                            dataObj[fe.accessor]=''
                        }
                        })
                        // console.log(dataObj)
                    return (<>
                    <div style={{maxWidth : subRes.width}}>
                        {
                        columnData&&
                        MainObject.table(columnData,[dataObj],subRes)
                    }
                      <span className='mx-5 my-2' style={{float:'right',display:window.location.pathname.includes('confform') ? 'block' : 'none'}}>
  {
    MainObject.button({classNameVal:'btn btn-success', widthVal:'', heightVal:'',btnName:'Save'},()=>{handleSave(subRes)},i)
  }
  </span>
  <br/><br/><br/><br/>
  </div></>)
                })
            }
                </Tab>
            })
        }
        </Tabs>

}
export default TabsBar;