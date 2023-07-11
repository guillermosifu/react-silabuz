export const Square = ({ children, isSelected, updateBoard, index }) => {
  const handleClick = () => {
    updateBoard()
  }

  return (
    <div onClick={handleClick} className={`square ${isSelected && 'is-selected'}`}>
      {children}
    </div>
  )
}