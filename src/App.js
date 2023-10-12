import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Form from './Component/Form'

const App = () => {

  const dispatch = useDispatch()


  return (
    <div>
      <Form/>
    </div>
  )
}

export default App
