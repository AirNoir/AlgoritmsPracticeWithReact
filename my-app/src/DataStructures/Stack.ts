const Stack = function Stack<T>() {

  let items: Array<T> = []
  
  function push(item: T) {
    items.push(item)
  }
  function pop(): T | undefined {
    /* move the top element out & return the element */
    return items.pop()
  }
  function peek(): T | undefined {
    /* View the top element without moving it out */
    return items[items.length-1]
  }

  function isEmpty(): boolean {
    return items.length === 0
  }

  function clear(): void {
    items = []
  }

  function size(): number {
    return items.length
  }

  function print(): void {
    console.log(JSON.stringify(items))
  }

  return {
    push,
    pop,
    peek,
    isEmpty,
    clear,
    size,
    print,
  }

}

export default Stack