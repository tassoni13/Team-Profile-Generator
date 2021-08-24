const { hasUncaughtExceptionCaptureCallback } = require("process");
const Intern = require("../lib/Intern");

describe("Intern subclass", () => {
    const intern = new Intern("Ryan Howard", 3, "rhoward@dundermifflin.com", "Scranton Community College");

    describe("User input data", () => {
        it ("Should create an Intern object with name, id, email, and school with input provided", () => {
           expect(intern.name).toEqual("Ryan Howard");
           expect(intern.id).toEqual(3);
           expect(intern.email).toEqual("rhoward@dundermifflin.com");
           expect(intern.school).toEqual("Scranton Community College"); 
        });
    });

    describe("getSchool function", () => {
        it("Should return intern's school name when called", () => {
            let school = intern.getSchool();
            expect(school).toEqual(intern.school);
        });
    });

    describe("getRole method", () => {
        it("Should return 'Intern' when called", () => {
            let role = intern.getRole();
            expect(role).toEqual("Intern");
        });
    });
});