import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { api } from "../../services/api";

import { Container, Form, Logo } from "./styles";
import { InputField } from '../../components/InputField';
import { Input } from '../../components/Input';
import { Button } from "../../components/Button";
import logoMain from "../../assets/logo.svg";

export function SignUp() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // Função para manipular alterações nos campos do formulário
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  // Validação e envio do formulário
  async function handleSignUp() {
    const { name, email, password } = formData;

    if (!name || !email || !password) {
      return alert("Por favor, preencha todos os campos!");
    }

    if (password.length < 6) {
      return alert("A senha deve ter no mínimo 6 caracteres!");
    }

    setLoading(true);

    try {
      await api.post("/users", { name, email, password });
      alert("Usuário cadastrado com sucesso!");
      navigate(-1);
    } catch (error) {
      console.error('Erro no cadastro:', error);
      const errorMessage = error.response ? error.response.data.message : "Não foi possível cadastrar usuário.";
      alert(errorMessage);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container>
      <Logo>
        <img src={logoMain} alt="Logo Food Explorer" />
      </Logo>

      <Form>
        <h2>Crie sua conta</h2>

        <InputField title="Nome">
          <Input 
            type="text"
            name="name"
            placeholder="Maria da Silva" 
            value={formData.name}
            onChange={handleChange}
          />
        </InputField>

        <InputField title="Email">
          <Input 
            type="text"
            name="email"
            placeholder="exemplo@exemplo.com.br" 
            value={formData.email}
            onChange={handleChange}
          />
        </InputField>

        <InputField title="Senha">
          <Input 
            type="password"
            name="password"
            placeholder="No mínimo 6 caracteres" 
            value={formData.password}
            onChange={handleChange}
          />
        </InputField>

        <Button 
          title="Criar conta" 
          onClick={handleSignUp} 
          loading={loading} 
        />

        <Link to="/">
          Já tenho uma conta
        </Link>
      </Form>
    </Container>
  );
}
