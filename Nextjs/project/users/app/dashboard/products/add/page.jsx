import styles from "@/app/ui/dashboard/products/add/addProduct.module.css"
import { addProduct } from "../../../lib/action"

const addProductPage = () => {
  return (
    <div className={styles.container}>
        <form className={styles.form} action={addProduct}> 
            <input type="text" placeholder="title" name="title" required/>
            <select name="category" id="category">
                <option value="general">Choose category</option>
                <option value="kitchen">kitchen</option>
                <option value="phone">phone</option>
                <option value="computer">computer</option>
            </select>
            <input type="number" placeholder="price" name="price" required/>
            <input type="number" placeholder="stock" name="stock" required />
            <input type="text" placeholder="color" name="color" required />
            <input type="text" placeholder="size" name="size" required />

            <textarea name="desc" is="desc" rows="8" placeholder="Description..."> 

            </textarea>
            <button type="submit">Submit</button>
        </form>

    </div>
  )
}

export default addProductPage