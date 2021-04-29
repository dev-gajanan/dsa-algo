//Given an unsorted array, task is to sort the array using bubble sort algorithm
class SortArray {
    #arr;
    constructor(arr) {
        this.#arr = arr;
    }
    _bubbleSort = () => {
        for(let i = 0; i < this.#arr.length; i++) {
            for(let j = 0; j < (this.#arr.length-i-1); j++) {
                //check the element at current iteration is greater then the next iteration
                if(this.#arr[j] > this.#arr[j+1]) {
                    //swap the element from right to left
                    let temp = this.#arr[j];
                    this.#arr[j] = this.#arr[j+1];
                    this.#arr[j+1] = temp;
                }
            }
        }
        console.log(this.#arr)
    }
}

const arr = [2, 5, 3, 4, 45, 12, 56, 20];
const sort = new SortArray(arr);
sort._bubbleSort();