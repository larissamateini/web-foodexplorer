import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

import { Container } from "./styles";
import { Search } from "../Search";
import { ButtonText } from "../ButtonText";

import { MdClose } from "react-icons/md";

export function Menu({ isAdmin, isMenuOpen, setIsMenuOpen, setSearch, isDisabled }) {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  function handleNew() {
    navigate("/newDish");
  }

  function handleSignOut() {
    navigate("/");
    signOut();
  }

  const handleToggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <Container $isMenuOpen={isMenuOpen}>

      <header>
        <MdClose size={"3.2rem"} onClick={handleToggleMenu} />
        <span>Menu</span>
      </header>

      <main>
        <Search 
          isDisabled={isDisabled} 
          setSearch={setSearch} 
        />

        {
          isAdmin ? (
            <ButtonText onClick={handleNew}>
              Novo prato
            </ButtonText>
          ) : null
        }

        {
          !isAdmin ? (
            <ButtonText>
              Favoritos
            </ButtonText>
          ) : null
        }

        <ButtonText onClick={handleSignOut}>
          Sair
        </ButtonText>
      </main>
    </Container>
  );
}