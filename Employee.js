// You have a data structure of employee information, including the employee's unique ID, importance value, and direct subordinates' IDs.

// You are given an array of employees employees where:

// employees[i].id is the ID of the ith employee.
// employees[i].importance is the importance value of the ith employee.
// employees[i].subordinates is a list of the IDs of the direct subordinates of the ith employee.
// Given an integer id that represents an employee's ID, return the total importance value of this employee and all their direct and indirect subordinates.

/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function(employees, id) {
    const foundEmployee = employees.find((employee) => employee.id === id); //O(n)
    if(foundEmployee){
        const sum = foundEmployee.subordinates.reduce((subordinate, acc) => subordinate.importance + acc, 0);
        return sum + foundEmployee.importance;
    }
    return 0;
};