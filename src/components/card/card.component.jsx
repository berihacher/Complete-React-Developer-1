import React from 'react';
import './card.styles.css'

// function SearchBox(){
//     return 
// }
export const Card = props =>(
<div ><img src={`https://robohash.org/${props.user.id}`} alt="" width='100'/>{props.user.name}</div>)