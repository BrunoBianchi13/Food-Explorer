import { Container, Img } from "./styles"
import { useNavigate } from "react-router-dom"

import img from '../../assets/imghome.svg';
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Section } from "../../components/Section"
import { CardAdm } from "../../components/CardAdm"
import { Card } from "../../components/Card"
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Slider } from "../../components/Slider"
import { Swiper, SwiperSlide } from "swiper/react"
import { Input } from "../../components/Input";


export function Home(){
  const [pp, setPp] = useState([]);
  const [refeicoes, setRefeicoes] = useState([]);
  const [bebidas, setBebidas] = useState([]);
  const [search, setSearch] = useState([])

  const Bebidas = "Bebidas"
  const Refeicoes = "Refeição"
  const PP = "Pratos principais"

  const navigate = useNavigate()
  function handleDetails(id) {
    navigate(`/FoodPreviewAdm/${id}`);
  }


  
  useEffect(() => {
    async function fetchFood() {
      console.log(search)
      const response = await api.get(`/dishes/?category=${Bebidas}&title=${search}`);
      console.log(response)
      setBebidas(response.data);
      

    }

    async function fetchFoode() {
      const response = await api.get(`/dishes/?category=${Refeicoes}&title=${search}`);
      setRefeicoes(response.data);

    }

    async function fetchFooda() {
      const response = await api.get(`/dishes/?category=${PP}&title=${search}`);
      setPp(response.data);

    }

    
    fetchFood();
    fetchFoode();
    fetchFooda();

    
   
  }, [Bebidas,Refeicoes,PP,search]);

  const settings ={
    spaceBetween : 16,
    slidesPerView : 1.8,
    navigation:true,
    pagination:{ clickable: true },
    breakpoints:{
      1400:{
        spaceBetween : 27,
        slidesPerView : 3.5
      }
    }
    }
  

  return(
      <main>
          <Header>
            <input id="header-ipt" type="text" placeholder="Pesquisar pelo título"  onChange={(e) => setSearch(e.target.value)}/>
          </Header>   
          <Container>

            <div className="first-cont">
              <div className="first-img">
                <img src={img} alt="" />
              </div>
              <div className="first-info">
                <h1>Sabores inigualáveis</h1>
                <span>Sinta o cuidado do preparo com ingredientes selecionados</span>
              </div>
            </div>

            
           <div className="had">
              
              <Section title={"Refeições"}>

                <Slider settings={settings}>
                  {
                    
                    refeicoes.map(fd => (
                      <SwiperSlide >
                      <Card
                        key={String(fd.id)}
                        data={fd}
                      /></SwiperSlide>
                    ))
                  } 
                </Slider>
              </Section>

                <Section title={"Pratos principais"}>
                  <Slider settings={settings}>
                    {
                      
                      pp.map(fd => (
                        <SwiperSlide >
                        <Card
                        key={String(fd.id)}
                        data={fd}
                      /></SwiperSlide>
                      ))
                    } 
                  </Slider> 
                  
                </Section>

                <Section title={"Bebidas"}>
                  <Slider settings={settings}>
                    {
                      
                      bebidas.map(fd => (
                        <SwiperSlide >
                        <Card
                        key={String(fd.id)}
                        data={fd}
                      /></SwiperSlide>
                      ))
                    } 
                  </Slider>
                  
                </Section>
                
              </div> 
            
          </Container>
        <Footer></Footer>
      </main>
  )
}