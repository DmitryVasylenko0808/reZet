function f(arr)  {
    if (arr === undefined || arr === null || arr.length === 0 || arr[0].length < 3)
        return null;

    var columns = arr[0].length;
    var checkArr = [];
    var res = [];

    for(let col = 0; col < columns - 2; col++) {
        for(let i = 0; i < arr.length; i++) 
            checkArr.push(arr[i][col], arr[i][col + 1], arr[i][col + 2]);
        res.push(check(checkArr));
        checkArr = [];
    }
    return res;
}

function check(arr)  {
    for(let number = 1; number <= 9; number++) 
        if (!arr.includes(number)) return false; 
    
    return true;
}


var example = [
    [1, 2, 3, 2, 7],
    [4, 5, 6, 8, 1],
    [7, 8, 9, 4, 5],
];
console.log(f(example));