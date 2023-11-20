import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import '../Component/CSS/ModalComp.css'

export const ModalCompo = ({title,bodyDetails,show,showFunc}) => {
  const NavBarRed = useSelector((state)=>state.NavBarRed)
  const FormIdRed = useSelector((state)=>state.FormIdRed)


  return (
    <div>
      <Modal show={show} fullscreen={true} onHide={showFunc}>
        <Modal.Header style={{height:'8vh'}}>
        <h3>{NavBarRed.val.filter((fil)=>{return fil.formId == FormIdRed})[0].navName}</h3>
        <div className='modalHead'>
        <button className="btn btn-primary btn-sm mx-2" onClick={showFunc}>Save</button>
        <button className="btn btn-primary btn-sm" onClick={showFunc}>Close</button>
        </div>
        </Modal.Header>
        <Modal.Body style={{overflow:'hidden'}}>{bodyDetails}</Modal.Body>
        <Modal.Footer style={{height:'50px'}}>
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



