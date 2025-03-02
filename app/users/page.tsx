import axios from "axios"
export default async function Users() {
    const response = await axios.get("https://dummyjson.com/todos")
    await new Promise(r => setTimeout(r,5000));
    const data= response.data
    return (
        <div>
            users page
            {data.todos[0].todo}
        </div>
    )
}