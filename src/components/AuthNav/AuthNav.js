import { NaviLink } from "./AuthNav.styled";

export const AuthNav = () => {
  return (
    <div>
      <NaviLink to="/register">Register</NaviLink>
      <NaviLink to="/login">Log In</NaviLink>
    </div>
  );
};
