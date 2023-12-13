import styled from 'styled-components';
import img from '../../assets/imghome.svg';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoint';


export const Container = styled.div`

padding: 4.4rem 1.6rem 0 3.6rem;
min-height: 132rem;
z-index: -1;

.swiper{
    width: 36.4rem;
    display: flex;

}

.swiper-slide{
   display: flex;
   justify-content: center;

}

.swiper-button-prev {
    color: ${({ theme }) => theme.COLORS.WHITE};
    display: none;
    background: rgba(0, 0, 0, .3);
    width: 10.0rem;
    height: 48.5rem;
    top:0;
    right: 0;
    padding-inline: 5.0rem 0rem;
}

.swiper-button-next {
    color: ${({ theme }) => theme.COLORS.WHITE};
    display: none;
    background: rgba(0, 0, 0, .3);
    width: 10.0rem;
    height: 48.5rem;
    top:0;
    right: 0;
    padding-inline: 5.0rem 0rem;
}


  .swiper-pagination-bullet-active {
    display: none;
}


.first-cont{
    
    width: 100%;
    height: 12rem;
    border-radius: .29rem;
    background: var(--gradients-200, linear-gradient(180deg, #091E26 0%, #00131C 100%));
    position:relative;
    display: flex;
    justify-content: space-between;
}

.first-cont img{
    
    width: 19.1rem;
    height: 14.9rem;
    position:absolute;
    bottom:0;
    right:20.7rem;
    
    
   
}

.first-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 20.0rem;


}

.first-info h1{
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
}

.first-info span{
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
}




@media (min-width: ${DEVICE_BREAKPOINTS.MB}) {

    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-inline: 12.3rem;

.swiper{
    width: 111.0rem;
    display: flex;
    
    
}

.swiper-slide{
   display: flex;
   justify-content: center;

}

.swiper-button-prev {
    color: ${({ theme }) => theme.COLORS.WHITE};;
    display: flex;
    background: rgba(0, 0, 0, .3);
    width: 10.0rem;
    height: 48.5rem;
    top:0;
    left: 0;
    padding-inline: 2.0rem 5.0rem;
  }

  .swiper-button-next {
    color: ${({ theme }) => theme.COLORS.WHITE};;
    display: flex;
    background: rgba(0, 0, 0, .3);
    width: 10.0rem;
    height: 48.5rem;
    top:0;
    right: 0;
    padding-inline: 5.0rem 0rem;
  }


  .swiper-pagination-bullet-active {
    display: none;
}

    .first-cont{
    
        width: 112.0rem;
        height: 26.0rem;
        border-radius: .29rem;
        background: var(--gradients-200, linear-gradient(180deg, #091E26 0%, #00131C 100%));
        position:relative;
        display: flex;
        justify-content: space-between; 

        margin-top: 13.4rem;
        margin-bottom: 6.4rem;
    }

    .first-cont img{
        
        width: 63.2rem;
        height: 40.6rem;
        position:absolute;
        bottom:0;
        left:0;
        
    }

    .first-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 50.0rem;


    }

    .first-info h1{
        
        font-size: 4.0rem;
        font-style: normal;
        font-weight: 500;
        line-height: 140%;
    }

    .first-info span{
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 400;
        line-height: 140%;
    }
}




`

export const Img = styled.div`
    width: 19.1rem;
    height: 14.9rem;
    position:absolute;
    bottom:0;
    right:20.7rem;
    
    background: url(${img}) no-repeat center center;
    background: cover;
    margin-right:1.5rem;
`

