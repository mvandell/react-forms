import { useState } from "react"

export default function SignUpForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    async function handleSubmit(event) {
        event.preventDefault();
        console.log("hello world")
    };

    return (
        <>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
            <label>
                Username: <input value={username} onChange={(event) => {setUsername(event.target.value)}}/>
            </label>
            <br />
            <label>
                Password: <input value={password} onChange={(event) => {setPassword(event.target.value)}}/>
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
        </>
    )
}