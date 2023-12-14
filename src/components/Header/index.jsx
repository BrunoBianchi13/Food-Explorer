import { Container } from "./style";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";

import img from '../../assets/logo.svg';
import { IoMdClose,IoMdMenu } from "react-icons/io";
import { PiReceipt } from "react-icons/pi";
import { FaSignOutAlt } from "react-icons/fa"
import { useNavigate } from "react-router-dom";

export function Header({children}){

  const { signOut } = useAuth()

  const [active, setMode] = useState(false)
  const ToggleMode = () => {
    setMode(!active)
  }

  const ToggleModeClose = () => {
    setMode(!active)
  }

  const navigate = useNavigate()
  function handleDetails(id) {
    
    navigate(`/`);
  }
  return(

    <Container >
      <div className={active ? "hadOpen" : "had" }>

        <div className="icon-open">
          <IoMdMenu onClick={e=> ToggleMode()}/>
        </div>
        
        
        <div className="icon">
            <IoMdClose onClick={e=> ToggleModeClose()}></IoMdClose>
        </div>

        <div className="title" onClick={() => handleDetails()}>
          <img src={img} alt="" /><h5>food explorer</h5>
          
        </div>
        
        
        <div className="order">
          <PiReceipt/><span>0</span>
        </div>

        {children}
        <div className="desk">
        
              <div className="cart-desk">
              <PiReceipt/>
              <span>Pedidos</span>
              <span>( 0 )</span>
          </div>
          
              <FaSignOutAlt onClick={e => signOut(e)} />
            
        </div>
        
      

        


        <div className="titleOpen">
          <h5>Menu</h5>
        </div>
        

        

        
      
        


      </div>
      
      <div className={active ? "menuOpen" : "menuClose" }>
      {children}
        <input id="btn_sair" type="button" value="Sair" onClick={e => signOut(e)} />

       
        
        

      </div>
    </Container>
      

    
  )
 
  
}