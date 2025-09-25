import React from 'react'

const Electronics = () => {
  let items = [
    {id:1, name:"Laptop"},
    {id:2, name:"Smartphone"},
    {id:3, name:"Headphone"}
  ]
  return (
    <div>
      <h1>Electronic Items</h1>
      <ul>
        {items.map((item)=>(
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Electronics
