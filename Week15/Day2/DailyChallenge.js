function wordsInTheStars() {
    let input=prompt("Give a sentence with each word separated by a comma ',' and no spaces")
    let array=input.split(",")
    // console.log(array)
    let longestWord=0
    for (word of array) {
        wordLength=word.length
        if (wordLength>longestWord) {
            longestWord=wordLength
        }
    }
    // console.log(longestWord)
    let arrLength=longestWord+4
    // console.log(arrLength)
    let arrHeight=array.length+4
    // console.log(arrHeight)
    let arr = Array.from({ length: arrHeight }, () => Array(arrLength).fill("*"));
    for (i=1;i<arrHeight-1;i++) {
        for (j=1;j<arrLength-1;j++) {
            arr[i][j]=" "
        }
    }
    for (i=0;i<array.length;i++) {
        for (j=0;j<array[i].length;j++) {
            arr[i+2][j+2]=array[i][j]
        }
    }
    arr.forEach(row => {
    console.log(row.join(" "));
    });
    // console.log(arr)
}

wordsInTheStars()