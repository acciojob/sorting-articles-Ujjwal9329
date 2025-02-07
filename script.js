let arr = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
let obj = {};

for (let i = 0; i < arr.length; i++) {
    let newArr = arr[i].split(" ");
    console.log(newArr);

    if (newArr[0].toLowerCase() == "a" || newArr[0].toLowerCase() == "an" || newArr[0].toLowerCase() == "the") {
        newArr.splice(0, 1);
    }

    obj[arr[i]] = newArr.join(" ");  // Store in object
}

console.log(obj);
