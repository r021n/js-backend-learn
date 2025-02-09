const apiEndpoint = "https://jsonplaceholder.typicode.com/users";

function getUserData(callback) {
    const api = apiEndpoint;

    fetch(api)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            callback(null, data);
        })
        .catch(error => {
            callback(error, null);
        })
}

getUserData((error, data) => {
    if (error) {
        console.log("failed to fetch data: ", error);
        return;
    }

    console.log(data);
})