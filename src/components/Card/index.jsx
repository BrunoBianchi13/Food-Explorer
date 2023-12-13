import { Container} from "./style";

import logo from '../../assets/Dish.svg';


import { AiOutlineHeart,AiOutlineMinus,AiOutlinePlus } from 'react-icons/Ai'
import { api } from "../../services/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export function Card({data, ...rest}){
  const avatarUrl = `${api.defaults.baseURL}/files/${data.picture}`;

  const [qtde, setQtde] = useState(0);


  const navigate = useNavigate()
  function handleDetails(id) {
    
    navigate(`/FoodPreview/${id}`);
  }


  function plusQtd(){
    const qtd = qtde + 1
    setQtde(qtd)
  }
  function minusQtd(){
    if (qtde <= 0) {
      return
    }
    const qtd = qtde - 1
      setQtde(qtd)
    
  }
  return(
    <Container>
      <div className="info-card">
        <div className="like">
          <AiOutlineHeart></AiOutlineHeart>
        </div>
        
        <img src={avatarUrl} onClick={() => handleDetails(data.id)} alt="" />
        <h1>{data.title}</h1>
        <h5>{data.description}</h5>
        <span>R$ {data.price}</span>


        <div className="cart">
          <div className="qtde-card">
            <AiOutlineMinus onClick={() => minusQtd()}/>
            <span>{qtde}</span>
            <AiOutlinePlus onClick={() => plusQtd()}/>
          </div> 

          
            <input type="button" value="incluir" />

        </div>
        
        
        
      </div>                                                   
      
    </Container>
  )
 
  
}