export class ScoreRepo {

  private scoreList: StudentInfo[];

  constructor() {
    this.scoreList = [
      {
        studentName: 'user1',
        examScore: 70,
      },
      {
        studentName: 'user2',
        examScore: 36,
      },
      {
        studentName: 'user3',
        examScore: 100,
      },
      {
        studentName: 'user4',
        examScore: 40,
      },
      {
        studentName: 'user5',
        examScore: 27,
      },
      {
        studentName: 'user6',
        examScore: 86,
      },
      {
        studentName: 'user7',
        examScore: 90,
      },
    ]
  }

  public getList(): StudentInfo[] {
    return this.scoreList;
  }
}

export class ReviewSystem {
  public getPassStudentList(scoreList: StudentInfo[]): string[] {
    return scoreList.reduce((prev: string[], curr: StudentInfo): string[] => {
      if (curr.examScore >= 60) {
        prev.push(curr.studentName);
      }
      return prev;
    }, [])
  }
}

export class ModifySystem {
  public changeScore(scoreList: StudentInfo[]): StudentInfo[] {
    return scoreList.map((student): StudentInfo => {
      return {
        studentName: student.studentName,
        examScore: Math.sqrt(student.examScore) * 10,
      }
    })
  }
}

export interface StudentInfo {
  readonly studentName: string;
  readonly examScore: number;
}