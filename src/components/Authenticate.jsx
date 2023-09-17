export default function Authenticate() {
    async function handleClick(event) {
        event.preventDefault();
        try {
            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/authenticate", {
                method: "GET",
                headers: {"Content-Type": "application/json", "Authorization": `Bearer ${token}`}
            })
            const result = await response.json();
            console.log(result);
            
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <>
        <h2>Authenticate</h2>
        <button onClick={handleClick}>Authenticate Token</button>
        </>
    )
}