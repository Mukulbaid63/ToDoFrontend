import React from 'react';

/** item, index */

export const ListItem = (props)=> {
    const [value, setValue] = React.useState(props.item);
    return <div style={{display:'flex', flexDirection: 'row',border:'1px solid black',padding:'5px'}} key={props.item}>
        <input type="text" value={value} style={{border:'0px'}} onChange={(event)=>setValue(event.target.value)} />
        <button style={{margin:'2px'}} onClick={()=>{ 
            props.onUpdate(props.index, value);
        }}>Save changes</button>
        <button style={{margin:'2px'}} onClick={()=>{
            props.onDelete(props.index);
        }}>Delete</button>
    </div>
}