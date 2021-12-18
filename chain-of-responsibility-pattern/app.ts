import { Employee } from "./employee";
import { Boss, Manager, Staff } from "./employee-type";
import { Request } from "./request";

const staff1: Employee = new Staff();
const staff2: Employee = new Staff();
const staff3: Employee = new Staff();

const manager1: Employee = new Manager();
const manager2: Employee = new Manager();

const boss1: Employee = new Boss();

staff1.setSuperior(manager1);
staff2.setSuperior(manager2);

manager1.setSuperior(boss1);
manager2.setSuperior(boss1);

const request1: Request = new Request('Routine Errand', 0);
const request2: Request = new Request('Interview new staff', 50);
const request3: Request = new Request('Company\'s future plan ', 200);

staff1.handleRequest(request1);
console.log('-------')
staff1.handleRequest(request2);
console.log('-------')
staff1.handleRequest(request3);

console.log('------------------');

staff2.handleRequest(request1);
console.log('-------')
staff2.handleRequest(request2);
console.log('-------')
staff2.handleRequest(request3);

console.log('------------------');

staff3.handleRequest(request1);
console.log('-------')
staff3.handleRequest(request2);
console.log('-------')
staff3.handleRequest(request3);

console.log('------------------');