# StudentDataManagementSystem

Demo video Link: https://drive.google.com/file/d/1syHbt6whFwtJGXvNylG4zD2wfdn3n72G/view?usp=sharing


Our Student Management System is a comprehensive digital platform designed to streamline and enhance the educational experience for students, faculty, and administrators. In today's educational landscape, efficient data management and easy access to information are essential for the success of educational institutions. This system addresses these needs by offering a user-friendly interface and a range of modules tailored to meet the unique requirements of different stakeholders.

Objectives:
- Provide a secure and efficient login system for students, faculty, and administrators, ensuring that each user has access to the relevant features and data.
- Enable students to manage their academic journey by offering modules such as Academics, Course Planning Assistant, and Profile.
- Empower faculty members with tools to manage their courses and track student progress while adhering to privacy regulations.
- Give administrators the ability to maintain student records in compliance with FERPA (Family Educational Rights and Privacy Act) and oversee the system's overall functionality.

Features:

1. User Authentication:
User authentication is a fundamental feature of our system, ensuring that only authorized individuals (students, faculty, and administrators) can access their respective accounts. This feature provides a secure login process using User ID and Password, safeguarding sensitive student information.

2. Profile Management:
Profile management allows students, faculty, and administrators to maintain their personal information. Students can manage professional information, and administrators can oversee user accounts and roles. This feature ensures that user profiles are always current and accurate.

3. Real-time Notifications: 
Real-time notifications keep all stakeholders informed about important events and updates within the system. For students, this can include notifications about class changes, assignment deadlines, and announcements. Faculty members receive updates on course-related activities, while administrators are alerted to system events or issues, ensuring everyone stays well-informed and up-to-date.

4. Course Planning Assistant:
The Course Planning Assistant feature assists students in planning their academic journey effectively. It provides course recommendations based on academic requirements. This feature aids students in making informed decisions about their course selections, ensuring a well-structured and personalized educational path.

5. Grade Submission by Faculty: 
One of the important features tailored for faculty members within our Student Management System is the Grade Upload and Management functionality. This feature empowers faculty with a streamlined and efficient process for recording and managing student grades, fostering a transparent and organized approach to academic assessment.


Installation:

For Client:

Go to client directory: cd client

1. npm i

For Server:

1. pip install requirements.txt

To run the Client:

Go to client directory: cd client

1. run envoy : envoy --config-path /src/enoy.yaml - Keep it running

2. run client: npm start

To run Server:

Go to back-end directory: cd back-end

1. run server: python server.py


Stakeholder:
Students
Professors
Admin

Functional and Non-functional Requirements:

Functional:

Student Registration and login
Admin Access
Professor login
Student profile edit feature
Upload grades
Students view grades, download transcript
Professors upload grades
Course Registration
Student add, drop classes ( consider add/drop deadline; verify eligibility and time clash)
Professor add course details( any edit after -> need to contact admin)
Requirements validation, tentative plan
 IT Support (?)
Finances(?)
Meal plan(?)
Grade calculator(?)
Exam schedule clash resolution(?)


User Story

//Pending

Tech Stack:

Front End: React ts Redux node, express

Backend: Python MongoDB


10/10: Project ideation









