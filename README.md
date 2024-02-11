# MRE-soen341projectW2024
Lab Review : 6:05pm-6:30pm

## Table of Contents
1. [Description](#description)
2. [Installation Instructions and Usage Guidelines](#installation-instructions-and-usage-guidelines)
3. [Team Members and Roles](#team-members-and-roles)
   - [Alexandre Hachey - Team lead / Full Stack](#alexandre-hachey---team-lead--full-stack)
   - [J. David Ruiz / Full Stack](#j-david-ruiz--full-stack)
   - [Yan Pilon - Developer / Full Stack](#yan-pilon---developer--full-stack)
   - [Mohammad Natsheh](#mohammad-natsheh)
   - [David Jordan Mateus - Full Stack](#david-jordan-mateus)
   - [Rishit Mittal](#rishit-mittal)
4. [Project Approach and Technology](#project-approach-and-technology)
   - [Project Overview](#project-overview)
     - [Project Objectives](#project-objectives)
     - [Scope](#scope)
     - [Target Audience](#target-audience)
   - [Project Approach](#project-approach)
     - [Development Methodology](#development-methodology)
     - [Project Timeline](#project-timeline)
     - [Collaboration and Communication](#collaboration-and-communication)
   - [Technology Stack](#technology-stack)
     - [Backend Frameworks](#backend-frameworks)
       - [Express Js](#express-js)
       - [PostgreSQL](#postgresql)
     - [Frontend Frameworks](#frontend-frameworks)
       - [Vue.js](#vuejs)
       - [Bootstrap](#bootstrap)
       - [ESLint](#eslint)
       - [Prettier](#prettier)
   - [Integration and Interoperability](#integration-and-interoperability)
     - [Backend-Frontend Integration](#backend-frontend-integration)
     - [Third-Party Services](#third-party-services)
   - [Security Considerations](#security-considerations)
   - [Conclusion](#conclusion)


## Description
Repository to work on the car rental web project. Allows users to browse and reserve vehicles, to cancel reservations, to review them and much more. 

## Installation instructions and Usage Guidelines
To get started working on this repository, you can run the following command in your terminal of choice

```shell
git clone https://github.com/GitExcited/MRE-soen341projectW2024/
```
There are no further installation instructions for the time being as the frontend and backend applications have not been initialized in the repository at the current time.

## Team Members and Roles

### Alexandre Hachey - Team lead / Full Stack
I am a software engineering student with several years of part-time and full-time work experience in the tech industry. I have worked in an Agile team
and am confident in leading my team to follow this methodology. I have worked as a Full-Stack developer touching a variety of technologies, implementing
projects using languages and frameworks such as C# .NET, Python, Typescript/Javascript, Angular, React, Golang, Zig, HTMX, and several more. My role in
this project will be to manage the task delegation and project deadlines within the team while working on features and coordinating the team.

### J. David Ruiz / Full Stack
I am a software engineering student at Concordia. I have experience in building large scale website applications using React.
I also love programming in Python and Java. I have worked at Bombardier and Intact as a software developper. In this project I will be
working in the front and backend. 

### Yan Pilon - Developer / Full Stack
I am a software engineering student at Concordia who specializes in Full-Stack development using Vue.js, Express.js, Node.js and MongoDB as a main stack but who also has experience with various other languages and frameworks such as: Java, Python, C#, Angular.js and others. I will be mainly working on feature implementation but I will also be helping coordinating members who have less experience with web technologies/development.

### Mohammad Natsheh
I am a computer engineer student at Concordia with experience programming in lower level languages such as x86 and arm assembly as well as java and C++. I have previously worked using the agile methodology with a previous project involving the development of an Android application. I have worked with databases including Firebase and some SQL experience. I will be working on the front end for this project using typescript.

### David Jordan Mateus
I am a software engineering student at Concordia University who over my summer internship specialized in AI, specifically in neural network creation. Most of my experience is in creating neural networks in Python. I am also comfortable using Java, JavaScript, C#, CSS, and more. Due to having taken web design in the past, I will also be comfortable creating the website. I will be working more so on the front end and design of the website. My goal is to make this project a learning experience and something to be proud of.

### Rishit Mittal
I am a computer engineering student at Concordia university who specialized in Machine Learning, Deep Learning, AI specifically in neural network such as CNN over my 8 month internship. I have experience using SDK with C/C++, Java, Python and lower level language such as x86 assembly. I have some experience in creating a webpage using HTML, CSS and I would be working on the front end using vue.js and would be helping out in the backend too.

## Project Approach and Technology

### Project Overview
 
#### Project Objectives
The overall goal of this project is to create a website designed to serve as a car rental platform. This platform will strive to be as user-friendly as possible with a very intuitive design/interface. Furthermore, this website will be designed using an agile work methodology. This will allow our members to develop new project management skills during the short timeframe that this website is expected to be built. Team communication will prove to be very important as we strive to work towards separate goals without inadvertently working on similar parts or breaking others' codes. 
 
#### Scope
Functionalities that will be included in our website include a browsing page for users to be able to select a car to rent during a specified time period. To manage customers, users will also be able to create profiles and store personal information such as location and credit information. Furthermore, the users will be able to place reservations on vehicles and place reviews on vehicles that have already been used.

Customers when renting a vehicle will also have a checkout process that will allow both the company and user to confirm information on their rental such as location, time period, and price. Furthermore, customers will also have access to a customer service page where they can ask questions and find our company's phone number.

Finally, the basic operations of CRUD will be implemented on the website so that information on users, reservations, and cars can be modified at will.

 
#### Target Audience
The target audience of the website is anyone over 25 years of age with a valid driver's license and insurance letting them legally rent a car. More specifically, our target audience is travelers as this is the main demographic of car renters. As such, the website is aimed to be simple and provide ease of use for foreign visitors. To accomplish this, easy-to-understand navigation on the site as well as currency conversion will be implemented.

 
### Project Approach
 
#### Development Methodology
- We chose Scrum methodology with an Agile mindset. This allows to adapt quickly to changing requirements, to involve the costumer in every new version and to work in 4 sprints. We prioritize collaboration between team members and meet daily.
 
#### Project Timeline
- Sprint 1 - February 12
  - Decide framework
  - Populate Team Members and Roles readme
  - Populate Approach and Technology readme
  - Create 6 user stories
  - Work on team log and wiki
  - Plan Sprint 2
- Sprint 2 - March 11
  - Implement UI on frontend app
  - Introduce API routes in backend
  - Introduce Database controls in backend
  - Plan Sprint 3
- Sprint 3 - March 25
  - Will be updated during Sprint 2's future sprint planning session
- Sprint 4 - April 10
  - Will be updated during Sprint 3's future sprint planning session
 
#### Collaboration and Communication
- The team will meet regularly in person for shorts amount of time (15 min). We will also meet on Fridays for longer periods (1-2 hours) to work together. Lastly, all the communication will be done through a discord server.
 
### Technology Stack
 
#### Backend Frameworks
 
##### Express Js
- Description: Express is a lightweight framework to build web applications. It helps to organize 
HTTP requests to manage the backend.
- Rationale:
  - We chose Express because it is a commonly used framework with lots of community support.
  - Easy to integrate API requests and managing our SQL relational database.
  - Scales well with large user bases
- Qualitative Assessment:
  - Strenghts:
    - Simple, easy to use and learn.
    - Organizing API is straightforward.
    - Good Performance.
  - Weaknesses
    - Limitations require additional libraries
    - Requires lots of decisions regarding structure of database to be scalable
  - Use Cases
   - Web development 
   - Single page application
   - Prototyping
 
##### PostgreSQL
- Description: PostGreSQL is a relational database management system.
- Rationale:
  - PostGreSQL is easy to integrate with express.js because of available node modules made to interface with PostGreSQL databases.
  - PostGreSQL provides security features such as role-based access control, SSL encryption and more.
- Qualitative Assessment:
  - Strengths: PostGreSQL is known to be reliable and extensible.
  - Weaknesses: PostGreSQL can require a lot of ressources if it is scaled up.
  - Use Case: Storing user information for websites.

##### Jest
- Description: Jest is a JavaScript testing framework designed to ensure correctness of any JavaScript/Typescript codebase. It allows for easy setup and execution of tests, and is designed to be used with React, Angular, and Vue.js.
- Rationale:
  - Jest is designed to be used with Vue.js, which is our chosen front-end framework. It has a large community of users, which means that it is well-documented and has a lot of support available.
- Qualitative Assessment:
  - Strengths: Easy to set up and use, large community of users, well-documented, designed to be used with Vue.js.
  - Weaknesses: Requires setup, and writing tests can become very verbose.
  - Use Cases: Testing Code to ensure functionality. 

#### Frontend Frameworks
 
##### Vue.js 
- Description: Vue.js is a JavaScript front-end framework used for creating user interfaces with a component-based and declarative programming model.
- Rationale:
  - Since we don’t have a lot of time to develop the website, and this is a small project, we wanted a lightweight front-end framework with a small learning curve.
  - We want to be able to have reusable components and the capability for single-page applications which are features Vue.js was designed to provide.
- Qualitative Assessment:
  - Strengths: Small learning curve, Code reusability, Versatility, TypeScript support.
  - Weaknesses: Less community support than competing front-end frameworks.
  - Use Cases: Building User Interfaces.
 
##### Bootstrap 
- Description: Bootstrap is a CSS framework with pre-built CSS classes and animations.
- Rationale:
  - Helps us speed up the development time and have a consistent UI style.
- Qualitative Assessment:
  - Strengths: Reusability.
  - Weaknesses: Less fine-grain control.
  - Use Cases: Adding style to a website.

##### ESLint
- Description: ESLint is a code analysis tool to find errors in our typescript code and enforce rules on code quality
- Rationale:
  - Having consistent rules for coding style and not allowing code to break these rules will save time for developers that must re-read their code or read other developers code.
- Qualitative Assessment:
  - Strengths: Makes reading written code easier, enforces a consistent style
  - Weaknesses: Can slow down development time initially and requires configuration
  - Use Cases: Enforcing consistency in code quality and fixing errors

##### Prettier
- Description: Prettier is a code formatter that enforces a consistent style by parsing code and re-printing it with its own rules.
- Rationale:
  - It ensures that all outputted code conforms to a consistent style. This means less time is spent discussing code style in code review, allowing developers to focus on the content and logic of the code rather than the format.
- Qualitative Assessment:
  - Strengths: Ensures consistency across the codebase, supports many languages and frameworks, integrates with the development environment, reduces time spent on formatting during code reviews.
  - Weaknesses: Requires initial setup and configuration, may not conform with all developers wishes for the coding style.
  - Use Cases: Automated code formatting in projects to maintain code quality and readability, reducing manual efforts in maintaining code style guidelines.

### Integration and Interoperability
 
#### Backend-Frontend Integration
- The front-end and back-end will be communicating through a restful API with various endpoints using Json formatting for the request bodies. The server and databases will both be hosted on the same machine and the server will access the database through the node.js runtime on the local host.

 
#### Third-Party Services
- Identify any third-party services or APIs that will be
integrated into the project.
 
###	Security Considerations
- We will be storing all our user data on our own database, and we will hash and salt our user information to ensure any data leaks are not compromising.

### Conclusion
- In conclusion, the car rental web project outlined in this repository is poised to deliver a user-friendly platform with a robust set of features to meet the needs of its target audience. The team brings a diverse skill set, with each member having significant experience in various aspects of software development.
- The chosen development methodology, Scrum with an Agile mindset, sets the project on a path of adaptability and collaboration. The project timeline, divided into sprints, ensures a focused and iterative approach to development. Regular meetings and effective communication through a Discord server further enhance collaboration among team members.
- The technology stack, carefully selected for both the backend and frontend, reflects a thoughtful consideration of factors such as simplicity, scalability, and community support. Express.js for the backend provides a lightweight and scalable framework, while Vue.js for the frontend balances a small learning curve with code reusability.
- The team's emphasis on security considerations, such as hashing and salting user information, reflects a commitment to safeguarding user data. Additionally, the integration and interoperability plan, using a restful API for communication between frontend and backend, ensures a seamless user experience.
- With a clear scope encompassing user profiles, reservations, reviews, and customer service, the project aims to fulfill the needs of travelers seeking a hassle-free car rental experience. The inclusion of a check-out process and CRUD operations adds further functionality to the platform.
- In summary, the car rental web project's well-defined objectives, strategic approach, and carefully chosen technology stack position it for success. As the team progresses through its planned sprints, it is anticipated that the platform will evolve into a robust and user-friendly solution for car rental needs.
