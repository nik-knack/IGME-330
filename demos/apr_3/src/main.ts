type Grade = 'A' | 'B' | 'C' | 'D' | 'F';

const increaseLetterGrade = (grade:Grade) => {
  if (grade === 'A') {
    return grade;
  }
  if (grade === 'B') {
    return 'A';
  }
  if (grade === 'C') {
    return 'B';
  }
  if (grade === 'D') {
    return 'C';
  }
  if (grade === 'F') {
    return 'D';
  }
}

type ProspectiveStudents = {
  kind: 'prospective',
  name: string,
  equipment: string[]
}

type GradStudents = {
  kind: 'grad',
  name: string,
  grade: Grade
}

type UndergradStudents = {
  kind: 'undergrad',
  name: string,
  grade: Grade
}

type AbsentStudents = {
  kind: 'absent',
  name: string,
  equipment: string[]
  leaveDate: {
    month: number,
    year: number
  }
}

type TA = {
  kind: 'ta',
  equipment: string[],
  classesTheyTeach: string[]
}

type Student =  ProspectiveStudents | GradStudents 
              | UndergradStudents | AbsentStudents 
              | TA;
              

const prospectiveJeff: ProspectiveStudents = {
  kind: 'prospective',
  name: 'Jeff',
  equipment: ['Hope and optimism', 'burgeoning fear']
}

const students: Student[] = [
]

const boostGrade = (student: Student) => {
  switch (student.kind) {
    case 'prospective': {
      return student;
    }
    case 'absent': {
      return student;
    }
    case 'undergrad': {
      student.grade = increaseLetterGrade(student.grade);
      return student;
    }
    case 'grad': {
      student.grade = increaseLetterGrade(student.grade);
      return student;
    }
    case 'ta': {
      return student;
    }
  }
}