// Implement following methods:
// isEmpty: a method that checks whether the given stack is empty or not. It will return a boolean
// isFull: a met


class Stack {
    constructor(){
        this.data = [];
        this.top = 0;
    }
    push(element) {
      this.data[this.top] = element;
      this.top = this.top + 1;
    }
   length() {
      return this.top;
   }

   isEmpty() {
    if (console.log(this.size == 0)) {
        ("stack is empty");
      } else {
        ("stack is not empty");
  
        return this.size == 0;
      }
   }

   isFull() {
    if (console.log(this.size == items)) {
      ("stack is not empty");
    } else {
      ("stack is empty");
      return this.size == items;
    }
  }
}