

function binarySearch(ary, targt){

    let left = 0;
    let right = ary.length - 1;

    while (left <= right){

        let aryMid = Math.round((left + right) / 2)

        if (targt === ary[aryMid]){
            return aryMid
        }
        else if (targt > ary[aryMid]){
            left = aryMid + 1
        }
        else {
            right = aryMid - 1 // dont use let in update varibles
        }
    } 
    
    return - 1

};

let arry = [1,3,5,7,8,9,10]
let target = 5

console.log(binarySearch(arry,target))