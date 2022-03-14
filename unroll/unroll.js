function unroll(squareArray) {
    let left = 0;
    let top =0;
    let right = squareArray[0].length;
    let bottom = squareArray.length;
    const resultArray = [];
    while (left < right && top < bottom) {
        // travel right
        for(i=left; i<right; i++) {
            resultArray.push(squareArray[left][i]);
        }

        // travel top to bottom
        for(i=top+1; i<bottom; i++) {
            resultArray.push(squareArray[i][right-1]);
        }

        // travel bottom to left
        for(i=right-2; i>=left; i--) {
            resultArray.push(squareArray[bottom-1][i]);
        }

        // travel bottom to top 
        for(i=bottom-2; i>top;i--) {
            resultArray.push(squareArray[i][left])
        }
        left += 1;
        top += 1;
        right -= 1;
        bottom -= 1;
    }
    return resultArray;
}

module.exports = unroll;
