import { Container } from "./styles"
import { useState } from "react";
import { useNavigate } from "react-router-dom"

import { MdOutlineFileUpload  } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";

import { IngItem } from '../../components/IngItem'
import { Textarea } from "../../components/Textarea"
import { ButtonBack } from '../../components/ButtonBack'
import { HeaderAdm } from '../../components/HeaderAdm'
import { Footer } from '../../components/Footer'
import { Section } from "../../components/Section"
import { api } from "../../services/api";



export function FoodNew(){

  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const [picture, setPicture] = useState("")

  const [pictureFile, setPictureFile] = useState(null);
  const [tags, setTags] = useState([])
  const [newtags, setNewTags] = useState([])

  const navigate = useNavigate()

  function hadleAddTags(){
    setTags(prevState => [...prevState, newtags])
    setNewTags("")
  }

  
  function hadleRemoveTags(deleted){
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }
  async function handleNewDishes(){
    console.log(title,category,tags,price,description,picture)

    if(!title || !category || !price|| !description|| !picture) {
      return alert("Preencha todos os campos!")
    }
    

    
  const dishes = await api.post("/dishes", {title,category,tags,price,description})
   alert("Registro cadastrado!")
   console.log(dishes)
   if (dishes.data) {
    
      const fileUploadForm = new FormData();
      fileUploadForm.append("avatar", pictureFile);
      console.log(fileUploadForm)
      await api.patch(`/dishes/${dishes.data}`, fileUploadForm );
      
    }
   

   navigate("/");
   
  }

  function handleChangePicture(e){
    const file = e.target.files[0];
    setPictureFile(file);

    console.log
    
    const imagePreview = URL.createObjectURL(file);
    setPicture(imagePreview)


  }
  

  return(
      <main>
        <HeaderAdm>
          <input id="header-ipt" type="text" placeholder="Pesquisar pelo título"  onChange={(e) => setSearch(e.target.value)}/>
        </HeaderAdm>    
          <Container>

          <ButtonBack></ButtonBack>

          <h1>Novo prato</h1>

          <div className="form-main">
            <div className="first-form">
            <Section
              title={"Imagem do prato"}
            >


              <div class="loadFile"> 
              <MdOutlineFileUpload /><span>Selecione imagem</span>
                  <input type="file" class="upload" onChange={(e) => handleChangePicture(e)}/> 
              </div>
             
            </Section>

            <Section

            
              title={"Nome"}
            >
              
              <input type="text" id="ipt-name" Placeholder="Ex.: Salada Ceasar" onChange={(e) => setTitle(e.target.value)}/> 
              
            </Section>

            <Section
              title={"Categoria"}
            >
              <div className="selectType" >
                <select name="food" onChange={(e) => setCategory(e.target.value)}>
                  <option>Escolha uma categoria</option>
                  <option value="Refeição">Refeição</option>
                  <option value="Pratos principais">Pratos principais</option>
                  <option value="Bebidas">Bebidas</option>
                </select>
              </div>
              
            </Section>
            </div>
            <div className="second-form">

              <Section
                title={"Ingredientes"}
              >



            <div className="ingre">

            {
                tags.map((tag, index) => (

                  <IngItem 
                    key={String(index)}
                    value={tag}
                    onClick={() => hadleRemoveTags(tag)}
                  />
                ))
                
              }
              
              
              <IngItem isNew placeholder="Adicionar"
                 value={newtags}
                 onChange={e=> setNewTags(e.target.value)}
                 onClick={e=> hadleAddTags(e)}
              
              />
            </div>
              
                
              </Section>
            
              <Section
                title={"Preço"}
              >

                  <input type="text" name="" id="ipt-price" Placeholder="R$ 00,00" onChange={(e) => setPrice(e.target.value)}/> 
                
              </Section>

            </div>
            <div className="third-form">
            <Section
              title={"Descrição"}
            >
              <Textarea Placeholder="Ex.: Salada Ceasar" onChange={(e) => setDescription(e.target.value)}></Textarea>
            </Section>
            </div>

            <input type="button" id="btn" value="Salvar alterações" onClick={e => handleNewDishes(e)} />
          </div>

          </Container>
        <Footer></Footer>
      </main>
  )
}