import React, { ChangeEvent, useState } from 'react'

export const useForm = <T> (initialState : T) => { // <T> : T va a tomar el valor del tipado que se va a enviar.si la extencion es .tsx y no .ts no funciona

    const [formValues, setformValues] = useState(initialState)

    const handleChange = ({target} : ChangeEvent<HTMLInputElement>) =>{
        setformValues({
            ...formValues,
            [target.name] : target.value
        })
    }

    const reset = () => setformValues(initialState)

  return {
    formValues,
    handleChange,
    reset
  }
}



// formValue es la funcion