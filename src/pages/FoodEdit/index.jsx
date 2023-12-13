import { Container } from "./styles"

import { MdOutlineFileUpload  } from "react-icons/md";
import { IngItem } from '../../components/IngItem'
import { Textarea } from "../../components/Textarea"
import { ButtonBack } from '../../components/ButtonBack'
import { HeaderAdm } from '../../components/HeaderAdm'
import { Footer } from '../../components/Footer'
import { Section } from "../../components/Section"
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom"


export function FoodEdit(){

  const params = useParams();
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
    var texto = `{"title": "${newtags}"}`;
    var objeto = JSON.parse(texto);
    setTags(prevState => [...prevState, objeto])
    
    setNewTags("")
  }
  function hadleRemoveTags(deleted){
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }


  async function handleNewDishes(){
    console.log(title,category,price,description,picture)
    if(!title || !category || !price|| !description|| !picture) {
      return alert("Preencha todos os campos!")
    }
    
      
    const dishes = await api.put(`/dishes/${params.id}`, {title,category,tags,price,description})
    alert("Registro cadastrado!")


    console.log(dishes)
   if (dishes.data) {
      await api.patch(`/dishes/${params.id}`, fileUploadForm );
      const fileUploadForm = new FormData();
      fileUploadForm.append("avatar", pictureFile);
      console.log(fileUploadForm)
      
    }
   

   navigate("/");

  }


  async function handleRemove() {
    const confirm = window.confirm("Deseja realmente remover o prato?");

    if (confirm) {
      await api.delete(`/dishes/${params.id}`);
      navigate("/");
    }
  }

  function handleChangePicture(e){
    const file = e.target.files[0];
    setPictureFile(file);
    
    const imagePreview = URL.createObjectURL(file);
    setPicture(imagePreview)


  }


  

  
  useEffect(() => {
    async function fetchFood() {
      const response = await api.get(`/dishes/${params.id}`);
      const a = response.data[0]
      setTitle(a.title)
      setPrice(a.price)
      setDescription(a.description)
      setPicture(a.picture)

      const i = await api.get(`/ingredients/${params.id}`);
      console.log(i)

    }

    async function fetchFood() {
      const response = await api.get(`/dishes/${params.id}`);
      const a = response.data[0]
      setTitle(a.title)
      setPrice(a.price)
      setDescription(a.description)
      setPicture(a.picture)

    
    }
    async function fetchFoodIngredients() {
      

      const response = await api.get(`/ingredients/${params.id}`);
      const a = response.data
      setTags(a)
      
      
    }
    fetchFood();
    fetchFoodIngredients()
   
  }, []);


  

  return(
    <main>
        <HeaderAdm>
          <input id="header-ipt" type="text" placeholder="Pesquisar pelo título"  onChange={(e) => setSearch(e.target.value)}/>
        </HeaderAdm>  
      <Container>

      <ButtonBack></ButtonBack>

      <h1>Editar Prato</h1>

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
              
              <input value={title} type="text" id="ipt-name" Placeholder="Ex.: Salada Ceasar" onChange={(e) => setTitle(e.target.value)}/> 
              
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
                    value={tag.title}
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

                  <input value={price} type="text" name="" id="ipt-price" Placeholder="R$ 00,00" onChange={(e) => setPrice(e.target.value)}/> 
                
              </Section>

            </div>
            <div className="third-form">
            <Section
              title={"Descrição"}
            >
              <Textarea Placeholder="Ex.: Salada Ceasar" value={description} onChange={(e) => setDescription(e.target.value)}></Textarea>
            </Section>
            </div>

            <div className="form-btn">
              <input type="button" id="btn-ex" value="Excluir prato" onClick={e=> handleRemove(e)}/>
              <input type="button" id="btn" value="Salvar alterações" onClick={e=> handleNewDishes()} />
            </div>
          </div>

          </Container>
        <Footer></Footer>
      </main>
  )
}