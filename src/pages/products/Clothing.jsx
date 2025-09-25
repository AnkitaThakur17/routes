import React from 'react'

const Clothing = () => {
  let items= [
    {id:1, name:"T-shirt"},
    {id:2, name:"Jeans"},
    {id:3, name:"Shirt"}
  ]
  return (
    <div>
      <h1>Clothes</h1>
      <ul>
        {items.map((item)=>(
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Clothing
