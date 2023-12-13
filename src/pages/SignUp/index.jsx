import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import { api } from "../../services/api"

import { Container, Logo } from "./styles"
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'


export function SignUp(){

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  function handleSignUp(){
    if(!name || !email || !password) {
      return alert("Preencha todos os campos!")
    }
    
    api.post("/users", {name, email, password})
    .then(() => {
        alert("Usuário cadastrado com sucesso");
        navigate("/");
    })
    .catch(error => {
        
      alert("Não foi possivel realizar o cadastro!");
        
    })

    
  }

  return(

    <main>
      <Container>
      <div className="title">
          <Logo></Logo>
          <h1>food explorer</h1>
      </div>

      <div className="form_main">
        <form action="">

          <h1>Crie sua conta</h1>
          <span>Seu nome</span>

          <Input Placeholder="Exemplo: Maria da Silva"
            onChange={e=> setName(e.target.value)}
          ></Input>

          <span>Email</span>
          <Input Placeholder="Exemplo: exemplo@exemplo.com.br"
            onChange={e=> setEmail(e.target.value)}
          ></Input>

          <span>Senha</span>
          <Input placeholder="No mínimo 6 caracteres"
            onChange={e=> setPassword(e.target.value)}
          
          ></Input>

          <Button title={"Criar conta"}
            onClick={e => handleSignUp(e)}
          ></Button>
          


          
        </form>

        <Link style={{ textDecoration: 'none',color:'white' }} to="/"><input id="btn_new" type="button" value={"Já tenho uma conta"}></input></Link>
      </div>
        

        
      </Container>
    </main>
    
  )
}