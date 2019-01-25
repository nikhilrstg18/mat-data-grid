export class GridData {

    studentId: number;
    studentName: string;
    studentAddress: string;
    studentDepartment: string;
    studentScore: number;
    isMerit: boolean;

    constructor(studentId: number,
        studentName: string,
        studentAddress: string,
        studentDepartment: string,
        studentScore: number,
        isMerit: boolean
    ) {

        this.studentId = studentId;
        this.studentName = studentName;
        this.studentAddress = studentAddress;
        this.studentDepartment = studentDepartment;
        this.studentScore = studentScore;
        this.isMerit = isMerit;
    }

}