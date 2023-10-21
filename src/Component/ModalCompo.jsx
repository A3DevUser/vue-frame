import React from 'react'
import { Modal } from 'react-bootstrap'

export const ModalCompo = ({title,bodyDetails,show,showFunc}) => {
  return (
    <div>
      <Modal show={show} fullscreen={true} scrollable={true} onHide={showFunc}>
        <Modal.Header closeButton>{title}</Modal.Header>
        <Modal.Body>{bodyDetails}</Modal.Body>
        <Modal.Footer style={{height:'50px'}}>
        <button className="btn btn-primary btn-sm" onClick={showFunc}>Save</button>
        <button className="btn btn-primary btn-sm" onClick={showFunc}>Close</button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export const SimpleModalCompo = ({title,bodyDetails,show,showFunc}) => {
  return (
    <div>
      <Modal show={show} centered scrollable={true} onHide={showFunc}>
        <Modal.Header closeButton>{title}</Modal.Header>
        <Modal.Body>{bodyDetails}</Modal.Body>
        <Modal.Footer>
        <button className="btn btn-primary" onClick={showFunc}>Close</button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

