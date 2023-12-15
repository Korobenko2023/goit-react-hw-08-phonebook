import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NaviLink = styled(NavLink)` 
  font-size: 24px;
  font-weight: 700;
  /* color: ${p => p.theme.colors.MediumBlue};  */
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus,
  &.active {
    color: ${p => p.theme.colors.Indigo};     
  }
`;
