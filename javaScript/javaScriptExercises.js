const Course = function(subject, number) {
  this.subject = subject;
  this.number = number;
};
const cs332 = new Course('CS', 332);
const cs364 = new Course('CS', 364);
const phys = new Course('Phys', 152);
const stat = new Course('Stat', 113);
const cs250 = new Course('CS', 250);
const courses = [cs332, cs364, phys, stat, cs250];

const lgst = function(courses) {
  let subject = courses[0];
  for (const course of courses) {
    if (subject.number < course.number) {
      subject = course;
    }
  }
  return subject;
};

console.log(lgst(courses));

const Book = function(title, authors) {
  this.title = title;
  this.authors = authors;
};

const check = function(book, tauthor) {
  for (author of book.authors) {
    if (tauthor === author) {
      return true;
    }
  }
  return false;
};

const sample = new Book('CS', ['a', 'b', 'c']);
console.log(check(sample, 'd'));
