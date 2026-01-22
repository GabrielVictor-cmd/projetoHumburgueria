import React, { useEffect, useState } from "react"
import { Container, Label, Input, ButtonStyles, LabelUpload, ConteinerInput } from "./styles"
import api from "../../../services/api"
import ReactSelect from "react-select"
import { useForm, Controller } from "react-hook-form"
import UploadIcon from "@mui/icons-material/Upload"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import ErrorMessage from "../../../components/ErrorMessege"
import { toast } from "react-toastify"
import { useNavigate, useLocation } from "react-router-dom"

function EditProduct() {
  const [fileName, setFileName] = useState(null)
  const [categories, setCategories] = useState([])
  const navigate = useNavigate()
  const location = useLocation()
  const product = location?.state || {}

  const schema = yup.object().shape({
    name: yup.string().required("Digite o nome do produto"),
    price: yup
      .number()
      .transform((value, originalValue) =>
        originalValue === "" ? undefined : value
      )
      .required("Digite o preço do produto"),
    category_id: yup.object().required("Insira a categoria do produto"),
    offer: yup.boolean(),
  })

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = async (data) => {
    const productDataFormData = new FormData()

    productDataFormData.append("name", data.name)
    productDataFormData.append("price", data.price)
    productDataFormData.append("category_id", data.category_id.id)
    productDataFormData.append("file", data.file[0])
    productDataFormData.append("offer", data.offer)

    try {
      await toast.promise(
        api.put(`products/${product?.id}`, productDataFormData),
        {
          pending: "Editando produto...",
          success: "Produto editado!",
          error: "Falha ao editar produto",
        }
      )

      setTimeout(() => {
        navigate("/ver-produtos")
      }, 1500)
    } catch (error) {
      console.error("Erro ao enviar produto:", error)
    }
  }

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get("categories")

      setCategories(data)
    }

    loadCategories()
  }, [])

  return (
    <Container>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label>Nome do produto</Label>
          <Input
            type="text"
            {...register("name")}
            defaultValue={product?.name}
          />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
        </div>

        <div>
          <Label>Preço do produto</Label>
          <Input
            type="number"
            {...register("price")}
            defaultValue={product?.price}
          />
          <ErrorMessage>{errors.price?.message}</ErrorMessage>
        </div>

        <div>
          <LabelUpload style={{ color: "white" }}>
            {fileName || (
              <>
                <UploadIcon />
                Upload da imagem do produto
              </>
            )}
            <input
              type="file"
              accept="image/png, image/jpeg"
              {...register("file")}
              onChange={(value) => {
                setFileName(value.target.files[0]?.name)
              }}
            />
          </LabelUpload>
          <ErrorMessage>{errors.file?.message}</ErrorMessage>
        </div>

        <div>
          <Controller
            name="category_id"
            control={control}
            defaultValue={product?.category}
            render={({ field }) => {
              return (
                <ReactSelect
                  {...field}
                  options={categories}
                  getOptionLabel={(cat) => cat.name}
                  getOptionValue={(cat) => cat.id}
                  placeholder="Selecione uma categoria"
                  defaultValue={product?.category}
                />
              )
            }}
          ></Controller>
          <ErrorMessage>{errors.category_id?.message}</ErrorMessage>
        </div>

        <ConteinerInput>
          <input type="checkbox" {...register("offer")} defaultChecked={product.offer} />
          <Label>Produto em oferta?</Label>
        </ConteinerInput>
      
        <ButtonStyles>Editar produto</ButtonStyles>
      </form>
    </Container>
  )
}

export default EditProduct
