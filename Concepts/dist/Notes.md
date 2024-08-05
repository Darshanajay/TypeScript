y : variable
number : type of variable
= : assignment operator

TypeScript Types

- string = represent text data
- number = represent numeric data
- boolean = represent true or false values
- null - only one value: null intentional absense of value
- undefined - one value undefined. default value of uninitalized variable
- Any - skip the type checking Avoid using Any type in your code.
- Array - ordered list of data
- Object - represent multiple properties.
- funciton - function nameOffunction(a:type, b:type) : return type{ ... };
- Union - to add multiple type insted of using any ; example : let userId: (string | number | boolean) = "abcddkjsdkf";
- Void - represent constant value that may be undefined or null \* void is used function does not have return statement.
- never - represent value that will never occur used when function never return value
- unknown ( *not known *type safe counterpart of any)

Tuple = {
_ number of elements are fixed
_ type of elements are known and same.  
}

Enum = {
Group of named constant values.
An enum is a special "class" that represents a group of constants (unchangeable variables).
}

Type Alias = {
createing Temp name of type
Type Aliases allow defining types with a custom name (an Alias).
Type Aliases can be used for primitives like string or more complex types such as objects and arrays.
}

StringLitarels = {
    * String Literal Types eevaga ond name durgesh aythapa ade beku ad bittu bere beda
    * example: let UserNextName: ("Guru" | "Vivek" | "Ashok");
}

interface={
    Interfaces are similar to type aliases, except they only apply to object types.
}

Advance Funciton = {
    Type of Function
    * Arrow Function
    (Parameters) => return type
    (a: number , b: number) => number
    Example : let xx:(a:number , b:number) =>number = function myFun(a: number , b: number):number {
    return a + b;}
}

