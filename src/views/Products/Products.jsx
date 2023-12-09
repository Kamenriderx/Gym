import { HiOutlineSearch } from "react-icons/hi";
import Row from "./components/Row";
import Pagination from "../../components/Pagination";
import { useEffect, useState } from "react";
import { httpRequests } from "../../utils/httpRequest";
import Modal from "./components/Modal";
import { FaDownload } from "react-icons/fa";

function Products() {
  const formatOptions = { year: "numeric", month: "numeric", day: "numeric" };
  const formatDate = new Intl.DateTimeFormat("es-ES", formatOptions);

  const [pagination, setPagination] = useState({
    page: 0,
    pages: 0,
  });
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    httpRequests()["get"]("http://localhost:3000/mastergym/product/getProducts", {
        headers: { authorization: localStorage.getItem("token") },
      })
      .then((res) => {
        if (res.data.data) {
          const subArray = [];
          for (var i = 0; i < 5; i++) {
            subArray.push(res.data.data[i]);
          }
          setProducts(subArray);
          setAllProducts(res.data.data);
          setPagination({
            pages: Math.ceil(res.data.data.length / 5),
            page: 0,
          });
          console.log(subArray);
        }
      });
  }, []);

  useEffect(() => {
    console.log(allProducts);
    const subArray = [];
    for (var i = pagination.page * 5; i < (pagination.page + 1) * 5; i++) {
      if (allProducts[i]) {
        subArray.push(allProducts[i]);
      }
    }
    setProducts(subArray);
  }, [pagination]);

  const generateCSV = () => {
    const header = [
      "Nombre",
      "Estado",
      "Descripcion",
      "Precio",
      "Fecha",
      "ID",
      "Imagen",
    ];
    const data = allProducts.map(
      (product) =>
        `\n${product.nom_producto},${product.estado},${product.des_producto},${product.precio_producto},${formatDate.format(new Date(product.fecha_registro))},${
          product.cod_producto
        },${product.imagen_producto}`
    );
    const csvContent =
      "data:text/csv;charset=utf-8," +
      `${header[0]},${header[1]},${
        header[2]
      },${header[3]},${header[4]},${
        header[5]
      },${header[6]}` +
      `${data}`;

    const downloadLink = document.createElement("a");
    downloadLink.href = encodeURI(csvContent);
    downloadLink.target = "_blank";
    downloadLink.download = "Productos.csv";

    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="w-full h-full p-7">
      {showModal && <Modal setShowModal={setShowModal}></Modal>}
      <div className="box-border w-full h-full p-8 bg-white shadow-lg rounded-3xl">
        <div className="flex pt-2 h-1/6">
          <div className="w-1/4 ">
            <div
              onClick={() => setShowModal(true)}
              className="flex items-center justify-center w-3/4 px-3 text-white rounded-full cursor-pointer bg-slate-900 h-1/2 hover:bg-slate-800 active:bg-slate-950"
            >
              <div className="mr-2 text-xl font-bold">+</div>
              <div className="text-xl font-bold">Añadir Producto</div>
            </div>
            <button
              onClick={generateCSV}
              className="bg-lime-500 text-white w-3/4 px-3 rounded-full  h-1/2  mt-3 font-bold text-xl hover:bg-lime-600 flex justify-center items-center"
            >
              <div className="mr-2">

               <FaDownload/>
              </div>
              <div>
               Descargar CSV

              </div>
            </button>
          </div>
          <div className="w-2/4">
            <div className="flex justify-center w-full h-1/2">
              <button className="flex items-center justify-center w-16 bg-gray-100 rounded-l-full active:bg-gray-300">
                <HiOutlineSearch />
              </button>
              <input
                className="w-3/4 bg-gray-100 rounded-r-full outline-none"
                type="text"
                placeholder="Buscar"
              />
            </div>
          </div>
          <div className="flex justify-end w-1/4">
            <select className="p-3 font-bold border rounded-full outline-none cursor-pointer h-1/2 hover:shadow-md text-slate-500">
              <option className="cursor-pointer ">Ordenar por fecha</option>
              <option className="cursor-pointer ">Articulos por comprar</option>
            </select>
          </div>
        </div>
        <div className="h-4/6">
          <Row
            name={"Nombre"}
            state={"Estado"}
            category={"Categoria"}
            price={"Precio"}
            date={"Fecha"}
            id={"ID"}
            weight={"Peso"}
            header={true}
          />
          {products.map((product, index) => (
            <Row
              key={index}
              name={product.nom_producto}
              state={product.estado}
              category={"Proteina"}
              price={product.precio_producto}
              date={formatDate.format(new Date(product.fecha_registro))}
              id={product.cod_producto}
              weight={"5 LB"}
              header={false}
            />
          ))}
        </div>
        <div className=" h-1/6">
          <Pagination pagination={pagination} setPagination={setPagination} />
        </div>
      </div>
    </div>
  );
}

export default Products;
