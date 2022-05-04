const firstEL = document.getElementById("joke");

const btn = document.getElementById("jokeBtn");

btn.addEventListener("click", getJoke);

getJoke()

// USING ASYNC/AWAIT

async function getJoke() {
    const config = {
        headers: {
            Accept:'application/json',
        },
    }
    const res = await fetch('https://icanhazdadjoke.com', config);
    const data = await res.json()

    firstEL.innerHTML = data.joke
}