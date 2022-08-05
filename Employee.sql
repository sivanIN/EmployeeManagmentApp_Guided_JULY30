create database NPCI;
use NPCI;
create table employee(empno int Primary key AUTO_INCREMENT,ENAME text,JOB text ,HIREDATE Date,MANAGERID int ,SALARY int ,commission int ,DEPTNO int ,foreign key (DEPTNO)  references department(DEPTNO));
-- drop table employee;
insert into employee (ENAME ,JOB ,HIREDATE ,MANAGERID ,SALARY  ,commission ,DEPTNO )
values("Ravi","Developer","2021-03-09",102,30000,200,501);
desc employee;

select * from employee;
create table department(DEPTNO int primary key,DNAME text,LOC text);
insert into department values(503,"Operations","Chennai");
desc department;
select * from department;