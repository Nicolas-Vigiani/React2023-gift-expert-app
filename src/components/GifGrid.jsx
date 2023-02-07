import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs(category); // todo lo de abajo se uso en el custom hooks para llevar la logica alli

  /* const [images, setImages] = useState([]);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
  }

  useEffect(() => {
    getImages();
  }, []) // el useEffect dispara un efecto secundario cuando se lo llama, se manda primero una funcion y despues el parametro que al cambiar quiero que dispare este efecto, cuando se desea que se dispare una unica vez al llamar este componente, se usa [] los parentesis vacios. 

 */
  return (
    <>
      <h3>{category}</h3>
      {
        //isLoading ? (<h2>cargando...</h2>) : null //el null no s renderiza en react sin embargo es mejor la manera de abajo usando un and logico
        isLoading && (<h2>cargando...</h2>)
      }



      <div className="card-grid">
        {
          images.map(img => (
            <GifItem
              key={img.id}
              {...img} //esta es una manera de mandar todas las props a mi componente. Es decir esparso las propiedades que tenmgo en este caso img.id, img.title, img.url // y puedo desetructurar en el componente y usar lo que qyo quiero
            />
          ))
        }
      </div>
    </>
  )
}
