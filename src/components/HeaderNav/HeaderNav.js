import { useSelector } from "react-redux";
import { Header } from "./HeaderNav.styled";
import { selectIsLoggedIn } from "redux/auth/selectors";
import { AuthNav } from "components/AuthNav/AuthNav";
import { UserMenu } from "components/UserMenu/UserMenu";
import { Navigation } from "components/Navigation/Navigation";
import { Butterfly } from "components/Butterfly/Butterfly";

export const HeaderNav = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
 
  return (
    <Header>
      <Butterfly />
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}      
    </Header>
  );
};



