const LeftContainer = ({selectTip, handleChange, values}) => {

  return (
    <div className='flex flex-col gap-4'>
      <input placeholder='mount' name='mount' value={values.mount} type="number" onChange={handleChange} />
      <section className='grid grid-cols-3 grid-rows-2 gap-2'>
        {
          buttonsTip.map((button, index) => (
            <button className={`${values.custom ? '' : values.percentage == button && 'bg-blue-400'}`} onClick={() => selectTip(button)} key={index}>
              {button}%
            </button>
          ))
        }
        <input placeholder='CUSTOM' type="number" value={values.custom} name="custom" onChange={handleChange} />
      </section>
      <input placeholder='people' type="number" value={values.people} name='people' onChange={handleChange} />
    </div>
  )
}

const buttonsTip = [
  5,
  10,
  15,
  25,
  50,
]

export default LeftContainer
