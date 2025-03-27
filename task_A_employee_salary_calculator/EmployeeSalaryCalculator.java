package task_A_employee_salary_calculator;

import java.util.Scanner;

public class EmployeeSalaryCalculator {
	public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // Creating an Employee Object
        Employee emp1 = new Employee(); // Constructor
        
        // Taking input from the user
        System.out.print("Enter the employee's name: ");
        String name = sc.nextLine();

        System.out.print("Enter the employee's ID: ");
        String empId = sc.nextLine();

        System.out.print("Enter the basic salary: Rs.");
        double basicSalary = sc.nextDouble();

        System.out.print("Enter the bonus amount: Rs.");
        double bonus = sc.nextDouble();

        System.out.print("Enter the tax amount: Rs.");
        double tax = sc.nextDouble();

        // Initializing the employee object using Setters
        emp1.setName(name);
        emp1.setEmpId(empId);
        emp1.setBasicSalary(basicSalary);

        // Display the employee salary details
        emp1.displayDetails(bonus, tax);

        sc.close();
    }
}
