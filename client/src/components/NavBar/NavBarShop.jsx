import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const NavBarShop = () => {
  const { categories } = useSelector((state) => state.categories);
  return (
    <NavDropdown title='Shop' id='navbarScrollingDropdown'>
      {categories &&
        categories.map((cat) => (
          <NavDropdown.Item
            key={cat._id}
            as={NavLink}
            to={`/products?cat=${cat.categoryName.split(' ').join('-')}`}
          >
            {cat.categoryName}
          </NavDropdown.Item>
        ))}
    </NavDropdown>
  );
};
export default NavBarShop;
