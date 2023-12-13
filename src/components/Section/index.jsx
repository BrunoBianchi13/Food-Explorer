import { Container } from "./style";


export function Section({title, children}){

  return(
    <Container>
      <h2>{title}</h2>
      <div className="card">
        {children}
      </div>
    </Container>
  )
 
  
}
