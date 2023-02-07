
import { useState } from 'react'
import { AddCategory,GifGrid } from './components'; // esto lo puedo hacer gracias al archivo barril "index.js en la carpeta compnents"


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']); //siempre debemos inicializarlo , sino toma un undeifined, y al inicializarlo se lo debe hacer con un arreglo []. en este caso por defect categories es dragon ball z

    const onAddCategory = (newCategory) => {
        /* setCategories([...categories,'valorant']);  aqui se agrega valorant al final del array , en nuestro caso necesitamos que sea al reves por eso lo de la  linea 10*/
        if (categories.includes(newCategory)) return; // si el arreglo de categorias ya incluye la nueva categoria que salga de la fucnion antes de agregar esa categoria
        setCategories([newCategory, ...categories]);
        console.log(newCategory);
    }

    return (
        <>

            <h1>GifExpertApp</h1>


            <AddCategory
                //cargarCategorias = {setCategories}
                onNewCategory={onAddCategory}
            /> {/* en este caso cargarCategorias es una prop , las props pueden ser cualquier cosa string, boolean o hasta fuunciones */}



            {
                categories.map(category => (
                    <GifGrid key={category} category={category} />
                ))
            }



        </>
    )
}
