import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Navbar = () => (
  <NavbarContainer>
    <Logo>Property Management</Logo>
    <div>
      {/* Add navigation links here */}
    </div>
  </NavbarContainer>
);

export default Navbar;
