const { iteratee } = require("lodash");
const Engineer = require("../lib/Engineer");

describe ("Engineer subclass", () => {
    const engineer = new Engineer('Jim Halpert', 2, 'jhalpert@dundermifflin.com', 'BigTuna');

    describe("User input data", () => {
        it("Should create an Engineer object with name, id, email, and github username with input provided", () => {
            expect(engineer.name).toEqual("Jim Halpert");
            expect(engineer.id).toEqual(2);
            expect(engineer.email).toEqual('jhalpert@dundermifflin.com');
            expect(engineer.github).toEqual('BigTuna');
        });
    });

    describe("getGithub method", () => {
        it("Should return GitHub username when called", () => {
            let github = engineer.getGithub();
            expect(github).toEqual(engineer.github);
        });
    });

    describe("getRole method", () => {
        it("Should return 'Engineer' when called", () => {
            let role = engineer.getRole();
            expect(role).toEqual("Engineer");
        });
    });
});