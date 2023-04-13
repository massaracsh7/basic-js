const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr: [],
    getLength() {
      return this.arr.length;
    },
    addLink(value) {
      value = String(value);
      if (!value) {
        this.arr.push('( )');
      } else {
        this.arr.push(`( ${value} )`);
      }
      return this;
    },
    removeLink(position) {
      if (typeof position === 'number' && this.arr[position] && position !== 0) {
        this.arr.splice(position - 1, 1);
        return this;
      } else {
        this.arr = [];
        throw new Error("You can't remove incorrect link!");
      }
    },

    reverseChain() {
      this.arr.reverse();
      return this;
    },

    finishChain() {
      let string = this.arr.join('~~');
      this.arr = [];
      return string;
    }
};

module.exports = {
  chainMaker
};
