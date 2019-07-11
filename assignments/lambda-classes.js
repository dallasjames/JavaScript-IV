// CODE here for your Lambda Classes
class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
    }
}

class Instructor extends Person {
    constructor(sibling1Attributes) {
        super(sibling1Attributes);
        this.specialty = sibling1Attributes.specialty;
        this.favLanguage = sibling1Attributes.favLanguage;
        this.catchPhrase = sibling1Attributes.catchPhrase;
    }
        demo(subject) {
            console.log(`Today we are learning about ${subject}.`);
        }
        grade(student, subject) {
            console.log(`${student.name} gets a perfect score on ${subject}`);
        }
}

class Student extends Person {
    constructor(sibling2Attributes) {
        super(sibling2Attributes);
        this.previousBackground = sibling2Attributes.previousBackground;
        this.className = sibling2Attributes.className;
        this.favSubjects = sibling2Attributes.favSubjects;
    }
    listsSubjects() {
        console.log(`${this.favSubjects}`);
    }
    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge() {
        console.log(`${this.name} has begun a sprint challenge on ${this.subject}`);
    }
}

class ProjectManager extends Instructor {
    constructor(childAttributes) {
        super(childAttributes);
        this.gradClassName = childAttributes.gradClassName;
        this.favInstructor = childAttributes.favInstructor;
    }
    standUp() {
        console.log(`${ProjectManager.name} announces to channel, @channel standy times!`);
    }
    debugsCode(student, subject) {
        console.log(`${ProjectManager.name} debugs ${student.name}'s code on ${subject}`)
    }
}

const Dallas = new Student({
    name: "Dallas",
    age: 20,
    location: "Boise, ID",
    previousBackground: "Unix, MS-DOS, Python, HTML, CSS, JS, Ruby",
    className: "WEBPT8",
    favSubjects: "CSS, JavaScript",
});

const Kierran = new Instructor({
    name: "Kierran",
    age: 30,
    location: "Unknown",
    specialty: "OOP",
    favLanguage: "C",
    catchPhrase: "Let's take a break.",
});

const Jason = new ProjectManager ({
    name: "Jason",
    age: 30,
    location: "Jersey",
    specialty: "React",
    favLanguage: "JavaScript",
    catchPhrase: "Any problems?",
    gradClassName: "WEB3 or something like that",
    favInstructor: "IDK",
});

console.log(Dallas);
Dallas.speak();
Dallas.listsSubjects();
Dallas.PRAssignment("stuff");
console.log(Kierran);
Kierran.speak();
Kierran.demo("stuff");
Kierran.grade(Dallas, "stuff");
console.log(Jason);
Jason.speak();
Jason.standUp();
Jason.debugsCode(Dallas, "stuff")