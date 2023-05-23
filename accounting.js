function getEmployeesFromLocalStorage() {
    const storedEmployees = localStorage.getItem('employees');
    if (storedEmployees) {
      return JSON.parse(storedEmployees);
    }
    return [];
  }
  
 
 
 
  function calculateAverageSalary(department) {
    const employeesInDepartment = employees.filter(function(employee) {
      return employee.department === department;
    });
  
    const totalSalary = employeesInDepartment.reduce(function(sum, employee) {
      return sum + employee.salary;
    }, 0);
  
    return totalSalary / employeesInDepartment.length;
  }
  
  
  function calculateTotalSalary(department) {
    const employeesInDepartment = employees.filter(function(employee) {
      return employee.department === department;
    });
  
    return employeesInDepartment.reduce(function(sum, employee) {
      return sum + employee.salary;
    }, 0);
  }
  

  function renderAccountingTable() {
    const accountingContainer = document.getElementById('accounting-container');
    accountingContainer.innerHTML = ''; 
    
    
    const accountingTable = document.createElement('table');
    accountingTable.innerHTML = `
      <tr>
        <th>Department</th>
        <th># of Employees</th>
        <th>Total Salary</th>
        <th>Average Salary</th>
      </tr>
    `;
  
    const departments = ['Administration', 'Marketing', 'Development', 'Finance'];
  
    departments.forEach(function(department) {
      const numEmployees = employees.filter(function(employee) {
        return employee.department === department;
      }).length;
  
      const totalSalary = calculateTotalSalary(department);
      const averageSalary = calculateAverageSalary(department);
  
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${department}</td>
        <td>${numEmployees}</td>
        <td>${totalSalary.toFixed(2)}</td>
        <td>${averageSalary.toFixed(2)}</td>
      `;
  
      accountingTable.appendChild(row);
    });
  
    const totalEmployees = employees.length;
    const totalAverageSalary = calculateAverageSalary('all');
    const totalTotalSalary = calculateTotalSalary('all');
  
    const footerRow = document.createElement('tr');
    footerRow.innerHTML = `
      <td>Total</td>
      <td>${totalEmployees}</td>
      <td>${totalTotalSalary.toFixed(2)}</td>
      <td>${totalAverageSalary.toFixed(2)}</td>
    `;
  
    accountingTable.appendChild(footerRow);
  
    accountingContainer.appendChild(accountingTable);
  }

  window.addEventListener('load', function() {
    employees = getEmployeesFromLocalStorage();
    renderAccountingTable();
  });
  