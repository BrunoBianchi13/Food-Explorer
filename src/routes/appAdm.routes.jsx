import { Routes, Route } from 'react-router-dom'

import { HomeAdm } from '../pages/HomeAdm'
import { FoodPreviewAdm } from '../pages/FoodPreviewAdm'
import { FoodNew } from '../pages/FoodNew'
import { FoodEdit } from '../pages/FoodEdit'
export function AppAdmRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomeAdm />} />
      <Route path='/FoodPreviewAdm/:id' element={<FoodPreviewAdm/>}/>
      <Route path="/FoodNew" element={<FoodNew />} />
      <Route path='/FoodEdit/:id' element={<FoodEdit/>}/>
      
    </Routes>
    
  )
}