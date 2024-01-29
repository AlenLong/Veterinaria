import { FormValues } from './formulario'

export const ListadoPacientes = ({pacientes} : {pacientes : FormValues[]}) => {
  return (
    <>
    <div>ListadoPacientes </div>
    {pacientes.map(paciente => (
      <p>{paciente.mascota}</p>
    ))}
    </>
    )
}
