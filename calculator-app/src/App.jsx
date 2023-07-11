import { useState } from 'react'
import './App.css'
import LeftContainer from './components/LeftContainer'
import RightContainer from './components/RightContainer'

function App() {
  const [values, setValues] = useState({
    custom: ''
  })

  const handleChange = (event) => {
    const {name, value} = event.target

    setValues({
      ...values,
      [name]: value
    })

    if (values.custom) {
      setValues({
        ...values,
        [name]: value,
        percentage: undefined
      })
    }
  }

  const selectTip = (value) => {
    setValues({
      ...values,
      custom: '',
      percentage: value
    })
  }
  return (
    <section className='max-w-[70%] mx-auto grid grid-cols-2 gap-2 p-4 rounded-lg'>
      <LeftContainer values={values} handleChange={handleChange} selectTip={selectTip} />
      <RightContainer values={values} setValues={setValues} />
    </section>
  )
}



export default App
