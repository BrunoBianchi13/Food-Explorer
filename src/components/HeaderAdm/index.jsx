import { Container } from "./styles";
import { useState } from "react";
import { Link } from "react-router-dom";



import img from '../../assets/logo.svg';



import { IoMdClose,IoMdMenu } from "react-icons/io";
import { FaSignOutAlt } from "react-icons/fa"
import { useAuth } from "../../hooks/auth"
export function HeaderAdm({children}){

  const { signOut } = useAuth()

  const [active, setMode] = useState(false)
  const ToggleMode = () => {
    setMode(!active)
  }

  const ToggleModeClose = () => {
    setMode(!active)
  }

  return(

    <Container>
      <div className={active ? "hadOpen" : "had" }>

        <div className="icon-open">
          <IoMdMenu onClick={e=> ToggleMode()}/>
        </div>
    
        
        <div className="icon">
            <IoMdClose onClick={e=> ToggleModeClose()}></IoMdClose>
        </div>
 
        <div className="title">
        <Link to="/"  style={{ textDecoration: 'none',color:'white' }}><h5><img src={img} alt="" />food explorer</h5></Link>
          <h4>admin</h4>
        </div>
        
        <div className="nd"></div>
        
        

      
        <div className="desk">
          
        {children}
          <div className="cart-desk">
              
              <Link style={{ textDecoration: 'none',color:'white' }} to="/FoodNew"><span>Novo prato</span></Link>
              
          </div>
          
          <FaSignOutAlt onClick={e => signOut(e)} />
            
        </div>
        
      

        


        <div className="titleOpen">
          <h5>Menu</h5>
        </div>
        

        

        
      
        


      </div>
      <div className={active ? "menuOpen" : "menuClose" }>
      {children}
        <Link to="/FoodNew" ><input id="btn_sair" type="button" value="Novo prato" /></Link>
        <input id="btn_sair" type="button" value="Sair" onClick={e => signOut(e)} />

       
        
        

      </div>
    </Container>
      

    
  )
 
  
}