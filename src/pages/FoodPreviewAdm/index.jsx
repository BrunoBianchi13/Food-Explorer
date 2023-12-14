import { Container } from "./styles"

import img from '../../assets/Dish.svg';




import { HeaderAdm } from '../../components/HeaderAdm'
import { Footer } from '../../components/Footer'
import { ButtonBack } from '../../components/ButtonBack'
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useNavigate, useParams } from "react-router-dom";

export function FoodPreviewAdm(){
  
  const [food, setFood] = useState([]);
  const [tags, setTags] = useState([]);
  const params = useParams();

  const navigate = useNavigate()
  function handleDetails() {
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
  return(
      <main>
        <HeaderAdm>
          <input id="header-ipt" type="text" placeholder="Pesquisar pelo título"  onChange={(e) => setSearch(e.target.value)}/>
        </HeaderAdm> 
          <Container>


          <ButtonBack/>

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
              
                  
                <input id="btn-editar" type="button" value="Editar Prato" onClick={() => handleDetails()}/>
              
              </div>
            </div>
           
            
          </Container>
        <Footer></Footer>
      </main>
  )
}