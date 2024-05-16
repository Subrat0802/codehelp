import Image from "next/image";
import styles from "./sidebar.module.css";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import MenuLink from "@/app/ui/sidebar/menuLink/menuLink"

const menuItems = [
    {
        title:"Users",
        list:[
            {
                title : "Dashboard",
                path: "/dashboard",
                icon: <MdOutlineDashboardCustomize />
            },
            {
                title : "Users",
                path: "/dashboard/users",
                icon: <CiUser />
            },
            {
                title : "Products",
                path: "/dashboard/products",
                icon: <MdOutlineProductionQuantityLimits />
            },
            {
                title : "Transictions",
                path: "/dashboard/transictions",
                icon: <MdOutlineProductionQuantityLimits />
            },
            
        ],
    },
]

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image width={50} height={50} src="/download.png" alt="avatar" />
        <div className={styles.userDetails}>
          <span className={styles.userName}>Hello</span>
          <span className={styles.userTitle}>world</span>
        </div>
      </div>

      <div>
        <ul className={styles.list}>
            {
                menuItems.map((item) => (
                    <li key={item.title}>
                        <span className={styles.item}>
                            {item.title}
                        </span>
                        {
                           item.list.map((i) => (
                            <MenuLink pro={i} key={i.title}/>
                           )) 
                        }
                    </li>
                ))
            }
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
