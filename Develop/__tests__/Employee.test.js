const Employee = require('../lib/Employee.js');

const employee = new Employee('Grant', 7, 'some@example.com');
    describe('Employee', () => {
        describe()
        test('Should get employee name', () => {
         
            expect(employee.getName()).toBe(expect.any(String));
        }) 
    });
