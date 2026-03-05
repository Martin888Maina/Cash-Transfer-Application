//imports the link component fro the navigation between pages
import { Link } from 'react-router-dom';
 // Import custom styling CSS file for the navbar
import '../styling/Navbar.css'; 


const Navbar = () => {
  return (
    // navigation bar containing the list of links
    <nav>
      <ul>
        <li>
          {/*List item for the Home link  */}
          <Link to="/">Home</Link>
        </li>
        <li>
          {/* List item for the Create Account link  */}
          <Link to="/create-account">Create Account</Link>
        </li>
        <li>
          {/*List item for the View Account link  */}
          <Link to="/view-account">View Account</Link>
        </li>
        <li>
          {/* List item for the Transfer Money link */}
          <Link to="/transfer">Transfer Money</Link>
        </li>
      </ul>
    </nav>
  );
};
// Export the Navbar component for use in other parts of the application
export default Navbar;