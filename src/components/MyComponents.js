import React from 'react';
import { Link } from 'react-router';
import { Message } from 'semantic-ui-react';

export const MyLink = ({toValue, label})=>
 <div className='ui compact menu'>
  <Link to={toValue} className='link item'>
    {label}
  </Link>
 </div>

 
export function MyInput ({input, meta:{ touched, error }, ...custom}) {
      const hasError = touched && error ;
     return(
       <div>
         <label >{input.name}</label>
         <div>
           <input {...input} />
           { hasError && <Message error header='Error' content={error}/> }          
         </div>
       </div>
     );
   }
export  function MyTextarea ({input, meta:{ touched, error }, ...custom}) {
      const hasError = touched && error ;
     return(      
         <div>
           <label >{input.name}</label>
           <div>
             <textarea {...input} placeholder='contente'/>
             {hasError && <span>{error}</span>}
           </div>
         </div>
     );
   }