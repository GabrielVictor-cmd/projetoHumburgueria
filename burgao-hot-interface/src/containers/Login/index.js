import React from "react"
import Login_img from "../../assets/Login_img.svg"
import Logo from "../../assets/Logo.svg"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from "yup"
import apiBurgaoHot from "../../services/api"
import Button from "../../components/Button"
import { toast } from "react-toastify"
import { useUser } from "../../hooks/UserContext"
import { Link, useNavigate } from "react-router-dom"
import ErroMessage from "../../components/ErrorMessege"

import {
  Container,
  ConteinerItens,
  Label,
  Input,
  SingInLink,
  LoginImage,
  Img,
} from "./styles"

function Login() {
  const history = useNavigate()
  const { putUserData, userData } = useUser()
  console.log(userData)

  const schema = Yup.object().shape({
    email: Yup.string()
      .email("Digite um email válido por favor")
      .required("Email obrigatório"),
    password: Yup.string()
      .required("Senha obrigatória")
      .min(6, "A senha deve ter no mínimo 6 caracteres"),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = async clientData => {
    try {
      const { data } = await toast.promise(
        apiBurgaoHot.post("sessions", {
          email: clientData.email,
          password: clientData.password,
        }),
        {
          pending: "Verificando seus dados...",
          success: "Login realizado com sucesso!",
          error: "Erro ao fazer login. Verifique seus dados!",
        }
      )

      putUserData(data)
      console.log(data)

      setTimeout(() => {
        if(data.admin){
          history("/pedidos")
        } else {
          history("/home")
        }
      }, 1000)

      console.log("LOGIN OK:", data)
    } catch (err) {
      console.log("STATUS:", err.response?.status)
      console.log("BACKEND DISSE:", err.response?.data)
    }
  }

  return (
    <Container>
      <LoginImage src={Login_img} alt="Imagem de um hamburguer" />
      <ConteinerItens>
        <Img src={Logo} alt="Logo" />
        <h1> Login </h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label>Email </Label>
          <Input
            type="email"
            {...register("email")}
            error={errors.email?.message}
          />
          <ErroMessage>{errors.email?.message}</ErroMessage>

          <Label>Senha </Label>
          <Input
            type="password"
            {...register("password")}
            error={errors.password?.message}
          />
          <ErroMessage>{errors.password?.message}</ErroMessage>

          <Button type="submit"> Entrar </Button>
        </form>

        <SingInLink>
          Não possui conta?{" "}
          <Link style={{ color: "aqua" }} to="/cadastro">
            Criar conta
          </Link>
        </SingInLink>
      </ConteinerItens>
    </Container>
  )
}

export default Login