const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
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
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events and update content.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: true
    },
        {
        subject: 'ITM',
        number: 111,
        title: 'Introduction to Database Design',
        credits: 3,
        certificate: 'Web and Computer Programming',
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
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, and basic API usage.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false
    },
    {
        subject: 'WDD',
        number: 330,
        title: 'Web Frontend Development II',
        credits: 3,
        certificate: 'Web and Computer Programming',
        description: 'Mastering vanilla JavaScript to provide a solid foundation for web development. This course focuses on pure JS without frameworks to prepare for full-stack development in WDD 430.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false
    },
    {
        subject: 'WDD',
        number: 430,
        title: 'Full Stack Web Development',
        credits: 3,
        certificate: 'Web and Computer Programming',
        description: 'This course focuses on creating complete web applications. It uses a JavaScript framework to manage both client-side and server-side development, building upon the vanilla JS skills learned in WDD 330.',
        technology: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'React'],
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


// Initial display
displayCourses(courses);