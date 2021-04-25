//Given a sorted array, the task is to remove the duplicate elements from the array
//Input  : arr[] = {1, 2, 2, 3, 4, 4, 4, 5, 5}
//Output : arr[] = {1, 2, 3, 4, 5}

let arr = [1, 2, 2, 3, 4, 4, 4, 5, 5];

const removeDuplicates = (arr, n) => {
    //Return if array is empty or contains only single element
    if(n == 0 || n == 1) {
        return n;
    }

    let temp = [];
    let j = 0;
    for(let i = 0; i < n; i++) {
        //for(let i = 0; i < n-1; i++)
        //if current element is not equal to the next element then store that to the current element
        if(arr[i] != arr[i+1]) {
            temp[j++] = arr[i];
        }
    }
    //store the last element, as it has not stored previously
    //temp[j++] = arr[n-1];
    
    //modify the original array
    for(let i=0; i < j; i++) {
        arr[i] = temp[i];
    }

    return j;
}

let n = arr.length;   
n = removeDuplicates(arr, n);
for(let i = 0; i < n; i++) {
    console.log(arr[i]+' ');
}