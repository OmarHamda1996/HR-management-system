
function Employee(id, name, department, level, imageUrl) {
    this.id = id;
     this.name = name;
    this.department = department;
    this.level = level;
     this.imageUrl = imageUrl;
    this.salary = this.calculateSalary();
     }
     
    
   Employee.prototype.calculateSalary = function() {
   let minSalary, maxSalary;
   switch (this.level) {
         case "Senior":
           minSalary = 1500;
           maxSalary = 2000;
           break;
         case "Mid-Senior":
           minSalary = 1000;
           maxSalary = 1500;
           break;
         case "Junior":
           minSalary = 500;
           maxSalary = 1000;
           break;
       }
       let salary = Math.floor(Math.random() * (maxSalary - minSalary + 1) + minSalary); 
   let netSalary = salary - (salary * 0.075); 
    return netSalary;
     }
     
   
     Employee.prototype.render = function() {
       const employeeList = document.getElementById("employee-list");
   const employeeDiv = document.createElement("div");
       employeeDiv.innerHTML = `
         <h2>${this.name}</h2>
         <p>Department: ${this.department}</p>
         <p>Level: ${this.level}</p>
         <img src="${this.imageUrl}" alt="${this.name}">
         <p>Salary: ${this.salary.toFixed(2)}</p>
       `;
       employeeList.appendChild(employeeDiv);
     }
     
   
     const employees = [
       new Employee(1000, "Ghazi Samer", "Administration", "Senior", "img of Ghazi"),
       new Employee(1001, "Lana Ali", "Finance", "Senior", "img of Lana"),
       new Employee(1002, "Tamara Ayoub", "Marketing", "Senior", "img of Tamara"),
       new Employee(1003, "Safi Walid", "Administration", "Mid-Senior", "img of Safi"),
       new Employee(1004, "Omar Zaid", "Development", "Senior", "img of Omar"),
       new Employee(1005, "Rana Saleh", "Development", "Junior", "img of Rana"),
       new Employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior", "img of Hadi")
     ];
     
   
     employees.forEach(function(employee) {
       employee.render();
     });
     