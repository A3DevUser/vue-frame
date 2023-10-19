import { Tab, Tabs } from "react-bootstrap"
import { MainObject } from "./Elements/commonFun"

function TabsBar({accordionVal,gridData,columnData,data}) {
    return   <Tabs defaultActiveKey="profile" id="fill-tab-example" className="mb-3" fill>
        {
            accordionVal.map((res,i)=>{
                return <Tab eventKey={res.secId} title={res.secName}>
                                {
                gridData.filter((fil)=>{
                    return fil.secId == res.secId
                }).map((subRes)=>{
                    return (<><h3 eventKey={subRes.subSecId}>{subRes.subSecName}</h3>
                    <div style={{maxWidth : subRes.width, overflow:'scroll', maxHeight:'40vh'}}>
                        {
                        subRes.subSecType == 'grid' ?
                        columnData&&
                        MainObject.table(columnData.filter((fil)=>{ return ((fil.secId == subRes.secId)&&(fil.subSecId == subRes.subSecId))}),data,res.width) : ''
                    }
                    </div></>)
                })
            }
                </Tab>
            })
        }
        </Tabs>

}
export default TabsBar;