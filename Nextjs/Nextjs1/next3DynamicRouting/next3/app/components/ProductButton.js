'use client'
import {useRouter} from "next/navigation"

const ProductButton = ({id}) => {

    const router = useRouter();

    function handleClick(){
        router.push(`/products/${id}`)
    }


  return <button onClick = {handleClick}> 
    Go to Product
  </button>;
};

export default ProductButton;
