import React, { useContext } from 'react'
import { RecipeContext } from '../../context/RecipeProvider'

const Header = () => {

  const{setQuery,setMealType,getirData}=useContext(RecipeContext)

  return (
    <div>Header</div>
  )
}

export default Header