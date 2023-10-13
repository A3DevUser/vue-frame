import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Form from './Component/Form'
import SectionNav from './Component/SectionNav'

const App = () => {

  const dispatch = useDispatch()


  return (
    <div>
      <Form/>
      {/* <SectionNav/> */}
    </div>
  )
}

export default App
