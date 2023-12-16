import { useSelector } from "react-redux";
import { Header } from "./HeaderNav.styled";
import { selectIsLoggedIn } from "redux/auth/selectors";
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


// import { useSelector } from "react-redux";
// import { selectIsLoggedIn } from "redux/auth/selectors";



// export const Navigation = () => {
//    const isLoggedIn = useSelector(selectIsLoggedIn);

//   return (
//     <Nav>
//       <NaviLink to="/">Home</NaviLink>
//       {isLoggedIn && (
//         <NaviLink to="/contacts">Contacts</NaviLink>
//       )}
//     </Nav>
//   );
// };


