import React from 'react';
import { ListItem } from './ListItem';

export const List = (props) => {
    return props.items.map((ele, index) => <ListItem item={ele} onDelete={props.onDelete} onUpdate={props.onUpdate} index={index} key={ele}/>);
}