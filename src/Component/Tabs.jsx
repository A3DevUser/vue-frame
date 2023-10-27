import { Tab, Tabs } from "react-bootstrap"
import { MainObject } from "./Elements/commonFun"

function TabsBar({accordionVal,gridData,columnData,data,defaultVal,setdefaultVal,handleSave}) {
    // console.log('columnData',columnData)
    return <Tabs activeKey={defaultVal ? defaultVal[0] : ''} id="fill-tab-example" className="mb-3 m-2 bg-gray" fill>
        
        {
            accordionVal.map((res,i)=>{
                return <Tab eventKey={res.secId} title={res.secName} >
                                {
                gridData.filter((fil)=>{
                    return fil.secId == res.secId
                }).map((subRes)=>{
                    return (<>
                    <div style={{maxWidth : subRes.width}}>
                        {
                        columnData&&
                        MainObject.table(columnData.filter((fil)=>{ return fil.gridId == subRes.gridId}),data,subRes)
                    }
                      <span className='mx-5 my-2' style={{float:'right',display:window.location.pathname.includes('confform') && accordionVal.length -1 == i ? 'block' : 'none'}}>
  {
    MainObject.button({classNameVal:'btn btn-primary', widthVal:'', heightVal:'',btnName:'Save'},()=>{handleSave(subRes.secId)},i)
  }
  </span>
                    </div></>)
                })
            }
                </Tab>
            })
        }
        </Tabs>

}
export default TabsBar;