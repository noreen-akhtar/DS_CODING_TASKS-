// Implement following methods. Don’t forget to increase and decrease the size when you add or remove an element from the stack.
// push: a method through that you can add a value to the stack
// peek: a method through which you can get the value on the top of stack
// pop: a method through which you can remove the first element of the stack


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
   peek() {
      return this.data[this.top-1];
   }

   pop() {
    if( this.isEmpty() === false ) {
       this.top = this.top -1;
       return this.data.pop();
     }
   }
}