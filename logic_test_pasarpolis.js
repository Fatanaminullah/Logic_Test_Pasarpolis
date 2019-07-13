
var secondMax = (arr,arrSize) => {
    var max
    var secMax
    max = secMax = -Math.pow(2,10)
    
    
    if(arrSize < 2) secMax = -1

    arr.map(item => {
        if(parseInt(item) > max){
            secMax = max
            max = item
        }else if(parseInt(item) > secMax && parseInt(item) != max){
            secMax = item
        }
    })
    if(secMax == -Math.pow(2,10)) secMax = -1
    console.log("Second Max : "+ secMax);
    
}

var array1 = ["3","-2"]
var array2 = ["5","5","4","2"]
var array3 = ["4","4","4"]
var array4 = []

secondMax(array1,array1.length)
secondMax(array2,array2.length)
secondMax(array3,array3.length)
secondMax(array4,array4.length)