import Product from "@/app/components/Product";


async function getProducts(a) {
    const res = await fetch(
      `https://dummyjson.com/products/${a}`
    );
    const json = await res.json();  
    return json;
  }
  

const page = async ({params}) => {
    let a = params.item;
    const product = await getProducts(a);
    console.log(product);

  return (
    <div>
        Product id: {params.item}
        <img src={product.thumbnail}/>
        <Product title={product.title} price={product.price} />
        
    </div>
  )
}

export default page