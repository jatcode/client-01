import React from 'react';
import { Link } from 'react-router';

export const MyLink = ({toValue, label})=>
 <div className='ui compact menu'>
  <Link to={toValue} className='link item'>
    {label}
  </Link>
 </div>
