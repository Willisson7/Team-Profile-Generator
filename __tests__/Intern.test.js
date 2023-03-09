const { describe } = require('node:test');
const Intern = require('../lib/Intern');
const Shelly = new Intern('Shelly', '19', 'Shelly@email.com', 'UofA');

    describe('Intern', () => {
        describe("Checks for values returned with methods", () => {
        
            it('Should get Intern information, name, id, email, school', () => {
             
                expect(Shelly.getName()).toBe('Shelly');
                expect(Shelly.getId()).toBe('19');
                expect(Shelly.getEmail()).toBe('Shelly@email.com');
                expect(Shelly.getSchool()).toBe('UofA');
            });
            test('getRole should return Intern', () => {
                const intern  = new Intern('Shelly', 19, 'shelly@email.com');
                expect(intern.getRole()).toBe("Intern");
            });
        });
    });