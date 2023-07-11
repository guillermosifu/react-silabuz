import React, { useEffect, useState } from 'react'

const RightContainer = ({values, setValues}) => {
  const [amount, setAmount] = useState('')
  const [total, setTotal] = useState('')

  useEffect(() => {
    if (values.mount && values.people && (values.percentage || values.custom != '')) {
          const calculatePercentage =  (values.percentage || Number(values.custom)) / 100
          const calculateAmount =  (values.mount * (calculatePercentage)) / values.people
          const calculateTotal = values.mount / values.people + calculateAmount

          setAmount(calculateAmount)
          setTotal(calculateTotal)
        } else {
          setAmount('')
        }
  }, [values])

  const resetForm = () => {
    setValues({
      mount: '',
      percentage: '',
      custom: '',
      people: ''
    })
    setAmount('')
    setTotal('')
  }

  return (
    <div className='flex flex-col justify-between items-center p-2'>
      <section className='flex flex-col'>
        <div>
          {parseFloat(amount) || ''}
        </div>
        <div>
          {parseFloat(total) || ''}
        </div>
      </section>
      <button onClick={resetForm} className='w-full p-2'>Reset</button>
    </div>
  )
}

export default RightContainer
