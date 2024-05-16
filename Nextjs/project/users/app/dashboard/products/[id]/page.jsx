import React from 'react'
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image"

const singleProduct = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infocontainer}>
                <div className={styles.imgContainer}>
                <Image
                      className={styles.userImage}
                      src="/download.png"
                      fill
                      alt="user"
                    />
                </div>
                Laptop
            </div>
            <div className={styles.formContainer}>
                <form className={styles.form}>
                    <label>Title</label>
                    <input type="text" name="title" placeholder="laptop"/>
                    <label>Price</label>
                    <input type="number" name="price" placeholder="$29"/>
                    <label>Stock</label>
                    <input type="number" name="stock" placeholder="27 eg."/>
                    <label>Address</label>
                    <input type="number" name="stock" placeholder="27 eg."/>
                    <label>Color</label>
                    <input type="text" name="color" id="" placeholder="black"/>
                    <label>Size</label>
                    <input type="text" name="size" id="" placeholder="size"/>

                    
                    <label>Category</label>
                    <select name="isActive" id="isActive" >
                        <option value="kitchen">kitchen</option>
                        <option value="computer">computer</option>
                    </select>

                    <label>description</label>
                    <textarea name='description' id='description' ></textarea>
    
                    <button type="submit">Update</button>
    
                </form>
            </div>
        </div>
      )
}

export default singleProduct