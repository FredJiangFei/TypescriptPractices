function addToArray() {
  const numbers = [1, 2, 3];
  const newNumbers = [...numbers, 4];
  console.log(newNumbers);
}

function removeFromArray() {
  const numbers = [1, 2, 3];
  const newNumbers = numbers.filter(x => x !== 1);
  console.log(newNumbers);
}

function updateProperty() {
  const person = {
    name: 'fred',
    age: 30
  };
  const newPerson = {
    ...person,
    age: 20
  };
  console.log(newPerson);
}

updateProperty();
