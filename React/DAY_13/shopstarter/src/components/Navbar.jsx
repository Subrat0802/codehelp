import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <div className="flex flex-row justify-between">
        <NavLink to="/">
          <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z" />
        </NavLink>
        <div>
          <NavLink to="/">
            <p>Home</p>
          </NavLink>

          <NavLink to="/cart">
            <FaShoppingCart />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
