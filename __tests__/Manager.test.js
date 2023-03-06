const { describe } = require('node:test');
const Manager = require('../lib/Manager');
const Greg = new Manager('Greg', '17', 'greg@email.com', '117');

    describe('Manager', () => {
        describe("Checks for values returned with methods", () => {
        
            it('Should get manager information, name, id, email', () => {
             
                expect(Greg.getName()).toBe('Greg');
                expect(Greg.getId()).toBe('17');
                expect(Greg.getEmail()).toBe('greg@email.com');
                expect(Greg.getOfficeNumber()).toBe('117');
            });
        });
    });