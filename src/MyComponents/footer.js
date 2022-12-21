import React from 'react'
// import './Footer.css';

const footer = () => {
  let footerStyle = {
    position: "relative",
    top: "60vh",
    widht: "100%",
    boarder: "2px solid red" 
  }

  return (
    <footer className='bg-dark text-light py-3' style={footerStyle}>
      <p className='text-center'>
        Copyright & copy; MyTodoList.com
      </p>
    </footer>

  )
}

export default footer
