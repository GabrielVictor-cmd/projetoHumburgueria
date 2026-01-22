import React from "react"
import Sing_up from "../../assets/Sing_up.svg"
import Logo from "../../assets/Logo.svg"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from "yup"
import apiBurgaoHot from "../../services/api"
import Button from "../../components/Button"
import { toast } from "react-toastify"
import { Link } from "react-router-dom"
import ErroMessage from "../../components/ErrorMessege"


import {
  Container,
  ConteinerItens,
  Label,
  Input,
  SingInLink,
  RegisterImage,
  Img,
} from "./styles"
// Removed server-side import of 'express' — it shouldn't be used in frontend code

function Register() {
  const schema = Yup.object().shape({
    name: Yup.string().required("Nome obrigatório"),
    email: Yup.string()
      .email("Digite um email válido por favor")
      .required("Email obrigatório"),
    password: Yup.string()
      .required("Senha obrigatória")
      .min(6, "A senha deve ter no mínimo 6 caracteres"),
    confirmPassword: Yup.string()
      .required("As senhas devem ser iguais")
      .oneOf([Yup.ref("password")], "As senhas devem ser iguais"),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = async (clientData) => {
    try {
      const res = await apiBurgaoHot.post(
        "/users",
        {
          name: clientData.name,
          email: clientData.email,
          password: clientData.password,
        },
        { validateStatus: () => true }
      )

      const { status, data } = res

      if (status === 200 || status === 201) {
        toast.success("Conta criada com sucesso!")
      } else if (status === 409) {
        toast.error("Erro ao criar conta. Email já cadastrado")
      } else {
        throw new Error()
      }

      console.log("CONTA CRIADA:", data)
    } catch (err) {
      toast.error("Lamento, houve erro no sistema. Tente novamente mais tarde.")

      console.log("STATUS:", err.response?.status)
      console.log("BACKEND DISSE:", err.response?.data)
    }
  }

  return (
    <Container>
      <RegisterImage src={Sing_up} alt="Imagem de um hamburguer" />
      <ConteinerItens>
        <Img src={Logo} alt="Logo" />
        <h1> Cadastro </h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label error={errors.name?.message}>Nome </Label>
          <Input
            type="text"
            {...register("name")}
            error={errors.name?.message}
          />
          <ErroMessage>{errors.name?.message}</ErroMessage>

          <Label error={errors.email?.message}>Email </Label>
          <Input
            type="email"
            {...register("email")}
            error={errors.email?.message}
          />
          <ErroMessage>{errors.email?.message}</ErroMessage>

          <Label error={errors.password?.message}>Senha </Label>
          <Input
            type="password"
            {...register("password")}
            error={errors.password?.message}
          />
          <ErroMessage>{errors.password?.message}</ErroMessage>

          <Label error={errors.confirmPassword?.message}>
            Confirmar senha{" "}
          </Label>
          <Input
            type="password"
            {...register("confirmPassword")}
            error={errors.confirmPassword?.message}
          />
          <ErroMessage>{errors.confirmPassword?.message}</ErroMessage>

          <Button type="submit"> Criar </Button>
        </form>

        <SingInLink>
          Já possui conta?{" "}
          <Link style={{ color: "aqua" }} to="/login">
            Entrar
          </Link>
        </SingInLink>
      </ConteinerItens>
    </Container>
  )
}

export default Register
