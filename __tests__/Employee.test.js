const Employee = require("lib/Employee.js");

test("Creates an Employee", () => {
  const employee = new Employee("Conley", 23, "conley.morris@gmail.com", 6);
  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

test("get employee name ", () => {
  const employee = new Employee("Conley", 23, "conley.morris@gmail.com,", 6);
  expect(employee.getName()).toEqual(expect.any(String));
});

test("get employee id", () => {
    const employee = new Employee("Conley", 23, "conley.morris@gmail.com,", 6);
    expect(employee.getId()).toEqual(expect.any(Number));
  });

  test("get employee email", () => {
    const employee = new Employee("Conley", 23, "conley.morris@gmail.com,", 6);
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
  });

test("get employee role", () => {
    const employee = new Employee("Conley", 23, "conley.morris", 6);
    expect(employee.getRole()).toEqual("Employee");
  });