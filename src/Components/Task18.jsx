import { useState } from "react";

const Task18=()=>{
    const[a,setA]=useState("");
    const[b,setB]=useState("");
    const[sum,setSum]=useState("");
    const cal=(e)=>{
        e.preventDefault();
        setSum(parseInt(a)+parseInt(b));
    }
    return(

        <>
                 <form onSubmit={cal}>
                    <label> A:</label>
                    <input type="number"
                    onChange={(e)=>setA(e.target.value)} 
                    value={a}/>
                    <label> B:</label>
                    <input type="number"
                    onChange={(e)=>setB(e.target.value)} 
                    value={b}/>
                    <input type="submit"  value="Add"/>

                 </form>

                 <p> Sum is {sum}</p>
        </>
    )
}
export default Task18;