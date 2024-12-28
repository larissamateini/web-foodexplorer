import { FiMinus, FiPlus } from "react-icons/fi";
import { Container } from "./styles";

export function Counter({ number, setNumber }) {
  const handleChange = (amount) => {
    setNumber((prev) => Math.max(1, prev + amount));
  };

  return (
    <Container>
      <button onClick={() => handleChange(-1)}>
        <FiMinus />
      </button>

      <span>{number < 10 ? `0${number}` : number}</span>

      <button onClick={() => handleChange(1)}>
        <FiPlus />
      </button>
    </Container>
  );
}

