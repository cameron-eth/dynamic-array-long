class DynamicArray {

  constructor(defaultSize = 4) {
    this.length = 0;
    this.capacity = defaultSize;
    this.data = new Array(defaultSize);
  }

  read(index) {
    return this.data[index];
  }

  push(val) {
    this.data[this.length] = val
    this.length++
  }

  pop() {
    while (this.length > 0) {
      const removed = this.data[this.length - 1]
      this.data[this.length - 1] = undefined
      this.length--
      return removed
    }
    //If length is 0 we return undefined
    return undefined
  }

  unshift(val) {
    for (let i = this.data.length - 1; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = val;
  }

  shift() {

    // Your code here
  }

  indexOf(val) {

    // Your code here
  }

  resize() {

    // Your code here
  }

}


module.exports = DynamicArray;
