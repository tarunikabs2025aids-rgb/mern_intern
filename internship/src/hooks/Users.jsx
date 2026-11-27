   import { useEffect, useState } from "react"
import axios from "axios"
import {Table,TableHeader,TableRow,TableBody,TableCell, TableHead} from '@/components/ui/table'
const Users = () => {
    const [users,setUsers]=useState([])
    const addUser=async()=>{
      const response = await axios.post(
        'https://jsonplaceholder.typicode.com/users',
        {
          name:'Test',
          email:"test@gmail.com"
        }
      )
      console.log(response.data);
      
    }
    const deleteUser=async()=>{
      await axios.delete(
        'https://jsonplaceholder.typicode.com/users/11'
      )
      console.log("user deleted");
      
    }
    
    useEffect(()=>{ 
        const getUsers = async () => {
          const response = await axios.get(
            'https://jsonplaceholder.typicode.com/users',
          )
          setUsers(response.data)
        }

        void addUser()
        void getUsers()
        void deleteUser()
    },[])
  return (
    <div>
      <h1>User Names</h1>
      <hr />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* <ul>
          {users.map((user)=>{
            return (
              <li>
                Name-{user.name} <br />
                Email-{user.email} <hr />
              </li>
            ) 
          })}
        </ul> */}
    </div>
  )
}
export default Users