/* 13 Apr 2016
 * HF PB
 **/

var userList = ["Jack", "Jill", "Paul", "Tim"];

// Adds |user| to the list of users.
function addUser(user) {
  console.log("Adding user:", user);
  userList.push(user);
}

// Removes |user| from the list of users.
function removeUser(user) {
	console.log("Removing user:", user);
  userList = userList.filter(function(userInList) {
    if (user != userInList) {
    return true;
    } else {
    return false;
    }
  });
}

// Removes all users from the list that start with |character|.
function removeUsersWhoseNameStartWith(character) {
  userList = userList.filter(function(userInList) {
    if ( character != userInList.charAt(0)) {
    return true;
    } else {
    return false;
    }
  });
}

// Step 1: Print which users are in the list.
console.log("Step 1:", userList);

// Step 2: Add "Harry" to the users.
addUser("Harry");

// Step 3: Print which users are in the list. This should include "Harry".
console.log("Step 3:", userList);

// Step 4: Remove "Paul" from the users.
removeUser("Paul");

// Step 5: Print which users are in the list. "Paul" should have been removed.
console.log("Step 4:", userList);

// Step 6: Remove everyone whose name starts with a "J" from the list.
removeUsersWhoseNameStartWith("J");

// Step 7: Print which users remain.
console.log("Step 7:", userList);

