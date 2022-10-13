const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let result = [];

  if (!Array.isArray(members)) {
    return false;
  }

  members.forEach(item => {
    if (typeof item === 'string') {
      // item.split(' ').join('');
      // item.toUpperCase();
      result.push(item.split(' ').join('').toUpperCase().slice(0, 1));
      console.log(item);
    }
  });

  return result.sort().join('');
}

console.log(createDreamTeam(['   matt', 'ann', 'Dmitry', 'Max']));

module.exports = {
  createDreamTeam
};


