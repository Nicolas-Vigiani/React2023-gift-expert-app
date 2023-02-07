//este es un custom hook
// un hook no es mas que una funcion que regresa algo, es decir en ete caso un objeto por eso las llaves despues del return

import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";



export const useFetchGifs = (category) => { //esta no es una props como lo son e los funcional components simplemete es um arghumento de la funcion, puede ser un objeto lo que sea, en este caso le madno category

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(() => {
        getImages();
    }, []) // el useEffect dispara un efecto secundario cuando se lo llama, se manda primero una funcion y despues el parametro que al cambiar quiero que dispare este efecto, cuando se desea que se dispare una unica vez al llamar este componente, se usa [] los parentesis vacios. 



    return {
        images, //esto puede escribirse con un solo images, ya que cuando retorno un atributo con el mismo nombre que el objeto nse puede en lugares de pner images:images, solo poner images
        isLoading // mismo caso que ariba en lugar de poner isLoading : isLoading solo se pone un unico isLoading
    }
}
