function myFunc(word) {
    let s = word.split(' ')
    let a = s[0].slice(1)
    let b = s[1].slice(1)
    let c = s[2].slice(1)
    let d = s[3].slice(1)
    let e = s[4].slice(1)
    // console.log(s);
    // console.log(a);
    // console.log(b);
    // console.log(c);
    // console.log(d);
    // console.log(e);


    return (s[0][0].toUpperCase() + a.toLowerCase() + ' ' + s[1][0].toUpperCase() + b.toLowerCase() + ' ' + s[2][0].toUpperCase() + c.toLowerCase() + ' ' + s[3][0].toUpperCase() + d.toLowerCase() + ' ' + s[4][0].toUpperCase() + e.toLowerCase());
    
    
}
let end = myFunc('Hello my name is Harry')
console.log(end);






function number(num) {
    let str = num.toString()

    let first = +str[0] + +str[1] + +str[2]
    let second = +str[3] + +str[4] + +str[5]
    if(str.length !== 6){
        console.log('6 reqem daxil edin');
    }else if (first === second) {
        console.log(true);
    }else if(first !== second){
        console.log(false);
    }
    
}
number(124511)
