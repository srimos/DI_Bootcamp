function wordsInTheStars() {
    input=prompt("Give a sentence with each word separated by a comma ',' and no spaces")
    array=input.split(",")
    console.log(array)
    longestWord=0
    for (word of array) {
        wordLength=word.length
        if (wordLength>longestWord) {
            longestWord=wordLength
        }
    }
    console.log(longestWord)
    arrLength=longestWord+4
    arrHeight=array.length+2
    let arr = Array.from({ length: longestWord }, () => Array(6).fill(""));
    for (i=0;i<longestWord;i++) {
        arr[0][i]="*"
    }
    for (i=0;i<longestWord;i++) {
        arr[1][i]="*"

    }
}

wordsInTheStars()