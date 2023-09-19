// import { useState } from "react";

// export const useForm = (initialState: string) => {
//   const [query, setQuery] = useState<string>(initialState);

//   const handleInputChange = ({
//     target,
//   }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = target;
//     setQuery([name]: value);
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//   };

//   return {
//     query,
//     handleInputChange,
//     handleSubmit,
//   };
// };
