import ShoppingBagIcon from "@mui/icons-material/ShoppingBag"
import AddIcon from "@mui/icons-material/Add"
import ViewInArIcon from "@mui/icons-material/ViewInAr"
import paths from "../../constantes/path"

const ListLinks = [
  {
    id: 1,
    label: "Pedidos",
    link: paths.Orders,
    icon: ShoppingBagIcon,
  },
  {
    id: 2,
    label: "Ver produtos",
    link: paths.Products,
    icon: ViewInArIcon,
  },
  {
    id: 3,
    label: "Adicionar produto",
    link: paths.NewProduct,
    icon: AddIcon,
  },
]

export default ListLinks
