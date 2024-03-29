const mem = require('./memory');
const memory = new mem();

class Array {
    constructor() {
        this.length = 0;
        this._capacity = 0;
        this.ptr = memory.allocate(this.length);
    }

    push(value){
      if (this.length >= this._capacity){
        this._resize((this.length + 1) * Array.SIZE_RATIO)
      }
      memory.set(this.ptr + this.length, value);
      this.length++;
    }

    _resize(size) {
      const oldPtr = this.ptr;
      this.ptr = memory.allocate(size);
      if (this.ptr === null){
        throw new Error('Out of memory');
      }
      memory.copy(this.ptr, oldPtr, this.length)
      memory.free(oldPtr);
      this._capacity = size;
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        return memory.get(this.ptr + index);
    }

    pop() {
        if (this.length == 0) {
            throw new Error ('Index error');
        }
        const value = memory.get(this.ptr + this.length - 1);
        this.length --;
        return value;
    }


}

Array.SIZE_RATIO = 3;



function main(){
  Array.SIZE_RATIO = 3;

  let arr = new Array();

   arr.push(3);
   console.log(arr);
   arr.push(5);
   console.log(arr);
   arr.push(15);
   console.log(arr);
   arr.push(19);
   console.log(arr);
   arr.push(45);
   console.log(arr);
   arr.push(10);
   console.log(arr);
   arr.pop();
   console.log(arr);
   arr.pop();
   console.log(arr);
   arr.pop();
   console.log(arr);


   console.log(arr.get(0));

   arr.pop();
   arr.pop();
   arr.pop();
   console.log(arr);

   arr.push("tauhida");
   console.log(arr.get(0));
   console.log(arr);
}

main();
