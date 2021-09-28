const Intern = require("lib/Intern.js");

test("Creates an Intern", () => {
  const Intern = new Intern("Conley", 23, "conley.morris@gmail.com", 6);
  expect(intern.school).toEqual(expect.any(String));
});

test("get employee school", () => {
  const Intern = new Intern("Conley", 23, "conley.morris@gmail.com,", 6);
  expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test("get employee role", () => {
    const Intern = new Intern("Conley", 23, "conley.morris", 6);
    expect(intern.getRole()).toEqual("Intern");
  });