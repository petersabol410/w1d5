module.exports = {
  list: [],

  addToList: function(value) {
    this.list.push(value);
    return this.list;
  },

  sortedList: function() {
    this.list.sort(function(a, b) {
      return a - b;
    });
    return this.list;
  }
};




