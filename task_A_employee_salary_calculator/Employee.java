package task_A_employee_salary_calculator;

class Employee {
	// Attributes
	 private String name;
	 private String empId;
	 private double basicSalary;
	 
	 // Getter and Setters
	 public String getName() {
		return name;
	}

	public String getEmpId() {
		return empId;
	}

	public double getBasicSalary() {
		return basicSalary;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void setEmpId(String empId) {
		this.empId = empId;
	}

	public void setBasicSalary(double basicSalary) {
		this.basicSalary = basicSalary;
	}
	 
	//	Constructor to initialize employee object
//	public Employee(String name, String empId, double basicSalary) {
//		this.name = name;
//		this.empId = empId;
//		this.basicSalary = basicSalary;
//	}
    
    // calculate the net salary
	public double calculateNetSalary(double bonus, double tax) {
	    // Net Salary = Basic Salary + Bonus - Tax
	    return basicSalary + bonus - tax;
	}
	
	// display employee details
    public void displayDetails(double bonus, double tax) {
        System.out.println("Employee Name: " + name);
        System.out.println("Employee ID: " + empId);
        System.out.println("Basic Salary: Rs." + basicSalary);
        System.out.println("Bonus: Rs." + bonus);
        System.out.println("Tax: Rs." + tax);
        System.out.println("Net Salary: Rs." + calculateNetSalary(bonus, tax));
    }
}
