import { Accordion,Modal,Spinner,Button } from "react-bootstrap"

export const MainObject = {
    alert : (alertVal) => {
        return alert(alertVal)
    },
    button : (btnInfo,funButton) => {
        return <button className={btnInfo.classNameVal} style={{width: btnInfo.widthVal, height: btnInfo.heightVal}} onClick={funButton}>{btnInfo.btnName}</button>
    },
    input : (inputInfo,funInput) => {
        return <input className={inputInfo.classNameVal} type={inputInfo.typeVal} style={{width: inputInfo.widthVal, height: inputInfo.heightVal}}  onBlur={((e) => {funInput(e.target.value)})}/>
    },
    dropdown : (dropInfo,funDrop) => {
        return <select className={dropInfo.classNameVal} style={{width: dropInfo.widthVal, height: dropInfo.heightVal}} onChange={(e)=>{funDrop(e)}}>
            {
                dropInfo.map((res,i) => {
                        return <option key={i} value={res.dropVal}>{res.dropVal}</option>
                })
            }
        </select>
    },
    accordion : (accordionVal) => {
        return <Accordion defaultActiveKey={accordionVal.filter((fil)=>{return  fil.isOpen===true}).map((res)=>{return res.secid })}>
        {
        accordionVal.map((res,i) => {
        return  <Accordion.Item eventKey={res.secid}>
        <Accordion.Header>{res.sechead}</Accordion.Header>
        <Accordion.Body>{res.secbody}</Accordion.Body>
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
    }
} 