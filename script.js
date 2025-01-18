// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
  
  const employees = [];
  let addMore = true;

  while (addMore) {
    const firstName = prompt('Enter the first name of the employee');
    const lastName = prompt('Emter the last name of the employee');
    let salary = parseFloat(prompt('What is their salary?'));
    if (isNaN(salary)) {
      salary = 0;
    }

    employees.push({
      firstName: firstName,
      lastName: lastName,
      salary: salary
    });

    addMore = confirm('Do you want to add more employees?');
  };
  return employees;
};


// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  const totalSalary = employeesArray.reduce((sum, employee) => sum + employee.salary, 0);
  const numberOfEmployees = employeesArray.length;
  const averageSalary = totalSalary / numberOfEmployees;
  const averageSalaryWithTwoDecimals = averageSalary.toFixed(2);
   console.log(`The average employee salary between our ${numberOfEmployees} employee(s) is $${averageSalaryWithTwoDecimals}`);
   console.log(`The average employee salary between our ${numberOfEmployees} employee(s) is $${averageSalaryWithTwoDecimals}`);

};



const numberOfEmployees = employeesArray.length;
  const totalSalary = employeesArray.reduce((sum, employee) => sum + employee.salary, 0);
  const averageSalary = totalSalary / numberOfEmployees;
  const averageSalaryWithTwoDecimals = averageSalary.toFixed(2);
  console.log(The average employee salary between our ${numberOfEmployees} employee(s) is $${averageSalaryWithTwoDecimals});


// Select a random employee
const getRandomEmployee = function (employeesArray) { 
  // TODO: Select and display a random employee
  const randomNumber = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomNumber];

  console.log(`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`);
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement('td');
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement('td');
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
