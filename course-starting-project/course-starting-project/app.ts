// The "UNKNOWN" type

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'a';

// userInput: string; // Error
// if the type of userInput would be "any", it would be defined as any type

if (typeof userInput === 'string') {
  userName = userInput;
}

// The "NEVER" type

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError('An error occurred', 500);
