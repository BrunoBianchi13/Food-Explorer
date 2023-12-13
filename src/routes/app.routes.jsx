import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { FoodPreview } from '../pages/FoodPreview'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/FoodPreview/:id' element={<FoodPreview/>}/>
    </Routes>
    
  )
}