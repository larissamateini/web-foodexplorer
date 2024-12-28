import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';

import { BiPencil } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { RxCaretRight } from "react-icons/rx";

import theme from "../../styles/theme"
import { Container, Title, Order } from "./styles";
import { Counter } from '../../components/Counter';
import { Button } from "../../components/Button";

export function Food({ data, $isAdmin, handleDetails, ...rest }) {
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const navigate = useNavigate();

  const [number, setNumber] = useState(1);

  function handleEdit() {
    navigate(`/edit/${data.id}`);
  }

  const [isFavorite, setIsFavorite] = useState(false);

  function toggleFavorite() {
    setIsFavorite(prev => !prev);
  }

  return (
    <Container {...rest} $isAdmin={$isAdmin}>
      {
        $isAdmin ? 
        ( <BiPencil size={"2.4rem"} onClick={handleEdit} /> ) 
        :
        (
          <FiHeart
            onClick={toggleFavorite}
            size={"2.4rem"}
            fill={ isFavorite ? theme.COLORS.TINTS_TOMATO_300 : undefined}
            color={ isFavorite ? theme.COLORS.TINTS_TOMATO_300 : undefined}
          />
        )
      }

      <img 
        src={`${api.defaults.baseURL}files/${data.dish_image}`} 
        alt="Imagem do prato." 
        onClick={() => handleDetails(data.id)} 
      />
      
      <Title>
        <h2>{data.dish_name}</h2>
        <RxCaretRight 
          size={isDesktop ? "2.4rem" : "1.4rem"} 
          onClick={() => handleDetails(data.id)} 
        />
      </Title>
      
      {
        isDesktop && 
        <p>{data.description}</p>
      }
      
      <span>
        R$ {data.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
      </span>

      {
        !$isAdmin && 
        <Order>
          <Counter number={number} setNumber={setNumber} />
          <Button title="incluir"/>
        </Order>
      }
    </Container>
  );
}