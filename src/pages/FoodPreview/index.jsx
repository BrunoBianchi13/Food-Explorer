import { Container } from "./styles"

import { ButtonBack } from '../../components/ButtonBack'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../services/api";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

export function FoodPreview(){


  const [food, setFood] = useState([]);
  const [tags, setTags] = useState([]);

  const [qtde, setQtde] = useState(0);
  const params = useParams();

  

  const navigate = useNavigate()
  function handleDetails() {
    alert("oiii")
    navigate(`/FoodEdit/${params.id}`);
  }
  useEffect(() => {
    async function fetchFood() {
      const response = await api.get(`/dishes/${params.id}`);
      setFood(response.data[0]);
      console.log(food)
  }
    async function fetchFoodIngredients() {

      const response = await api.get(`/ingredients/${params.id}`);
      const a = response.data
      
      setTags(a)
      console.log(tags)
    
  }
    fetchFood()
    fetchFoodIngredients()
    
    
  }, []);

  const avatarUrl = `${api.defaults.baseURL}/files/${food.picture}`;

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
      <main>
        <Header>
            <input id="header-ipt" type="text" placeholder="Pesquisar pelo título"  onChange={(e) => setSearch(e.target.value)}/>
          </Header> 
          <Container>


          <ButtonBack></ButtonBack>

          <div className="infoMain">

            <div className="infoMain-img">
              <img src={avatarUrl} alt="" />
            </div>
            
              
            <div className="cartMain">
            
              <h1>{food.title}</h1>
              <span>{food.description}</span>
              <div className="infoTag">


              {
                tags.map((tag, index) => (

                  <label htmlFor="">{tag.title}</label>
                  
                ))
                
              }
              
              </div>
              <div className="infoCar">
              <FaMinus onClick={() => minusQtd()}/> 
                <span>{qtde}</span>
                <FaPlus onClick={() => plusQtd()}/>            
                <input id="btn-editar" type="button" value={`incluir R$ ` + food.price} onClick={() => handleDetails()}/>
                
              </div>
              
              </div>
            </div>
           
            
          </Container>
        <Footer></Footer>
      </main>
  )
}