// 6. Write a JavaScript program to remove a character at the specified 
// position in a given string and return the modified string.
var str = prompt("WWrite")
var pstion = +prompt("Enter index value")
var modified =  str.slice(0,pstion) + str.slice(pstion+1)
console.log("before modification: ",str)
console.log("After modification: ",modified)