// given a string remove all of the spaces and return the string

function removeSpace(input) {
    let output = "";

    for (let i = 0; i < input.length; i++) {
        if (input[i] !== " ") {
            output += input[i];
        }
    }

    return output;
}

console.log(removeSpace("klajdkljfakljd akldfjklajfdkl ajkldfjkla sfd"));
