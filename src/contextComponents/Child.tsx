import { useContext } from 'react';
import PandaContext from '../context/pandaContext';



export default function Child(): JSX.Element {
 const {panda, setPanda} = useContext(PandaContext);
 return <div>
   
   <input
    type="text"
    placeholder="panda name"
    value={panda}
    onChange={(e) => {
     setPanda(e.target.value);
    }}
   />
  Child Имя панды: {panda}</div>;
}