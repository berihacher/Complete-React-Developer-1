import React from 'react';
import './card-list.styles.css'
import {Card} from '../card/card.component'

// function SearchBox(){
//     return 
// }
export const CardList = props =>(
<div>{props.users.map((u,index)=>{return <Card user={u} key={u.id}/>})}</div>)