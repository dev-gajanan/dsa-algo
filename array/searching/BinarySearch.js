class BinarySearch {
    #arr; //consider this is a sorted array
    #element;
    #middle;
    constructor(arr, element) {
        this.#arr = arr;
        this.#element = element;
    }
    _binarySearch = () => {
        let first = 0;
        let last = this.#arr.length - 1;
        if(this.#arr.length === 0) {
            return false;
        }
        while(first <= last) {
            this.#middle = Math.floor((first+last)/2)
            if(this.#arr[this.#middle] === this.#element) {
                return this.#middle;
                break;
            } else if(this.#arr[this.#middle] < this.#element) {
                first = this.#middle+1 //search in right
            } else {
                last = this.#middle-1 //search in left
            }
        }
       return -1;
    }
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8]
const element = 6;
const binarySearch = new BinarySearch(arr, element)
const response = binarySearch._binarySearch()
if(response) {
    console.log(`Element ${element} exist in positions ${response}`);
} else {
    console.log("Element does not exists!");
}