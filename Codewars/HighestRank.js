p = console.log.bind(console)

let a=[12, 10, 8, 12, 7, 6, 4, 10, 12]              //-->  12
let b=[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          //-->  12
let c =[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  //-->   3

function highestRank(arr){
    let arrWithoutDuplicates = new Set(arr)
    let counterArray =[]
    let numberCounterArray=[]
    let maxCount = 0
    let tempArr=[]
    arrWithoutDuplicates.forEach((number) => {
        let counter=0
        arr.forEach((k)=>{
            if (k===number) {counter++}
        })
counterArray.push(counter)
numberCounterArray.push([number,counter]) 
//p(`Number: ${number}  `+`  Counter: ${counter}`)
});
maxCount = Math.max(...counterArray)
numberCounterArray = numberCounterArray.filter(numbCountArr=>{return numbCountArr[1]===maxCount})
numberCounterArray.forEach(numbCountArr=>{
    tempArr.push(numbCountArr[0])   
})
highestNumber = Math.max(...tempArr)
//p(arrWithoutDuplicates)
//p(counterArray)
//p(maxCount)
//p(numberCounterArray)
//p(tempArr)
p(highestNumber)
}
