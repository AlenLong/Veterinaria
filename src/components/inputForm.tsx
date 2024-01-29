import { ChangeEvent } from "react";

type InputType = 'text' |  'number' | 'password' | 'email' | 'date';

export interface inputFormProps {
    label : string;
    name : string;
    type : string;
    placeholder? : string;
    className? : string;
    error? : string;
    onChange : (e : ChangeEvent<HTMLInputElement>) => void;
}
export const InputForm = ({
    label,
    type,
    placeholder,
    className,
    name,
    error,
    onChange
}: inputFormProps) => {
  return (
    <div className={`mb-5 ${className}`}>
        <label 
        htmlFor={name}
        className="block text-gray-700 appearance-bold"
        >
            {label}
        </label>
            <input 
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                className={`border w-full p-2 mt-2 placeholder-gray-225 ${error} ? 'border-red-700' : 'border-gray' `}
                onChange={onChange}
            />
            <p className="text-sm text-red-700 ms-2">{error}</p>
    </div>
  )
}
