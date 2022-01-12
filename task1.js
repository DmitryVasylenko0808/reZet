function f(arr)  {
    if (arr === undefined || arr === null || arr.length < 3) return null;

    var res = [];
    var a, b, c;

    for(let i = 0; i < arr.length - 2; i++) {
        a = arr[i];
        b = arr[i + 1];
        c = arr[i + 2];
        
        if ((a > b && b < c) || (a < b && b > c)) res.push(1);
        else res.push(0); 
    }
    return res;
}


var example = [1, 3, 5, 4, 5, 7];
console.log(f(example));