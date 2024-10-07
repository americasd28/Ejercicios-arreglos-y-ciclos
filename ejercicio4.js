
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
student1Courses.forEach(course => {
    if (student2Courses.includes(course)) {
        console.log(course);
    }
});
