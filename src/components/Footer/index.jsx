import { Container } from "./style";
import img from '../../assets/logo2.svg';


export function Footer(){

  return(

    <Container>
      <div className="fot">
      
        
          <h1><img id="logo" src={img} alt="" />food explorer</h1>

          <span>© 2023 - Todos os direitos reservados.</span>
        
      </div>
    </Container>
      

    
  )
 
  
}