import { useMediaQuery } from "react-responsive";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

import { MdClose } from "react-icons/md";
import { FiMenu, FiLogOut } from "react-icons/fi";

import { Container, Menu, Logo, Logout } from "./styles";
import { Search } from "../../components/Search";
import { Button } from "../../components/Button";
import { Fragment } from "react";

import logoMain from "../../assets/logo.svg";
import logoAdmin from "../../assets/logo-admin.svg";
import logoMobile from "../../assets/logo-mobile.svg";

export function Header({ isAdmin, isDisabled, isMenuOpen, setIsMenuOpen, setSearch }) {
  const desktopScreen = useMediaQuery({ minWidth: 1024 });
  const logo = isAdmin ? (desktopScreen ? logoAdmin : logoMobile) : logoMain;

  const { signOut } = useAuth();
  const navigate = useNavigate();

  function handleNew() {
    navigate("/newDish");
  }

  function handleSignOut() {
    navigate("/");
    signOut();
  }

  //alterna o estado do menu
  const handleToggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  //define com base no estado do menu o que será renderizado
  const renderMenuIcon = () => {
    return !isMenuOpen ? (
      <FiMenu className="fi-menu-icon" onClick={handleToggleMenu} />
    ) : (
      <Fragment>
        <MdClose size={"2.5rem"} onClick={handleToggleMenu} />
        <span>Menu</span>
      </Fragment>
    )
  };

  const renderLogo = () => {
    return (
      <Logo>
        <img src={logo} alt="Logo" />
      </Logo>
    );
  };

  const renderSearch = () => {
    return desktopScreen ? (
      <Search isDisabled={isDisabled} setSearch={setSearch} />
    ) : null;
  };

  const renderFavoritesButton = () => {
    return desktopScreen && !isAdmin ? (
      <button className="favorites">Favoritos</button>
    ) : null;
  };

  const renderNewDishButton = () => {
    return desktopScreen && isAdmin ? (
      <Button className="new" title="Novo prato" onClick={handleNew} />
    ) : null;
  };

  const renderOrdersButton = () => {
    return !isAdmin && (desktopScreen || !isMenuOpen) ? (
      <Button className="orders" title={"Pedidos"}
      isCustomer />
    ) : null;
  };

  const renderLogoutButton = () => {
    return desktopScreen ? (
      <Logout onClick={handleSignOut}>
        <FiLogOut size={"3rem"} />
      </Logout>
    ) : null;
  };

  return (
    <Container>
      {!desktopScreen && <Menu>{renderMenuIcon()}</Menu>}

      {(desktopScreen || !isMenuOpen) && (
        <Fragment>
          {renderLogo()}
          {renderSearch()}
          {renderFavoritesButton()}
          {renderNewDishButton()}
          {renderOrdersButton()}
          {renderLogoutButton()}
        </Fragment>
      )}
    </Container>
  );
}