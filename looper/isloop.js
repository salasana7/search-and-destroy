"use strict";

//Complete this algo
const isLoop = (linkedlist) => {
  const dictionary = {};
  let current = linkedlist.head;
  while (current) {
    if (current.value in dictionary) return true;
    dictionary[current.value] = 1;
    current = current.next;
  }
  return false;
};

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop;
