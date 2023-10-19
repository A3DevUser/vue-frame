import { Tab, Tabs } from "react-bootstrap"
import { MainObject } from "./Elements/commonFun"

function TabsBar({accordionVal,gridData,columnData,data,defaultVal}) {
    console.log('defaultVal',defaultVal)
    return   <Tabs activeKey={defaultVal[0]} id="fill-tab-example" className="mb-3" fill>
        {
            accordionVal.map((res,i)=>{
                return <Tab eventKey={res.secId} title={res.secName}>
                                {
                gridData.filter((fil)=>{
                    return fil.secId == res.secId
                }).map((subRes)=>{
                    return (<><br/><h3 id={subRes.subSecId}>{subRes.subSecName}</h3>
                    <div style={{maxWidth : subRes.width, overflow:'scroll', maxHeight:'50vh'}}>
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