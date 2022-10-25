// implement Array's method like get, push, pop, delete

class myArray {
  length: number;
  data: any;
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index: number) {
    return this.data[index];
  }
  push(item: any) {
    this.data[this.length] = item; // cause length -1 = last index
    this.length++;
    return this.length;
  }
  pop() {
    let lastName = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastName;
  }
  delete(index: number) {
    const deleteItem = this.data[index];
    return this.shiftItems(index);
  }
  shiftItems(index: number) {
    //[0,2,4]
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }

}
const newArray = new myArray();
newArray.push('I');
newArray.push('Miss');
newArray.push('you');
newArray.get(1);
newArray.delete(2);
console.log(newArray)

