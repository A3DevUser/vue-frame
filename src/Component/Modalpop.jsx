import {Button,Modal} from "react-bootstrap"

function Modalpop({show, setModalShow,bodyDetails,titleDetails}) {

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

export default Modalpop