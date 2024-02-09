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
   - [David Jordan Mateus](#david-jordan-mateus)
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
Repository to work in the car rental web project. Allows users to browse and reserve vehicules, to cancel reservations, to review them and much more. 

## Installation instructions and Usage Guidelines
No installation yet. We are working on the project still. 
Issues should be added using the new default template. 
Every collaborator must have their own personal branch where they make modifications and answer to issues.

## Team Members and Roles

### Alexandre Hachey - Team lead / Full Stack
I am a software engineering student with several years of part-time and full-time work experience in the tech industry. I have worked in an Agile team
and am confident in leading my team to follow this methodology. I have worked as a Full-Stack developer touching a variety of technologies, implementing
projects using languages and frameworks such as C# .NET, Python, Typescript/Javascript, Angular, React, Golang, Zig, HTMX, and several more. My role in
this project will be to manage the task delegation and project deadlines within the team while working on features and coordinating the team.

### J. David Ruiz / Full Stack
I am a software engineering student at Concordia. I have experience in building large scale website applications using React.
I also love programming in Python and Java. I have worked at Bombardier and Intact as software developper. In this project I will be
working in the front and backend. 

### Yan Pilon - Developer / Full Stack
I am a software engineering student at Concordia who specializes in Full-Stack development using Vue.js, Express.js, Node.js and MongoDB as a main stack but who also has experience with various other languages and frameworks such as: Java, Python, C#, Angular.js and others. I will be mainly working on feature implementation but I will also be helping coordinating members who have less experience with web technologies/development.

### Mohammad Natsheh
I am a computer engineer at Concordia with experience programming in lower level languages such as x86 and arm assembly as well as java and C++. I have previously worked using the agile methodology with a previous project involving the development of an Android application. I have worked with databases including Firebase and some SQL experience. I will be working on the front end for this project using typescript.

### David Jordan Mateus
I am a software engineering student at Concordia university who over my summer intership specialized in AI, specifically in neural network creation. I have most my experience creating neural networks in python. I am also confortable using Java, JavaScript, C#, CSS and more. Due to having taking web design in the past I will also be confortable creating the website. I will be working more so on front end and design of the website.

### Rishit Mittal

## Project Approach and Technology

### Project Overview
 
#### Project Objectives
- Clearly define the goals and objectives of the project.
 
#### Scope
- Outline the scope of the project, including key features and
functionalities.
 
#### Target Audience
- Identify the intended users and their needs.
 
### Project Approach
 
#### Development Methodology
- We choose Scrum methodology with an Agile mindset. This allows to adapt quickly to changing requirements, to involve the costumer in every new version and to work in 4 sprints. We prioritize collaboration between team members and meet daily.
 
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
- The team will meet regularly in person for short amount of time (15 min). We will also meet on Fridays for longer periods (1-2 hours) to work together. Lastly, all the communication will be done through a discord server.
 
### Technology Stack
 
#### Backend Frameworks
 
##### Express Js
- Description: Express is a lightweight framework to build web applications. It helps to organize 
HTTP requests to manage the backend.
- Rationale:
  - We chose Express because it is a commonly used framework with lots of community support.
  - Esy to integrate API requests and managing our SQL relational database.
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
- Description: Brief overview of Framework B.
- Rationale:
  - Justification for choosing Framework B.
  - Consider factors such as performance, security, and
maintenance.
- Qualitative Assessment:
  - Strengths
  - Weaknesses
  - Use Cases

#### Frontend Frameworks
 
##### Vue.js 
- Description: Vue.js is a JavaScript front-end framework used for creating user interfaces with a component-based and declarative programming model.
- Rationale:
  - Since we don’t have a lot of time to develop the website, and this is a small project, we wanted a lightweight front-end framework with a small learning curve.
  - We want to be able to have reusable components and the capability for single-page applications, and those are features Vue.js was designed to provide.
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
 
- Summarize the chosen project approach and technology stack,
highlighting key reasons for the selections.
