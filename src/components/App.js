
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [rows,setRows] = useState([1]);
  const [rt,setRt] = useState({0:{
    name:'',age:''
  }});
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
        {rows.map((_,i)=><Row key={i} ind ={i} setRt={setRt} rt={rt} setRows={setRows} />)}
        <div>
        <button onClick={()=>{
          setRt((prev)=>({...prev,[rows.length]:{
            name:'',age:''
          }}))
          setRows(prev=>[...prev,1])
        }}>Add More..</button>
        <button onClick={()=>console.log(rt)}>Submit</button>
        </div>
        <h3>After clicking submit check console for data</h3>
    </div>
  )
}
const Row =({ind,setRt,rt,setRows})=>{
  return (
    <div>
      <input type="text"  placeholder="Name" name="name" value={rt[ind].name} onChange={(e)=>{
        const {value} = e.target;
        setRt((prev)=>{
          return {
            ...prev,
            [ind]:{
              ...prev[ind],
              name:value
            }
          }
        })
      }}/>
      <input type="text"  placeholder="Age" name="age" onChange={(e)=>{
        const {value} = e.target;
        setRt((prev)=>{
          return {
            ...prev,
            [ind]:{
              ...prev[ind],
              age:value
            }
          }
        })
      }}/>
      <button onClick={()=>setRows(prev=>{
        return prev.filter((_,i)=>ind!==i);
      })}>remove</button>
    </div>
  );
}
export default App
