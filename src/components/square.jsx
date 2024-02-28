function Square({children, updateBoard, indexSquare, isSelected}){
    /* Clase para actualizar diseños del turno */
    const className = `square ${isSelected ? 'is-selected' : ''}`;
  
    function handleClick(){
      console.log('Hola buenas tardes')
      updateBoard(indexSquare);
    }
  
    return(
      <span className={className} onClick={handleClick}>
        {children}
      </span>
    )
};

export { Square };