import { useMyHook } from './hooks/useMyHook'

const HooksUse = () => {
    const {active,
        handleToggle,
        handleTrue,
        handleFalse} = useMyHook()
      
      return (
        <>
          <button onClick={handleToggle}>Toggle</button>
          <button onClick={handleTrue}>True</button>
          <button onClick={handleFalse}>False</button>
    
          {active.toString()}
    
          <Home />
        </>
      )
}

export default HooksUse

function Home () {
    const {active, handleToggle} = useMyHook()
  
    return (
      <div>
        <button onClick={handleToggle}>Show / Hide</button>
        {active && (
          <div>
            <h1>User Info</h1>
          </div>
        )}
      </div>
    )
  }