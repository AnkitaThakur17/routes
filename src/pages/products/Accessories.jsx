import React from 'react'

const Accessories = () => {
  let items = [
    {id:1, name:"Watch"},
    {id:2, name:"Wallet"},
    {id:3, name:"Belt"}
  ]
  return (
    <div>
      <h1>Accessories</h1>
      <ul>
        {items.map((item)=>(
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Accessories
