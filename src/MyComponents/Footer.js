import React from 'react'

export const Footer = () => {
  let footerSty1e ={
    width:"100%",
    marginTop:"auto",
    height:"3.5rem"
  }
  return (
    <footer className="bg-dark text-light py-3" style={footerSty1e}>
    <p className="text-center">Copyright &copy; MyTodosList.com</p>
    </footer>
  )
}


