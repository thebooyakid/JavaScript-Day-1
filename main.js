//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

// Case sensitive
function findWords2(){
    for(let i = 0; i < dog_names.length; i++){
        if(dog_string.includes(dog_names[i])){
            console.log(dog_names[i])
        } else {
            console.log('no match')
        }
    }
    return(dog_names)
}
findWords2()  

// Not case sensitive
function findWords3(){
    for(let i = 0; i < dog_names.length; i++){
        if(dog_string.toLowerCase().includes(dog_names[i].toLowerCase())){
            console.log(dog_names[i])
        } else {
            console.log('No Match')
        }
    }
}
findWords3()


//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(){
    for (let i = 0; i < arr.length; i++){
        if(i%2==0){
            arr.splice(i,1, 'even index')
        }
    }
    return arr
}
console.log(replaceEvens())

// Method 2
function replaceEvens2(){
    for(let i = 0; i < arr.length; i+=2){
        arr.splice(i,1, 'even index')
    }
    return arr
}
console.log(replaceEvens2())

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]


// Codewars problem to determine if a number is even or odd
function even_or_odd(number){
    if (number%2==0){
        return 'Even'
    } else {
        return 'Odd'
    }
}

// Method 2 
function even_or_odd(number){
    return (number%2==0) ? 'Even': 'Odd'
}

// Codewars problem to give the opposite of a given number (if 4, return -4.  if -78, return 78 etc)
function opposite(number) {
    return 0-number
  }

// Codewars problem to reverse a string
function solution(str){
    return str.split('').reverse().join('')
  }
