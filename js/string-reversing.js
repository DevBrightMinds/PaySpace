function reverseString(string) {
    let results = "";

    // first split the string, converting it to an array
    // then iterate through the string as way of reversing the characters - first one in, last one out type of thing - stack;
    string = string.split("");

    // you want to set the intial value of the iterator to the length of the string
    // then assure that the iterator is always either equal or greater than 0 - so that it doesn't go beyond the first character in the string
    // the loop should just keep decrementing from here. 

    for (let i = string.length - 1; i >= 0; i--) {
        results += (string[i]);
    }

    // display the reversed string
    document.querySelector(".string-container p").textContent = results;

}

document.querySelector(".btn").addEventListener("click", () => {
    let stringValue = document.getElementById("anything").value;

    if (stringValue == "")
        stringValue = "You did not write anything";

    reverseString(stringValue);
}, false);