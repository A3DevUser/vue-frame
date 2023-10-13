import { Accordion,Modal,Spinner,Button } from "react-bootstrap"
import FormTable from "../FormTableDir/FormTable"

export const MainObject = {
    alert : (alertVal) => {
        return alert(alertVal)
    },
    button : (btnInfo,funButton) => {
        return <button className={btnInfo.classNameVal} style={{width: btnInfo.widthVal, height: btnInfo.heightVal}} onClick={funButton}>{btnInfo.btnName}</button>
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

    table : (col,data,width) =>{
         return <FormTable col={col} dData={data} width={width}/> },

    accordion : (accordionVal,subsAccordianVal,col,data) => {
        return <Accordion className="m-5" defaultActiveKey={accordionVal.filter((fil)=>{return  fil.isOpen=='TRUE'}).map((res)=>{return res.secId })}
        >
        {
        accordionVal.map((res,i) => {
        return  <Accordion.Item style={{width : res.width}} eventKey={res.secId}>
        <Accordion.Header>{res.secName}</Accordion.Header>
        <Accordion.Body>
            <Accordion defaultActiveKey={subsAccordianVal.filter((fil)=>{return  fil.subSecIsOpen=='TRUE'}).map((subRes)=>{return subRes.subSecId })}>
            {
                subsAccordianVal.filter((fil)=>{
                    return fil.secId == res.secId
                }).map((subRes)=>{
                    return <Accordion.Item eventKey={subRes.subSecId}>
                        <Accordion.Header>{subRes.subSecName}</Accordion.Header>
                        <Accordion.Body>
                                {
                                subRes.subSecType == 'grid' ? MainObject.table(col.filter((fil)=>{ return ((fil.secId == subRes.secId)&&(fil.subSecId == subRes.subSecId))}),data,res.width) : ''
                            }
                        </Accordion.Body>
                    </Accordion.Item>
                })
            }
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
    modalpop : (show, setModalShow,bodyDetails,titleDetails) => {
        const handleClick = () =>{
            setModalShow(false)
        }
            return (
            <Modal show={show} scrollable={true} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
              <Modal.Header style={{height: "50px"}}>
                <Modal.Title id="contained-modal-title-vcenter">{titleDetails}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {bodyDetails}
              </Modal.Body>
              <Modal.Footer style={{height: "54px"}}>
                <Button className="btn btn-primary btn-sm" onClick={handleClick}>Close</Button>
              </Modal.Footer>
            </Modal>
          );
    },
    SectionNav : (sectionData,SubSectiondata) =>{
        // console.log(SubSectiondata)
        const secNamesEncountered = [];

        return <div className='d-flex flex-column align-items-start flex' >
            {
                SubSectiondata.map((res)=>{
                    const sec = sectionData.filter((fil)=>{return fil.secId == res.secId})[0]
                    if (!secNamesEncountered.includes(res.secId)) {
                        secNamesEncountered.push(res.secId)
                        return (<>
                        <button type="button" class="btn btn-outline-primary m-2">{sec.secName}</button> 
                        <button type="button" class="btn btn-outline-primary mx-5 my-1">{res.subSecName}</button>
                        </>);
                      } else {
                        return <button type="button" class="btn btn-outline-primary mx-5 my-1">{res.subSecName}</button>
                      }
                })
            }
        </div>
    }
} 