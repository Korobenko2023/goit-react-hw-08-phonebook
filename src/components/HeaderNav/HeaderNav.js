import { useSelector } from "react-redux";
import { Header } from "./HeaderNav.styled";
import { selectIsLoggedIn } from "redux/auth/selectors";
// import { Navigation } from "components/Navigation/Navigation";
import { AuthNav } from "components/AuthNav/AuthNav";
import { UserMenu } from "components/UserMenu/UserMenu";

export const HeaderNav = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
 
  return (
    <Header>
      {/* <Navigation /> */}
      {isLoggedIn ? <UserMenu /> : <AuthNav />}      
    </Header>
  );
};

