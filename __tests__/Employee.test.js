const Employee = require('../lib/Employee.js');

const employee = new Employee('Grant', 7, 'some@example.com');
    describe('Employee', () => {
        test('Should get employee information, name, id, email', () => {
         
            expect(employee.getName()).toBe('Grant');
            expect(employee.getId()).toBe(7);
            expect(employee.getEmail()).toBe('some@example.com');
        });
    });

