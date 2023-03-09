const { describe } = require('node:test');
const Engineer = require('../lib/Engineer');

const Darrel = new Engineer('Darrel', '18', 'darrel@example.com', 'darrel18');

describe('Engineer', () => {
    describe("Checks for values returned with methods", () => {
        it('Should get engineer info, name, id, email', () => {
            
            expect(Darrel.getName()).toBe('Darrel');
            expect(Darrel.getId()).toBe('18');
            expect(Darrel.getEmail()).toBe('darrel@example.com');
            expect(Darrel.getGitHub()).toBe('darrel18');
        });
        test('getRole should return Engineer', () => {
            const engineer = new Engineer('Darrel', 18, 'darrel@example.com', 'darrel18');
            expect(engineer.getRole()).toBe("Engineer");
        });
    });
});