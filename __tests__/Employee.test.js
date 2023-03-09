const Employee = require('../lib/Employee.js');


    describe('Employee', () => {
        test('Should get employee information, name, id, email', () => {
            const employee = new Employee('Grant', 7, 'some@example.com');
            expect(employee.getName()).toBe('Grant');
            expect(employee.getId()).toBe(7);
            expect(employee.getEmail()).toBe('some@example.com');
        });
        test('getRole should return x', () => {
            const employee = new Employee('Grant', 7, 'some@example.com');
            expect(employee.getRole()).toBe('Employee');
        })
    });

    