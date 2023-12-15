import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "redux/auth/selectors";
import { NaviLink } from "./navigation.styled";

export const Navigation = () => {
   const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <NaviLink to="/">Home</NaviLink>
      {isLoggedIn && (
        <NaviLink to="/contacts">Contacts</NaviLink>
      )}
    </nav>
  );
};
