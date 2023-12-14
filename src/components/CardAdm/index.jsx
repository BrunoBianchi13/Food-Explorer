import { Container} from "./style";

import logo from '../../assets/Dish.svg';

import { useNavigate } from "react-router-dom"
import { TiPencil } from "react-icons/ti";
import { api } from "../../services/api";

export function CardAdm({data, ...rest}){

  const avatarUrl = `${api.defaults.baseURL}/files/${data.picture}`;
  const navigate = useNavigate()
  function handleDetails(id) {
    navigate(`/FoodEdit/${id}`);
  }

  function handleDetailsItem(id) {
    navigate(`/FoodPreviewAdm/${id}`);
  }

  function handleDetailsA(id) {
    navigate(`/FoodPreviewAdm/${id}`);
  }
  return(
    <Container >
      
        <div className="like">
          <TiPencil onClick={() => handleDetails(data.id)}/>
        </div>
        <img src={avatarUrl} onClick={() => handleDetailsItem(data.id)} alt=""/>
        <h1>{data.title}</h1>
        <h5>{data.description}</h5>
        <span>R$ {data.price}</span> 
                                                        
      
    </Container>
  )
 
  
}