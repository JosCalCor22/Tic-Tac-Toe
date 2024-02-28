function Square({children, updateBoard, indexSquare, isSelected}){
    /* Clase para actualizar diseños del turno */
    const className = `square ${isSelected ? 'is-selected' : ''}`;
  
    return(
      <span className={className} onClick={() => {updateBoard(indexSquare)}}>
        {children}
      </span>
    )
};

export { Square }