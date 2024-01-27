function bubblesort(numbers: number[]) {
    for (let i: int = 0; i < numbers.length; ++i) {
        for (let j: int = 0; j < numbers.length -i - 1; ++j) {
            if (numbers[j+1] < numbers[j]) {
                let tmp: number = numbers[j+1]
                numbers[j+1] = numbers[j]
                numbers[j] = tmp
            } 
        }
    }
}

let nums = [1,2,9,1,3,62,245,8,1,5,8]
console.log("nums", nums)
bubblesort(nums)
console.log("nums", nums)


// conso
