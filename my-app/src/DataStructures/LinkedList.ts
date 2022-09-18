import { LinkedListNodeType } from '../types'


const LinkedList = () => {
  let head: LinkedListNodeType | null = null
  let length = 0
  const append = (node: LinkedListNodeType) => {
    if(!head) {
      head = node
    } else {
      let current = head
      while(current) {
        if(head.next) {
          current = head.next
        } else {
          current.next = node
        }
      }
    }
    length++
  }

  const insertAt = (position: number, node: LinkedListNodeType) => {
    if(position > length || position < 0) {
      return
    }

    if(position === 0) {
      let temp = head
      node.next = temp
      head = node
    }

    const current = head
    while(position > 0 && current) {
      let temp = current.next
      node.next = temp
      current.next = node
      position--
    }
  }


  const removeAt = () => {

  }

  const size = () => {
    return length
  }


  return {
    append,
    insertAt,
    removeAt,
    size
  }
}

export default LinkedList