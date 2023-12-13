import { useNavigate } from "react-router-dom";
import { Container } from "./style";
import { IoIosArrowBack } from "react-icons/io";

export function ButtonBack(){

  const navigate = useNavigate()
  function handleDetails() {
    
    navigate(`/`);
  }

  return(
    <Container type="button" onClick={() => handleDetails()}>
        <div className="back">
            <IoIosArrowBack/>voltar
        </div>
    </Container>

    
  )
 
  
}