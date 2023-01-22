// Problem 1 //

    function fearNotLetter(str) {
    let lastLetter=str.charCodeAt(0);
    let missingLetter;
    for (let i=1; i<str.length; i++) {
        let currentLetter=str.charCodeAt(i);
        console.log(lastLetter, currentLetter);
        if ((lastLetter+1) < currentLetter) {
        missingLetter = String.fromCharCode(currentLetter-1);
        break;
        }
        else {
        lastLetter=currentLetter;
        }
    }
    return missingLetter;
    }

// Problem 2 //

    function sumEvenOdd(nums) {
    let even=0
    let odd=0;
    nums.forEach(number => {
    if (number % 2 === 0) 
        even++;
    else
        odd++;
    });
    return [even,
        nums.reduce((s, v) => (!(v % 2) ? s + v : s), 0), odd,
        nums.reduce((s, v) => (v % 2 ? s + v : s), 0)];
    }

// Problem 3 //

    function containsDuplicate(arr) {
        var valuesContained = Object.create(null);
        for (let i = 0; i < arr.length; ++i) {
            let value = arr[i];
            if (value in valuesContained) {
                return true;
            }
            valuesContianed[value] = true;
        }
        return false;
    }