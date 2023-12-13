import { useSelector } from "react-redux";
import { Header, HeaderLink, HeaderNavUl } from "./HeaderNav.styled";
import { selectIsLoggedIn } from "redux/auth/selectors";

export const HeaderNav = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
 
  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
      {/* <nav>
        <HeaderNavUl>
          <li>
            <HeaderLink to="/">Home</HeaderLink>
          </li>
          <li>
            <HeaderLink to="/movies">Movies</HeaderLink>
          </li>
        </HeaderNavUl>
      </nav> */}
    </Header>
  );
};

