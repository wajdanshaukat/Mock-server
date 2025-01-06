import React, { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    setData(data);
  };
  console.log(data);

  return (
    <div>
      <h1>API Data</h1>
      <ul>{data && data.map((item) => <li key={item.id}>{item.name}</li>)}</ul>
    </div>
  );
};

export default App;
