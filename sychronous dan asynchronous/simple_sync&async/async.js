// function getUserDataAsync(callback) {
//     console.log("Fetch user data");

//     setTimeout(() => {
//         console.log("User data fetched");
//         callback();
//     }, 3000)
// }

// function processingUserData() {
//     console.log("Processing user data");

//     setTimeout(() => { console.log("user data processed") }, 3000)
// }

// console.log("Start program");
// getUserDataAsync(() => { processingUserData() });
// console.log("End program");

// Demo callback queue
// console.log('First');

// setTimeout(function callback() {
//     console.log('Second');
// }, 0);

// console.log('Third');

// Demo miscrotask queue
console.log("Outer");

Promise.resolve()
    .then(() => console.log("Promise")
    );

setTimeout(() => console.log("Timeout"), 0);

console.log("End outer");