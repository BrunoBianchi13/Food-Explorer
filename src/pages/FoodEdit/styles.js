import styled from 'styled-components';
import img from '../../assets/imghome.svg';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoint';


export const Container = styled.div`
  padding: 1.5rem 3.2rem 5.5rem;

.form-main{
  width: 100%;
  gap:2.4rem;
  display: flex;
  flex-direction: column;
  align-items: end;
  
}

.first-form{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap:2.4rem;
}

.second-form{
  width: 100%;
  gap:2.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.third-form{
  width: 100%;
  gap:2.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
  
.loadFile {
  position: relative; 
  overflow: hidden;  

  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.4rem; 

  margin-top: 1rem;
  border-radius: .8rem;
  background: ${({theme})=> theme.COLORS.DARK_800};
  width: 36.4rem;  
    
  display: flex;
  padding: 1.2rem 3.2rem;
  align-items: center;
  justify-content: center;
  gap: .8rem;

}
.loadFile input.upload { 
  position: absolute; 
  top: 0; 
  right: 0; 
  margin: 0; 
  padding: 0; 
  font-size: 2.0rem; 
  cursor: pointer; 
  opacity: 0; 
    
}
.selectType {
  width: 100%;
  overflow: hidden;
}

.selectType select {
  padding: 1.6rem;
  border-radius: .5rem;
  background: ${({theme})=> theme.COLORS.DARK_900};
  border: 0;
  width: 36.4rem;
  color: ${({theme})=> theme.COLORS.WHITE};
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; 
  margin-top: 1rem;
    
}

.selectType select-items {
  padding: 1.6rem;
  border-radius: .5rem;
  background: ${({theme})=> theme.COLORS.DARK_900};
  border: 0;
  width: 36.4rem;
  color: ${({theme})=> theme.COLORS.WHITE};
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; 
    
}

.ingre{
  width: 36rem;
  border-radius: .8rem;
  background: ${({theme})=> theme.COLORS.DARK_800};
  display: flex;
  flex-direction: row;
  padding: .4rem .8rem;
  align-items: center;
  gap: 1.6rem; 
  overflow:hidden; 
  flex-wrap: wrap;
  margin-top: 1rem;
}

#ipt-name, #ipt-price{

  display: flex;
  margin-top: 1rem;
  width: 36.4rem;
  height: 4.8rem;
  padding: 1.2rem 1.4rem;
  justify-content: center;
  align-items: center;
  gap: 1.4rem;

  border-radius: .8rem;
  border: 0;
  background: ${({theme})=> theme.COLORS.DARK_800};
  color: white;
}

#btn{
  margin-bottom: 1rem;
  width: 36.4rem;
  padding: 1.2rem 1.4rem;
  

  border-radius: .5rem;
  opacity: 0.8;
  background: ${({theme})=> theme.COLORS.TOMATO};
  border: 0;

  color: ${({theme})=> theme.COLORS.WHITE};
  text-align: center;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.4rem; 
}

> .back svg{
  width: 2.2061rem;
  height: 2.2061rem;
}

> .back{
  color: ${({theme})=> theme.COLORS.WHITE};
  font-size: 1.6546rem;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  margin-bottom: 1.6rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  
}

h1{
  font-size: 3.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.4rem;
  margin: 4rem 0;
  color: white;   
}


img{
  width: 2.5rem;
  height: 2.5rem;

}


.form-btn{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content:space-between;
  gap: 3.2rem;
  
}



#btn{
  margin-bottom: 1rem;
  width: 17.2rem;
  padding: 1.2rem 1.4rem;
  border-radius: .5rem;
  opacity: 0.8;
  background: ${({theme})=> theme.COLORS.TOMATO};
  border: 0;
  color:${({theme})=> theme.COLORS.WHITE};
  text-align: center;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.4rem; 
}

#btn-ex{
  margin-bottom: 1rem;
  width: 16.0rem;
  padding: 1.2rem 1.4rem;
  border-radius: .5rem;
  opacity: 0.8;
  background: ${({theme})=> theme.COLORS.DARK_800};
  border: 0;
  color: ${({theme})=> theme.COLORS.WHITE};
  text-align: center;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.4rem; 
}


@media (min-width: ${DEVICE_BREAKPOINTS.MB}) {
  
  .ingre{
    width: 83.7rem;
    padding: .8rem .8rem;
  }
  .first-form, .second-form, .third-form{
    display: flex;
    flex-direction: row;
  }

  .loadFile{
    width: 22.9rem;
  }

  #ipt-name{
    width: 46.3rem;
  }
  #ipt-ingredientes{
    width: 83.7rem;
  }
  #ipt-price{
    width: 25.1rem;
  }

  #btn{
    margin-right: 12.5rem;
    margin-bottom: 11.6rem;
    width: 17.2rem;
  }

  h1{
    margin-left: 12.5rem;
  }
  .back{
    margin: 4.0rem 0 0 12.5rem;
  }

  #btn{
    margin-right: 12.5rem;
    margin-bottom: 11.6rem;
    width: 17.2rem;
  }
  #btn-ex{
    margin-right: 1.6rem;
    margin-bottom: 11.6rem;
    width: 13.5rem;
  }
}


`

