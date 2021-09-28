const Manager = require("lib/Manager.js");

test("Creates a Manager", () => {
  const manager = new Manager("Conley", 23, "conley.morris@gmail.com", 6);
  expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("get employee role", () => {
  const manager = new Manager("Conley", 23, "conley.morris@gmail.com,", 6);
  expect(manager.getRole()).toEqual("Manager");
});
