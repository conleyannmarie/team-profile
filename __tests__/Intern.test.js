const Intern = require("lib/Intern.js");

test("Creates an Intern", () => {
  const intern = new Intern("Conley", 23, "conley.morris@gmail.com", 6);
  expect(intern.school).toEqual(expect.any(String));
});

test("get employee school", () => {
  const intern = new Intern("Conley", 23, "conley.morris@gmail.com,", 6);
  expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test("get employee role", () => {
    const intern = new Intern("Conley", 23, "conley.morris", 6);
    expect(intern.getRole()).toEqual("Intern");
  });