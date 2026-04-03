type Grade = 'A' | 'B' | 'C' | 'D' | 'F';

type ProspectiveStudents = {
  name: String,
  equipment: string[]
}

type GradStudents = {
  name: String,
  grade: Grade
}

type UndergradStudents = {
  name: String,
  grade: Grade
}

type AbsentStudents = {
  name: string,
  equipment: string[]
  leaveDate: {
    month: number,
    year: number
  }
}

type TA = {
  equipment: string[],
  classesTheyTeach: string[]
}

type Student =  ProspectiveStudents | GradStudents 
              | UndergradStudents | AbsentStudents 
              | TA;
              

const prospectiveJeff: ProspectiveStudents = {
    name: 'Jeff',
    equipment: ['Hope and optimism', 'burgeoning fear']
}

const students: Student[] = [
]

const giveKnife = (student: Student) => {
  student.equipment.push('knife');
}