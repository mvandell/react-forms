import { useState } from "react"

export default function SignUpForm({setToken}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    
    function handlePasswordChange(event) {
        if (event.target.value.length <= 8) {
            setError("Password too short. It must be at least 8 characters.");
        }
        if (event.target.value.length >= 20) {
            setError("Password too long. It cannot be longer than 20 characters.");
        }
        if (event.target.value.length <= 20 && event.target.value.length >= 8) {
            setError("");
        }
        setPassword(event.target.value);
    }

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({username, password})
            });
            const result = await response.json();
            console.log(result);
            setToken(result.token)
            
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <>
        <h2>Sign Up</h2>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
            <label>
                Username: <input value={username} onChange={(event) => {setUsername(event.target.value)}}/>
            </label>
            <br />
            <label>
                Password: <input value={password} onChange={handlePasswordChange}/>
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
        </>
    )
}