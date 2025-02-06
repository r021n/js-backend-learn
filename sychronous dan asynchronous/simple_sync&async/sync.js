function getUserData() {
    console.log("get user data");

    // simulasi server lambat
    for (let i = 0; i < 1e9; i++) { };

    console.log("user data fetched");
}

console.log("Start");
getUserData();
console.log("End program");