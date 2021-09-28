const Engineer = require("lib/Engineer.js");

test("Creates an Engineer", () => {
  const engineer = new Engineer("Conley", 23, "conley.morris@gmail.com", 6);
  expect(intern.github).toEqual(expect.any(String));
});

test("get github value", () => {
  const engineer = new Engineer("Conley", 23, "conley.morris@gmail.com,", 6);
  expect(engineer.getGithub).toEqual(expect.stringContaining(engineer.github.toString()))
});

test("get employee role", () => {
    const engineer = new Engineer("Conley", 23, "conley.morris", 6);
    expect(engineer.getRole()).toEqual("Engineer");
  });