const Employee = require("../lib/Employee");

describe("Employee class", () => {
    const employee = new Employee('Pam Beasley', 1 , 'pbeasley@dundermifflin.com');

    describe("User input data", () => {
        it("Should create an Employee object with a name, id, and email when input provided", () => {
            expect(employee.name).toEqual('Pam Beasley');
            expect(employee.id).toEqual(1);
            expect(employee.email).toEqual('pbeasley@dundermifflin.com');
            expect(employee.role).toEqual('Employee')
        }); 
    });

    describe("getName function", () => {
        it("Should return employee name when called", () =>{
            let name = employee.getName();
            expect(name).toEqual(employee.name);
    });
});

    describe("getId function", () => {
        it("Should return employee id when called", () => {
            let id = employee.getId();
            expect(id).toEqual(employee.id);
        });
    });

    describe("getEmail function", () => {
        it("Should return employee email when called", () => {
            let email = employee.getEmail();
            expect(email).toEqual(employee.email);
        });
    });

    describe("getRole function", () => {
        it("Should return employee role when called", () => {
            let role = employee.getRole();
            expect(role).toEqual('Employee');
        });
    });
});