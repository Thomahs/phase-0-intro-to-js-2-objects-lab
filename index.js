const employee = {
    name: "Sam", 
    streetAddress: "123 Sesame Street"
}

 function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee}

    newEmployee[key] = value;

    return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    
    employee[key] = value;

    return employee;
}
function deleteFromEmployeeByKey(employee, key) {
    const newerEmployee = {...employee}
    
    delete newerEmployee[key];

    return newerEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {

delete employee[key]

return employee
}
