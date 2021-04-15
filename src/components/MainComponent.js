import React, { useEffect, useState } from "react";
import { List } from "./List";

const mainContainerStyle = {
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
};
const MainComponent = () => {
  const [todoItem, setToDoItem] = useState("");
  const [itemList, setItemList] = useState([]);
  const [startApiCall, setStartApiCall] = useState(false);
  const [startDeleteCall, setStartDeleteCall] = useState(false);
  const [startUpdateCall, setStartUpdateCall] = useState(false);
  const [makeGetRequest, setMakeGetRequest] = useState(true);
  const [deleted, setdeleted] = useState([]);

  useEffect(() => {
    const apiCall = async () => {
      const results = await fetch("https://karyasuchi.herokuapp.com/");
      const items = await results.json();
      console.log(items[0]);
      setItemList(items[0]);
      setdeleted(items[1]);

      setMakeGetRequest(false);
    };
    apiCall();
  }, []);
  const deleteApiCall = async (index) => {
    var requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
    };
    setStartDeleteCall(true);
    fetch(`https://karyasuchi.herokuapp.com/todo/${index}`, requestOptions)
        .then(response => response.json())
        .then(result => {
            setItemList(result[0])
            setdeleted(result[1])
            setStartDeleteCall(false);
        })
        .catch(error => console.log('error', error))
}

useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({ "item": todoItem });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    if (startApiCall) {
        fetch("https://karyasuchi.herokuapp.com/todo", requestOptions)
            .then(response => response.json())
            .then(result => {
                setItemList(result)
                setStartApiCall(false);
                setToDoItem('');
            })
            .catch(error => console.log('error', error))
    }

}, [startApiCall, todoItem]);

  
const updateApiCall = async (index, item) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({ "item": item });

    var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    setStartUpdateCall(true);
    fetch(`https://karyasuchi.herokuapp.com/todo/${index}`, requestOptions)
        .then(response => response.json())
        .then(result => {
            setItemList(result);
            setStartUpdateCall(false);
        })
        .catch(error => console.log('error', error))
}
  return (
    <div>
         <div style={mainContainerStyle}>
            <input type="text" onChange={(event) => setToDoItem(event.target.value)} value={todoItem} />
            <button onClick={() => { setStartApiCall(true); }}>+</button>
        </div>
      <div style={{ display: "flex" }}>

        <div>
        <h2>TASKS TO DO &nbsp;&nbsp;</h2>

          {makeGetRequest ? (
            "LOADING..."
          ) : (
            <List
              items={itemList}
              onDelete={deleteApiCall}
              onUpdate={updateApiCall}
            />
          )}
        </div>
        <div>
            <h2>DELETED TASKS</h2>
          {makeGetRequest ? (
            "LOADING..."
          ) : (
            deleted.map((item,index)=>(
                <p>{item}</p>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
