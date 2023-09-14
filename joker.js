const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");

let getJoke = () => {
    jokeContainer.classList.remove("fade");
    fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single")
    .then(data => data.json())
    .then(item =>{
        jokeContainer.textContent = `${item.joke}`;
        jokeContainer.classList.add("fade");
    });
}
getJoke();
btn.addEventListener("click",getJoke); 
