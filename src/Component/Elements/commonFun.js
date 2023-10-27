import { Accordion,Modal,Spinner,Button,Badge } from "react-bootstrap"
import FormTable from "../FormTableDir/FormTable"
import ModalButton from "../ModalButton"
import  {ModalCompo, SimpleModalCompo } from "../ModalCompo"
import TabsBar from "../Tabs"

export const MainObject = {
    alert : (alertVal) => {
        return alert(alertVal)
    },
    button : (btnInfo,funButton,i) => {
        return <button key={i} className={btnInfo.classNameVal} style={{width: btnInfo.widthVal, height: btnInfo.heightVal}} onClick={funButton}>{btnInfo.btnName}</button>
    },
    input : (inputInfo,funInput) => {
        if(inputInfo.typeVal == 'dropDown'){
            return <select className={inputInfo.classNameVal} style={{width: inputInfo.widthVal, height: inputInfo.heightVal}} onChange={(e)=>{funInput(e)}}>
            {
                inputInfo.dropVal.split(',').map((res,i) => {
                        return <option key={i} value={res}>{res}</option>
                })
            }
        </select>
        }else{
            return <input className={inputInfo.classNameVal} type={inputInfo.typeVal} style={{width: inputInfo.widthVal, height: inputInfo.heightVal}}  onBlur={((e) => {funInput(e.target.value)})}/>
        }
    },

    table : (col,data,gridData) =>{
         return <FormTable col={col} dData={data} gridData={gridData}/> },

    accordion : (accordionVal,subsAccordianVal,col,data,width,defaultVal,setdefaultVal) => {
        return <Accordion className="m-5" 
        // defaultActiveKey={accordionVal.filter((fil)=>{return  fil.isOpen=='TRUE'}).map((res)=>{return res.secId })} style={{width : width}}
        // activeKey={ defaultVal[0]}
        >
            {/* {console.log(defaultVal[0])} */}
        {
        accordionVal.map((res,i) => {
        return  <Accordion.Item 
        // onClick={()=>{setdefaultVal([defaultVal.includes(res.secId) ? '' : res.secId])}}
        style={{width : res.width}} className='my-4' eventKey={res.secId}>
        <Accordion.Header>{res.secName}</Accordion.Header>
        <Accordion.Body>
            <Accordion 
            // activeKey={defaultVal[1]}
            // defaultActiveKey={subsAccordianVal.filter((fil)=>{return  fil.subSecIsOpen=='TRUE'}).map((subRes)=>{return subRes.subSecId })}
            >
            {/* {
                subsAccordianVal.filter((fil)=>{
                    return fil.secId == res.secId
                }).map((subRes)=>{
                    return <Accordion.Item eventKey={subRes.subSecId} className='my-4' 
                    // onClick={()=>{ setdefaultVal([defaultVal.includes(subRes.subSecId) ? '' : subRes.secId,subRes.subSecId] )}}
                    >
                        <Accordion.Header>{subRes.subSecName}</Accordion.Header>
                        <Accordion.Body>
                            <div style={{maxWidth : subRes.width, overflow:'scroll', maxHeight:'40vh'}}>
                                {
                                subRes.subSecType == 'grid' ?
                                col&&
                                MainObject.table(col.filter((fil)=>{ return ((fil.secId == subRes.secId)&&(fil.subSecId == subRes.subSecId))}),data,res.width) : ''
                            }
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                })
            } */}
            </Accordion>
            {/* {res.secType == 'grid' ? MainObject.table(col.filter((fil)=>{ return fil.secId == res.secId}),data,res.width) : ''} */}
            
            </Accordion.Body>
        </Accordion.Item>
        })
        }
        </Accordion>
    },
    loader : () => {
        return <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>
            <Spinner variant="primary"/>
            </div>
    },
    modalpop : (title,bodyDetails,show,showFunc) =>{return <ModalCompo title={title} bodyDetails={bodyDetails} show={show} showFunc={showFunc}/>},
    SimpleModal : (title,bodyDetails,show,showFunc) =>{return <SimpleModalCompo title={title} bodyDetails={bodyDetails} show={show} showFunc={showFunc}/>},
    
    modalButton : (title,funcName) =>{return <ModalButton title={title} funcName={funcName} /> },

    SectionNav : (sectionData,SubSectiondata,setdefaultVal) =>{
        // console.log(SubSectiondata)
        const secNamesEncountered = [];
// console.log(SubSectiondata.sort((a,b)=> a.secId.localeCompare(b.secId)))
        return <div className='d-flex flex-column align-items-start flex' id="sectionNavbar" >
            {
                sectionData.map((res)=>{
                    return <> 
                    <Badge style={{cursor:'pointer'}} className="m-1" onClick={()=>{setdefaultVal([res.secId])}}>{res.secName}</Badge>
                    {
                        SubSectiondata.filter((fil,i)=>{return fil.secId == res.secId }).map((gres)=>{
                            return <a href={'#'+gres.gridId} style={{cursor:'pointer'}} className="mx-3" onClick={()=>{setdefaultVal([res.secId])}}>{gres.gridName}</a>
                        })
                    } 
                    </>
                })
            }
        </div>
    },

    tabs : (accordionVal,gridData, columnData, data,defaultVal,setdefaultVal,handleSave) =>{
        return <TabsBar accordionVal={accordionVal} columnData={columnData} gridData={gridData} data={data} defaultVal={defaultVal} setdefaultVal={setdefaultVal} handleSave={handleSave} />
    }
} 