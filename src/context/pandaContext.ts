import { createContext } from "react";

interface ContextValue {
    panda: string;
    setPanda: React.Dispatch<React.SetStateAction<string>>;
   }
   
   const PandaContext = createContext<ContextValue>({
    panda: 'Dafault panda name',
    setPanda: () =>{},
   });
// createContext принимает начальное сосотояние возвращает контекст


export default PandaContext;

//что бы воспользоваться контекстом требуется: 
//1. созадть контекст createContext
//2. предоставить его   provider
//3. использовать его   useContext

