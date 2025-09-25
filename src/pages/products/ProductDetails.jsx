import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    const {id , name} = useParams()
  return (
    <div>
      <h1>Product details</h1>
      <p>Product ID : {id}</p>
      <p>Product Name : {name}</p>
    </div>
  )
}

export default ProductDetails
