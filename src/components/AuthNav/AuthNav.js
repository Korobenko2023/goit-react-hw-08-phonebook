import { useDispatch } from "react-redux";
import { Nav, NaviLink } from "./AuthNav.styled";
import { showButterfly } from "redux/butterfly/butterflySlice";

export const AuthNav = () => {
  const dispatch = useDispatch();

  const handleLinkClick = () => {
    dispatch(showButterfly());
  };

  return (
    <Nav>
      <NaviLink to="/login" onClick={handleLinkClick}>Log In</NaviLink>
      <NaviLink to="/register" onClick={handleLinkClick}>Sign Up</NaviLink>      
    </Nav>
  );
};
