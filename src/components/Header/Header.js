import React from "react";
import styled from "styled-components/macro";

import { QUERIES, WEIGHTS } from "../../constants";
import Logo from "../Logo";
import Icon from "../Icon";
import UnstyledButton from "../UnstyledButton";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import VisuallyHidden from "../VisuallyHidden";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <DesktopNav>
          <NavLink href="/sale">
            <NavLinkTextNormal>Sale</NavLinkTextNormal>
            <NavLinkTextHover>Sale</NavLinkTextHover>
          </NavLink>
          <NavLink href="/new">
            <NavLinkTextNormal>New&nbsp;Releases</NavLinkTextNormal>
            <NavLinkTextHover>New&nbsp;Releases</NavLinkTextHover>
          </NavLink>
          <NavLink href="/men">
            <NavLinkTextNormal>Men</NavLinkTextNormal>
            <NavLinkTextHover>Men</NavLinkTextHover>
          </NavLink>
          <NavLink href="/women">
            <NavLinkTextNormal>Women</NavLinkTextNormal>
            <NavLinkTextHover>Women</NavLinkTextHover>
          </NavLink>
          <NavLink href="/kids">
            <NavLinkTextNormal>Kids</NavLinkTextNormal>
            <NavLinkTextHover>Kids</NavLinkTextHover>
          </NavLink>
          <NavLink href="/collections">
            <NavLinkTextNormal>Collections</NavLinkTextNormal>
            <NavLinkTextHover>Collections</NavLinkTextHover>
          </NavLink>
        </DesktopNav>
        <MobileActions>
          <ShoppingBagButton>
            <Icon id="shopping-bag" />
            <VisuallyHidden>Open cart</VisuallyHidden>
          </ShoppingBagButton>
          <UnstyledButton>
            <Icon id="search" />
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" />
            <VisuallyHidden>Open menu</VisuallyHidden>
          </UnstyledButton>
        </MobileActions>
        <Filler />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow: auto;

  @media ${QUERIES.tabletAndSmaller} {
    justify-content: space-between;
    align-items: center;
    border-top: 4px solid var(--color-gray-900);
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(1rem, 9.2vw - 4.5rem, 3.5rem);
  margin: 0px 48px;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const MobileActions = styled.div`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    gap: 32px;
    display: flex;
  }

  @media ${QUERIES.phoneAndSmaller} {
    gap: 16px;
  }
`;

const LogoWrapper = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    flex: revert;
  }
`;

const ShoppingBagButton = styled(UnstyledButton)`
  transform: translateX(-2px);
`;

const Filler = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  position: relative;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const NavLinkTextNormal = styled.span`
  display: block;
  transition: transform 150ms;

  @media (prefers-reduced-motion: no-preference) {
    transform-origin: top center;
  }

  ${NavLink}:hover > & {
    transform: scaleY(0);
  }
`;

const NavLinkTextHover = styled.span`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  font-weight: 700;
  transition: transform 150ms;

  @media (prefers-reduced-motion: no-preference) {
    transform-origin: bottom center;
  }

  transform: scaleY(0);

  ${NavLink}:hover > & {
    transform: scaleY(100%);
  }
`;

export default Header;
