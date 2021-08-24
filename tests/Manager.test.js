const Manager = require("../lib/Manager");

describe("Manager subclass", () => {
    const manager = new Manager ("Michael Scott", 4, "michael@scottstots.com", "555-123-4567");

    describe("User input data", () => {
        it("Should create a Manager objet with name, id, email, and office number when provided imput", () => {
            expect(manager.name).toEqual("Michael Scott");
            expect(manager.id).toEqual(4);
            expect(manager.email).toEqual("michael@scottstots.com");
            expect(manager.officeNumber).toEqual("555-123-4567");
        });
    });

    describe("getOfficeNumeber function", () => {
        it("Should return the manager's office number when called", () => {
            let officeNumber = manager.getOfficeNumber();
            expect(officeNumber).toEqual("555-123-4567");
        });
    });

    describe("getRole method", () => {
        it("Should return 'Manager' when called", () => {
            let role = manager.getRole();
            expect(role).toEqual("Manager");
        });
    });
});