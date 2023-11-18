import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FetchModalColumnData } from '../Store/Actions/ModalColumn';
import { FetchModalGridData } from '../Store/Actions/ModalGrid';
import { FetchModalSectionData } from '../Store/Actions/ModalSection';
import { MainObject } from './Elements/commonFun'
import Form from './Form'
import LoadingBar from 'react-top-loading-bar';

const ModalForm = () => {


  const dispatch = useDispatch();
  const ModalSectionRed = useSelector((state) => state.ModalSectionRed)
  const ModalColumnRed = useSelector((state) => state.ModalColumnRed)
  const FormIdRed = useSelector((state) => state.FormIdRed)
  const FormDatRed = useSelector((state) => state.FormDatRed)
  const ModalGridRed = useSelector((state) => state.ModalGridRed)

  const [defaultVal, setdefaultVal] = useState([])
  const [obj, setObj] = useState({});
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(23)

    dispatch(FetchModalSectionData(FormIdRed))
    dispatch(FetchModalGridData(FormIdRed))
    dispatch(FetchModalColumnData(FormIdRed))
  }, [])


  useEffect(() => {
    if (!ModalSectionRed.loading && !ModalColumnRed.loading && !ModalGridRed.loading) {
      // All requests have completed
      setProgress(100);
    } else if (!ModalSectionRed.loading || !ModalColumnRed.loading || !ModalGridRed.loading) {
      // At least one of the requests has completed
      setProgress(66); // You can adjust this value as needed
    }
  }, [ModalSectionRed, ModalColumnRed, ModalGridRed]);

  // useEffect(()=>{
  //   console.log('modal',ModalSectionRed)
  //   console.log('modal',ModalGridRed)
  //   console.log('modal',ModalColumnRed)
  // },[ModalSectionRed])
  useEffect(() => {
    // console.log('finalObj',ModalColumnRed)
    // console.log('finalObj',Array.isArray(FormDatRed))
    // console.log('finalObj',FormDatRed)
    // console.log(
    //   'finalObj',FormDatRed.length
    // )
    // console.log('finalObj', FormDatRed)
    if (FormDatRed.length > 2) {
      const data = FormDatRed[FormDatRed.length - 1]
      const colList = Object.keys(FormDatRed[FormDatRed.length - 1][0]);
      const grdId = ModalColumnRed.val.filter((fil) => { return colList.includes(fil.accessor) })[0].gridId

      setObj((prev) => {
        return {
          ...prev,
          [grdId]: data.map((res) => { return { ...res, gridId: grdId, ...FormDatRed[0] } })
        }
      })
    }

  }, [FormDatRed])
  // console.log('finalObj', [[FormDatRed[0]], ...Object.values(obj)])
  // console.log('finalObj', JSON.stringify(Object.values(obj)))

  return (
    <div>
      <LoadingBar color='red' progress={progress} />

      <div style={{ display: 'flex', flexDirection: 'row', maxHeight: '100vh' }} className='main-div'>
        <div style={{ flex: '15%' }} className='bg-light'>
          {
            ModalSectionRed.loading ? MainObject.loader() : ModalGridRed.loading ? MainObject.loader() : MainObject.SectionNav(ModalSectionRed.val, ModalGridRed.val, setdefaultVal)
          }
        </div>
        <div style={{ flex: '95%', height: '80vh', maxHeight: '80vh', overflow: 'scroll' }} data-spy="scroll" data-target='sectionNavbar' className='bg-light'>
          {
            ModalSectionRed.loading ? MainObject.loader() : ModalGridRed.loading ? MainObject.loader() :
              ModalColumnRed.loading ? MainObject.loader() :
                defaultVal && MainObject.tabs(ModalSectionRed.val, ModalGridRed.val, ModalColumnRed.val, [], defaultVal, setdefaultVal)
            //  MainObject.accordion(ModalSectionRed.val,SubSectionRed.val,ModalColumnRed.val,[],width,defaultVal,setdefaultVal) 
          }
        </div>
      </div>
    </div>
  )
}

export default ModalForm
