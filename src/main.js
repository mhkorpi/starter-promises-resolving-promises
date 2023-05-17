const { welcome, goodbye, tell } = require("../utils/fortune-teller");

const promise = welcome();

console.log(promise);

const question = "Will the weather be nice today?";
const tellPromise = tell();

tellPromise
    .then((fortune) => {
        console.log(question);
        console.log(fortune);
    })
    .catch((error) => {
        console.log(error)
    });
    //***OR***
    //.catch(console.error)