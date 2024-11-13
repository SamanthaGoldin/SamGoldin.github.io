const apiEndpoint = 'https://v2.jokeapi.dev/joke/Any?';
function getJoke() {
    fetch(apiEndpoint)
        .then(res => {
            if (res.ok) {
                throw new Error('Failed to fetch the joke');
            }
            return res.json();
        })
        .then(data => {
            console.log('Fetched joke:', data.setup + " - " + data.punchline);
            displayRes(data.setup + " - " + data.punchline);
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Sorry, there was an error fetching the joke.');
        });
}
function displayRes(jokeText) {
    document.getElementById('output').textContent = jokeText;
}

document.getElementById('FetchJoke').addEventListener('click', () => {
    console.log('Button clicked');
    getJoke();
});

getJoke();
