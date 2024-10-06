

function binarySearch(numbers, number) {
    let low = 0
    let high = numbers.length - 1

    do{
        const medium = Math.floor((high + low) / 2)
        const value = numbers[medium]

        if (value === number) {
            return true
        } else if (value > number) {
            high = medium - 1     
        } else {
            low = medium + 1
        }

    }while(low <= high)

    return false
}

module.exports = {
    binarySearch
}