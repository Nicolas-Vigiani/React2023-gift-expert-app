import { useState } from "react";

//export const AddCategory = ({cargarCategorias}) =>  {
export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('One Punch'); //setea el estado por defecto en OnePunch, podria setearlo en ''

    const onInputChange = ({ target }) => { // desetructuro y saco solo el target del event que se envia en la linea 16, el event tiene una banda de atriubutos y uno es el target si quiero verlo usar el console log del event
        setInputValue(target.value); // del target solo muestro el value, que es el valor del input a medida que escribo
    }

    const onSubmit = (event) => {
        event.preventDefault(); //para evitar que se refreque el formulario constantemente
        if (inputValue.trim().length <= 1) return; // si lo que escribo en el input es menor o igual a1 que salga de la fucnion, es decir que nop agrege un nuevo items con espacio basio o busquedas de una sola letra
        //cargarCategorias(categories => [inputValue, ...categories]); //raiga las categorias que tiene en ese momento y agrege primero el imput value
        onNewCategory(inputValue.trim());
        setInputValue(''); // una vez que se agregue una nueva categoria, se borra lo que estaba en el input para que se vea el placeholder
    }

    return (
        <form onSubmit={(event) => onSubmit(event)}> {/* tambien se lo puede poner como onSubmit directamente y es lo recomendable */}
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange} // esto es lo mismo que poner dentro de las llaves (event) => onInputChange(event) // pero como puede verse enviar una funcion con un unico argumento es lo mismo que sacar los parametros y por eso es valido escribir unicamente el nombre de la funcion onInputChange 
            />
        </form>
    )
}
