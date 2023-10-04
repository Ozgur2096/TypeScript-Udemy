// The "UNKNOWN" type
var userInput;
var userName;
userInput = 5;
userInput = 'a';
// userInput: string; // Error
// if the type of userInput would be "any", it would be defined as any type
if (typeof userInput === 'string') {
    userName = userInput;
}
// The "NEVER" type
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error occurred', 500);
