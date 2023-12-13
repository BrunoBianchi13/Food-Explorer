import { Container, Logo } from "./styles"
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Link } from "react-router-dom"
import { useAuth } from "../../hooks/auth"
import { useState } from "react"



export function SignIn(){
  const[email, setEmail] = useState("")
  const[password, setPassword] = useState("")
  const {signIn} = useAuth()


  function handleSignIn() {
 

   
    
    signIn({ email, password });
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

          <h1>Faça login</h1>
          <span>Email</span>
          <Input Placeholder="Exemplo: exemplo@exemplo.com.br"
            onChange={e=> setEmail(e.target.value)}
          ></Input>

          <span>Senha</span>
          <Input placeholder="No mínimo 6 caracteres"
            onChange={e=> setPassword(e.target.value)}
          
          ></Input>
          <Button title={"Entrar"} onClick={e=> handleSignIn(e)}></Button>

          
        </form>
        <Link style={{ textDecoration: 'none',color:'white' }} to="/signUp"><input id="btn_new" type="button" value={"Criar uma conta"}></input></Link>
        
      </div>
        

        
      </Container>
    </main>
    
  )
}