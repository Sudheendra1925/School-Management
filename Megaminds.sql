create database megaminds

CREATE TABLE Student (
    id VARCHAR(20) PRIMARY KEY,
    password VARCHAR(20),
    name VARCHAR(30),
    class INT,
    section VARCHAR(1),
    fees INT,
    result VARCHAR(10),
    Attendance FLOAT
);

CREATE TABLE Teacher (
    Teacherid VARCHAR(20) PRIMARY KEY,
    password VARCHAR(20),
    Teachername VARCHAR(30),
    subject varchar(10)
);

CREATE TABLE salary (
    Teacherid varchar(20), 
    month VARCHAR(20),
    basicpay INT,
    allowances INT,
    deductions INT,
    FOREIGN KEY (Teacherid) REFERENCES Teacher(TeacherID)  -- Set foreign key constraint
);

create table Leaves(
Teacherid varchar(20),
remainingLeaves int,
 LeaveType varchar(30),
    leaveFrom date,
    leaveto date,
    reason varchar(100),
    FOREIGN KEY (Teacherid) REFERENCES Teacher(TeacherID)
)

)


insert into teacher values('tel101','TEL101','Sushma',"telugu")
select * from student
select * from teacher
drop table student
drop table teacher
drop table Leaves
drop table salary
insert into Student values('22r21a6771','22R21A6771','Ravi',6,'a',8000,'9gpa',0.9)