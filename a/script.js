function createIterator(array) {
  let index = 0;
  function innerFunction() {
    const currentElement = array[index];
    index++;
    return currentElement;
  }
  return innerFunction;
}

const getNext = createIterator(["Pazartesi", "Sali", "Carsamba"]);
const firstDay = getNext();
const secondDay = getNext();
