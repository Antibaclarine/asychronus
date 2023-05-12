// Write an asynchronous function that accepts a message string and a delay time in milliseconds. The function should log the message to the console after the specified delay time.
function time(){
    console.log('meet me today');
}

setTimeout(time,5000)

// You have an array of user IDs and a function getUserData(id) that returns a Promise with user data when given a user ID. Write an asynchronous function that fetches and logs the data for each user ID one by one, in sequence
function getUserData(id){
 let promise =new Promise((resolve,reject)=>)
 for (const user of UserData) {
    if(user===id){
        resolve(user)
        return;
    }
 }
 reject("user not found");
}


// You have an asynchronous function performTask() that returns a Promise. The Promise resolves if the task is successful and rejects if there's an error. Write a function that calls performTask() and logs a custom success message if the task is successful, and a custom error message if there's an error.
async function allTask(){
await performTask()
try{
    console.log("task completed successfully");
}
catch{
    console.error('Task failed');
}
}
allTask()