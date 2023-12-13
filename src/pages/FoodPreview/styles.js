import styled from 'styled-components';
import img from '../../assets/imghome.svg';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoint';


export const Container = styled.div`

    padding: 5.6rem 5.6rem;
    



> .infoMain{
    display: flex;
    flex-direction: column;
    align-self: center;
    justify-content: center;
    

    
}
.infoMain .infoMain-img {
    
    display: flex;
    align-self: center;
    justify-content: center;
}
.infoMain-img img{

    width: 26.4rem;
    height: 26.4rem;
    margin-bottom: 1.6rem;

    
}
> .infoMain .back svg{
    width: 3.2rem;
    height: 3.2rem;
}

> .infoMain .back{
    color: var(--light-light-300, #E1E1E6);
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; 
    margin-bottom: 3rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  
}

.cartMain{
    margin-bottom: 2.4rem;
    display: flex;
    flex-direction: column;
    
    justify-content: center;
}
.cartMain h1{
    color: var(--light-light-300, #E1E1E6);
    font-size: 2.7041rem;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    text-align: center;
    
}

> .infoMain .cartMain span{
    color: var(--light-light-300, #E1E1E6);
    text-align: center;
    font-size: 1.6225rem;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; 
    margin-bottom: 2.4rem;
}


> .infoMain .infoTag{
    display: flex;
    max-width: 31.6rem;
    flex-direction: row;
    align-items: center;
    gap: 2.4rem;
    margin-bottom: 4.8rem;
}

> .infoMain .infoTag label{
    display: inline-flex;
    padding: .4rem .8rem;
    justify-content: center;
    align-items: center;
    gap: .8rem;

    



    border-radius: .5rem;
    background: var(--dark-dark-1000, #192227);
}

> .infoMain .infoCar{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 5.5rem;
}


> .infoMain  .infoCar  svg{
    width: 2.7152rem;
    height: 2.7152rem;
    margin-inline: 0.8rem;
    
}

> .infoMain  .infoCar  span{
    color: var(--light-light-300, #E1E1E6);
    font-size: 2.7152rem;
    font-style: normal;
    font-weight: 700;
    margin-top: 2.5remrem;
    
}


#btn-editar{

display: flex;
padding: 1.2rem 2.4rem;
justify-content: center;
align-items: center;
border-radius: .5rem;
background: var(--tints-tomato-100, #750310);
border: 0;


color: var(--light-light-100, #FFF);
text-align: center;
font-size: 1.4rem;
font-style: normal;
font-weight: 500;
line-height: 2.4rem;

}
@media (min-width: ${DEVICE_BREAKPOINTS.MB}) {
    
    padding: 2.4rem 0;
    margin: 0 12.1rem;
    

    .infoMain{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: left;
        margin-bottom: 15.5rem;
        margin-top: 4.0rem;
        
        gap: 4.8rem;
        
    }
    .infoMain .infoCar{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: start;
    }


    #btn-editar{
        width: 13.1rem;
        height: 4.8rem;
    }
    
    .cartMain{
        
        display: flex;
        flex-direction: column;
        align-items: left;
        
        
        width: 68.7rem;
        height: 30.0rem;
        
        
    }
    #btn-editar{
        width: 13.1rem;
        height: 4.8rem;
    }
    
    

    .infoMain-img img{

        width: 39.0105rem;
        height: 38.9rem;
        
    }

    
    .cartMain h1{
        color: var(--light-light-300, #E1E1E6);
        font-size: 4.0rem;
        font-style: normal;
        font-weight: 500;
        line-height: 140%;
        text-align: left;
        margin-bottom: 2.4rem;
        
        
    }

    > .infoMain .cartMain span{
        color: var(--light-light-300, #E1E1E6);


            font-size: 2.4rem;
            font-style: normal;
            font-weight: 400;
            line-height: 140%;
        text-align: left;
        margin-bottom: 2.4rem;
        text-align: left;
    }
}

`

