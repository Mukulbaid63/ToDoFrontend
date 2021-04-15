import React from 'react';

/** item, index */

export const ListItem = (props)=> {
    const [value, setValue] = React.useState(props.item);
    return <div style={{display:'flex', flexDirection: 'row'}} key={props.item}>
        <input type="text" value={value} onChange={(event)=>setValue(event.target.value)} />
        <button onClick={()=>{ 
            props.onUpdate(props.index, value);
        }}>Save changes</button>
        <button onClick={()=>{
            props.onDelete(props.index);
        }}>Delete</button>
    </div>
}