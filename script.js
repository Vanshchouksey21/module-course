// Array of names to be processed
var names = ['yash', 'vansh', 'vinay', 'yomit', 'ujjwal', 'samarth', 'on'];

// Loop through the array of names
for (var i = 0; i < names.length; i++) {
    // Check if the name starts with 'J' or 'j'
    if (names[i].charAt(0).toLowerCase() === 'j') {
        console.log('Goodbye ' + names[i]);
    } else {
        console.log('Hello ' + names[i]);
    }
}
