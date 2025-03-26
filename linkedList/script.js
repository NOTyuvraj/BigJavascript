class Node{
  constructor(value) {
    this.value = value;
    this.next = null;
  }
};

class LinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
  }
  append(value){
    let newNode = new Node(value);
    if(!this.head){
      this.head = newNode;
      return;
    }
    let current = this.head;
    while(current.next){
      current = current.next;
    }
    current.next = newNode;
  }

  printList(){
    let current = this.head;
    let result = '';
    while(current){
      result += current.value + '->';
      current = current.next;
    }

    console.log(result + 'null');
  }

  size(){
    let current = this.head;
    let size = 0
    while( current ){
      size ++;
      current = current.next;
    }
    console.log(size);
  }

  tail(){
    let current = this.head;
    let last = '';
    while(current){
      last = current.value;
      current = current.next;
    }
    console.log(last);
  }

  first(){
    let current = this.head
    console.log(current.value);
  }

  at(index){
    let current = this.head;
    let temp = 0;
    while(current.value != index){
      temp++;
      current = current.next;
    }
    console.log(temp);
  }

  pop(){
    if(!this.head) return undefined;
    let temp = this.head;
    let pre = this.head;
    while(temp.next){
      pre = temp ;
      temp = temp.next;
    }
    this.tail = pre;
    this.tail.next = null;
  }
}

let list = new LinkedList();
list.append(1);
list.append(5);
list.append(3);
list.append(2);
list.printList();
list.pop();
list.pop();
list.printList();