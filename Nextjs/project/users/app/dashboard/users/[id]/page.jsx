import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css"
import Image from "next/image";
import { fetchUser } from "../../../lib/data";

const SingleUserPage = async ({params}) => {

    const {id} = params;
    const user = await fetchUser(id);

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
            {user.userName}
        </div>
        <div className={styles.formContainer}>
            <form className={styles.form}>
                <input type="hidden" name="id" value={user.id}/>
                <label>user Name</label>
                <input type="text" name="username" placeholder={user.userName}/>
                <label>Email</label>
                <input type="email" name="email" placeholder={user.email}/>
                <label>Password</label>
                <input type="password" name="password" placeholder="password"/>
                <label>phone</label>
                <input type="phone" name="phone" placeholder={user.phone}/>
                <label>Address</label>
                <textarea type="address" name="address" id="" placeholder={user.address}></textarea>
                <label>is admin</label>
                <select name="isAdmin" id="isAdmin" >
                    <option value={true} selected={user.isAdmin}>Yes</option>
                    <option value={false} selected={!user.isAdmin}>no</option>
                </select>
                <label>is active</label>
                <select name="isActive" id="isActive" >
                    <option value={true} selected={user.isActive}>Yes</option>
                    <option value={false} selected={!user.isActive}>no</option>
                </select>

                <button type="submit">Update</button>

            </form>
        </div>
    </div>
  )
}

export default SingleUserPage