const courses = [
    // --- Original Courses ---

    // {
    //     subject: 'PC',
    //     number: 101,
    //     title: 'Life Skills',
    //     credits: 3,
    //     certificate: 'PathwayConnect',
    //     cat: 'GE',
    //     description: 'Develop essential life skills, such as goal setting and problem solving. Develop writing ability in organization, clarity, and audience awareness. Learn and apply basic math skills to everyday situations.',
    //     technology: ['Math', 'Writing', 'Goal Setting'],
    //     completed: true
    // },
    // {
    //     subject: 'PC',
    //     number: 102,
    //     title: 'Professional Skills',
    //     credits: 3,
    //     certificate: 'PathwayConnect',
    //     cat: 'GE',
    //     description: 'Develop necessary skills to advance career. Produce clear and professional writing. Learn to use data and math to make decisions.',
    //     technology: ['Professional Writing', 'Data Analysis'],
    //     completed: true
    // },
    // {
    //     subject: 'PC',
    //     number: 103,
    //     title: 'University Skills',
    //     credits: 1,
    //     certificate: 'PathwayConnect',
    //     cat: 'GE',
    //     description: 'Create and follow an academic plan to a bachelor’s degree. Demonstrate an understanding of local and online resources for online student success.',
    //     technology: ['Academic Planning', 'Research'],
    //     completed: true
    // },
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        cat: 'C1',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: ['Python'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        cat: 'C1',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming.',
        technology: ['HTML', 'CSS'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        cat: 'C1',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call, debug, and test their own functions.',
        technology: ['Python'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        cat: 'C1',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: ['C#'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        cat: 'C1',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events and update content.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: true
    },
    {
        subject: 'ITM',
        number: 111,
        title: 'Introduction to Databases',
        credits: 3,
        certificate: 'Web Development',
        cat: 'C2',
        description: 'This course introduces the concepts of database design and implementation, including entity-relationship modeling, normalization, and using SQL.',
        technology: ['SQL'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        cat: 'C1',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, and basic API usage.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 330,
        title: 'Web Frontend Development II',
        credits: 3,
        certificate: 'Web Development',
        cat: 'C2',
        description: 'This course will continue with the topics presented in WDD 231 Web Front-end Development I: Building websites with HTML, CSS, and Javascript. This course will have a stronger emphasis on Javascript development and mobile design as students create mobile web applications.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false
    },
    {
        subject: 'WDD',
        number: 430,
        title: 'Full Stack Web Development',
        credits: 3,
        certificate: 'Web Development',
        cat: 'C2',
        description: 'This course focuses on creating complete web applications. It uses a JavaScript framework to manage both client-side and server-side development, building upon the vanilla JS skills learned in WDD 330.',
        technology: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'React', 'NoSQL'],
        completed: false
    },

    // --- Newly Added Courses (Software Development Certificate) ---
    {
        subject: 'CSE',
        number: 212,
        title: 'Programming with Data Structures',
        credits: 2,
        certificate: 'Software Development',
        cat: 'C3',
        description: 'Introduction to data structures such as stacks, queues, linked lists, trees, and hash tables to optimize data handling.',
        technology: ['C#', '.NET'],
        completed: false
    },
    {
        subject: 'CSE',
        number: 270,
        title: 'Software Testing',
        credits: 3,
        certificate: 'Software Development',
        cat: 'C3',
        description: 'Focuses on the strategies and techniques for testing software to ensure reliability and quality.',
        technology: ['JavaScript', 'Jest'],
        completed: false
    },
    {
        subject: 'CSE',
        number: 310,
        title: 'Applied Programming',
        credits: 3,
        certificate: 'Software Development',
        description: 'Application of advanced programming concepts to solve complex real-world problems.',
        technology: ['C#'],
        completed: false
    },
    {
        subject: 'CSE',
        number: 325,
        title: '.NET Software Development',
        credits: 3,
        certificate: 'Software Development',
        cat: 'C3',
        description: 'Learning to build robust applications using the .NET framework and C#.',
        technology: ['.NET', 'C#'],
        completed: false
    },
    {
        subject: 'CSE',
        number: 340,
        title: 'Web Backend Development',
        credits: 3,
        certificate: 'Web Development',
        cat: 'C2',
        description: 'This programming course focuses on constructing dynamic web sites using server-side languages, making use of databases and design patterns. The concepts introduced in Web Frontend Development courses are expected to be continued and implemented.',
        technology: ['PHP', 'MySQL'],
        completed: false
    },
    {
        subject: 'CSE',
        number: 341,
        title: 'Web Services',
        credits: 3,
        certificate: 'Web Development',
        cat: 'C2',
        description: 'Learning to create and consume RESTful APIs and web services.',
        technology: ['Node.js', 'MongoDB'],
        completed: false
    },
    {
        subject: 'CSE',
        number: 370,
        title: 'Software Engineering Principles',
        credits: 3,
        certificate: 'Software Development',
        cat: 'C3',
        description: 'Study of the methodologies and tools used in professional software engineering environments.',
        technology: ['Agile', 'Git'],
        completed: false
    },
    // {
    //     subject: 'CSE',
    //     number: 300,
    //     title: 'Professional Readiness',
    //     credits: 3,
    //     certificate: 'Software Development',
    //     cat: 'C3',
    //     description: 'Preparing for the transition from student to professional in the tech industry.',
    //     technology: ['Soft Skills'],
    //     completed: false
    // },

    // --- Additional Required Courses ---
    // {
    //     subject: 'GS',
    //     number: 170,
    //     title: 'Career Development',
    //     credits: 1,
    //     certificate: 'General Education',
    //     cat: 'GE',
    //     description: 'Developing skills for career planning and job searching.',
    //     technology: [],
    //     completed: false
    // },
    // {
    //     subject: 'BUS',
    //     number: 321,
    //     title: 'Organizational Leadership',
    //     credits: 3,
    //     certificate: 'General Education',
    //     cat: 'GE',
    //     description: 'Understanding the principles of leadership within organizations.',
    //     technology: [],
    //     completed: false
    // },
    {
        subject: 'CSE',
        number: 499,
        title: 'Senior Project',
        credits: 3,
        certificate: 'Software Development',
        cat: 'C3',
        description: 'A capstone project where students apply all learned skills to build a significant software application.',
        technology: ['Full Stack'],
        completed: false
    }
];

// DOM Selectors
const courseContainer = document.querySelector('#course-list');
const totalCreditsDisplay = document.querySelector('#total-credits');
const courseDetails = document.querySelector('#course-details');

function displayCourses(filteredCourses) {
    // Clear the current display
    courseContainer.innerHTML = "";

    filteredCourses.forEach(course => {
        const courseCard = document.createElement("div");
        courseCard.classList.add("course-card");
        
        // Add a specific class for completed courses
        if (course.completed) {
            courseCard.classList.add("completed");
        }

        courseCard.innerHTML = `<h3>${course.subject} ${course.number}</h3>`;
        courseContainer.appendChild(courseCard);

        courseCard.addEventListener('click', () => {
            displayCourseDetails(course);
        });
    });

    // Update total credits using reduce
    const total = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
    totalCreditsDisplay.textContent = `Total Credits: ${total}`;
}


function displayCourseDetails (course) {
    courseDetails.innerHTML = `
        <button id="closeModal"> ❌ </button>
        <h2>${course.subject} ${course.number}<h2>
        <h3>${course.title}</h3>
        <p><strong>Credits</strong>: ${course.credits}</p>
        <p><strong>Certificate</strong>: ${course.certificate}</p>
        <p>${course.description}</p>
        <p><strong>Technologies</strong>: ${course.technology.join(', ')}</p>
    `;
    courseDetails.showModal();
  
    const closeBtn = document.querySelector("#closeModal");
    closeBtn.addEventListener("click", () => {
        courseDetails.close();

  });
}

// Event Listeners for Buttons
document.querySelector('#all-btn').addEventListener('click', () => displayCourses(courses));
document.querySelector('#cse-btn').addEventListener('click', () => {
    displayCourses(courses.filter(course => course.subject === 'CSE'));
});
document.querySelector('#wdd-btn').addEventListener('click', () => {
    displayCourses(courses.filter(course => course.subject === 'WDD'));
});
// This is just an extra
document.querySelector('#itm-btn').addEventListener('click', () => {
    displayCourses(courses.filter(course => course.subject === 'ITM'));
});
document.querySelector('#cert1').addEventListener('click', () => {
    displayCourses(courses.filter(course => course.cat === 'C1'));
});
document.querySelector('#cert2').addEventListener('click', () => {
    displayCourses(courses.filter(course => course.cat === 'C2'));
});
document.querySelector('#cert3').addEventListener('click', () => {
    displayCourses(courses.filter(course => course.cat === 'C3'));
});
// document.querySelector('#gen').addEventListener('click', () => {
//     displayCourses(courses.filter(course => course.cat === 'GE'));
// });
// document.querySelector('#pc-btn').addEventListener('click', () => {
//     displayCourses(courses.filter(course => course.subject === 'PC'));
// });

// Initial display
displayCourses(courses);