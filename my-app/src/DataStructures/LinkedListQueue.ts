import {LinkedListNodeType} from '../types'

function LinkedListQueue<T>() {


  /* 
    Maintain one pointer first to first node in a singly-linked list.
     Maintain another pointer last to last node.
  */

  let head: LinkedListNodeType | null = null
  let tail: LinkedListNodeType | null = null
  let length: number = 0

  function enqueue(value: T) {
    const node:LinkedListNodeType = {
       value,
       next: null
    }

    if(!head) {
      head = node
    }
    if(tail) {
      tail.next = node
    }
    tail = node
    length++
  }

  function dequeue(): T | null {
    length = length === 0 ? 0 : length -1
    if(head) {
      const { value, next } = head
      head = next
      return value 
    }
    return null
  }
  
  function size():number {
    return length
  }

  function peek(): T {
    return head?.value
  }

  function isEmpty(): boolean {
    return length === 0
  }

  function clear() {
    head = null
    tail = null
  }

  function print() {
    while(head && head.next) {
      console.log(head.value)
      head = head.next
    }
  }
  
  return {
    enqueue,
    dequeue,
    size,
    peek,
    isEmpty,
    clear,
    print
  }


}

export default LinkedListQueue