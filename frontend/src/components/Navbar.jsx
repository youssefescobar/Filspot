import { ArrowDropDown, Notifications, Search } from "@mui/icons-material";
import "./Navbar.scss";
const Navbar = () => {
  
  return (
    <div className={"navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="/filspot_logo.png"
            alt="FilSpot_logo"
          />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>Popular</span>
          <span>My Watch List</span>
        </div>
        <div className="right">
          <Search className="icon" />
          
          <Notifications className="icon" />
          
          <div className="profile">
          <span>USER</span>
            
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>My Account</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;