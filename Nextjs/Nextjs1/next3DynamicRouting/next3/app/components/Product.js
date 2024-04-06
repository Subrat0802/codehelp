

const Product = ({title, price, key}) => {
  return (
    <div style={{border:"1px solid white", margin:"10px", padding:"10px"}}>
      <h4>{title}</h4>
      <h4>{price}</h4>
    </div>
  )
}

export default Product