import Students from './components/Students'
import { Button } from './components/ui/button'
import Count from './hooks/Count'
import Register from './hooks/Register'
import Users from './hooks/Users'

const App = () => {

    let name = 'Tarunika'
    let age = 19

    return (
        <>
            <Users />
            <Button variant="default">Default</Button>
            <Button variant="destructive">Delete</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>

            <Count />

            <Register />

            <div className="flex flex-col items-center justify-center p-4">
                <h1>This is {name}</h1>
                <p>Age: {age}</p>

                <Students name={name} age={age} />

                <Button>Click Me</Button>
            </div>
        </>
    )
}

export default App