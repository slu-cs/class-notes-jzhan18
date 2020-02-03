const Course = function(subject, number) {
  this.subject = subject;
  this.number = number;
};
const cs332 = new Course('CS', 332);
const cs364 = new Course('CS', 364);
const phys = new Course('Phys', 152);
const stat = new Course('Stat', 113);
const cs250 = new Couse('CS', 250);
const courses = [cs332, cs364, phys, stat, cs250];

const lgst = function(courses) {
  let subject = courses[0];
  for (const course in courses) {
    if (subject.number < course.number) {
      subject = course;
    }
  }
  return subject;
};

console.log(lgst);
