
import React, {useState, useEffect} from "react"
import { SupaBase } from "./CreateClient"

export default function App (){


  const [users , setUeser] = useState([]);

  console.log(users);
  

  useEffect(() =>{
    GetUsersDat()
  }, [])


// get the Data from The Table ("My_Users") in supabase
  async function GetUsersDat() {
    const {data} = await SupaBase
    .from("My_Users")
    .select("*");
    setUeser(data)
  }


  return (
    <>
    <h1>Muhammad</h1>
    <h1>user name is: {users.userEmail}</h1>
    </>
  )
}