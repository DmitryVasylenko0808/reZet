function f(strings, formats, n) {
    var res = [];
    var temp;

    for(let i = 0; i < strings.length; i++) {
        temp = strings[i].join(" ");
    
        if(temp.length <= n) {
            res.push(buildRow(temp, formats[i]));
        }
        else {
            var s = temp.split(" ");
            var strEdit = [];
            var checkStr = [];
    
            for(let j = 0; j < s.length; j++) {
                checkStr.push(s[j]);
                if (checkStr.join(" ").length <= n) {
                    strEdit.push(s[j]);
                }
                else {
                    res.push(buildRow(strEdit.join(" "), formats[i]));
                    strEdit = [];
                    checkStr = [];
                    j--;
                }
                if (j === s.length - 1) res.push(buildRow(strEdit.join(" "), formats[i]));
            }
        }
    }

    var topAndBot = "";

    for(let i = 0; i < n + 2; i++) 
        topAndBot += "*";
    res.unshift(topAndBot);
    res.push(topAndBot);

    return res;
}

function buildRow(temp, format)  {
    var str = "";
    var tempIndex = 0;

    if (format === "LEFT") {
        for(let i = 0; i < n; i++) {
            if (i >= temp.length) str += " ";
            else str += temp[i];
        }
    }
    else {
        for(let i = 0; i < n; i++) {
            if (i < n - temp.length) str += " ";
            else {
                str += temp[tempIndex];
                tempIndex++;
            }
        }
    }

    return "*" + str + "*";;
}


var strings = [
    ["Hello", "world"], 
    ["Brad", "came", "to", "dinner", "with", "us"], 
    ["He", "loves", "tacos"]];
var formats = ["RIGHT", "LEFT","RIGHT"]
var n = 16;

arr = f(strings, formats, n)

arr.forEach(function(item) {
    console.log(item);
});