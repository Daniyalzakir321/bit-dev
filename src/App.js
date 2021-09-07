import React from 'react'
import SearchInput from './components/search/search'
import Cart from './components/cart/cart'

function App() {
  return (
    <div>
      <SearchInput value={null} onChange={e=>console.log(e.target.value)} />
      <Cart title={`Card Title`} text={`Some quick example text to build on the card title and make up the bulk of the card's content.`}/>
    </div>
  )
}

export default App
