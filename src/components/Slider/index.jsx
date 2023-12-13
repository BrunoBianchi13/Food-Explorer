

import { Container } from "./style";
import { Swiper } from "swiper/react"

import { Navigation, Pagination} from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function Slider({settings , children}){

  return(
    <Container>
        <Swiper modules={[Navigation, Pagination]} {...settings}>
          { children }
        </Swiper>
    </Container>
  )
 
  
}