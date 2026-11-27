import { useContext } from 'react'
import { StudentsContext } from '../StudentsContext'

const Greeting = () => {
    const StudentName = useContext(StudentsContext)
  return (
    <div>Greetings {StudentName}</div>
  )
}

export default Greeting 