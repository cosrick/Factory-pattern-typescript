import { ModifySystem, ReviewSystem, ScoreRepo } from "./system";

export class Facade {

  private scoreRepo: ScoreRepo;
  private reviewSystem: ReviewSystem;
  private modifySystem: ModifySystem;
  
  constructor() {
    this.scoreRepo = new ScoreRepo();
    this.reviewSystem = new ReviewSystem();
    this.modifySystem = new ModifySystem();
  }

  public modify(): string[] {
    const scoreList = this.scoreRepo.getList();
    const newScoreList = this.modifySystem.changeScore(scoreList);
    return this.reviewSystem.getPassStudentList(newScoreList);
  }

  public normal(): string[] {
    const scoreList = this.scoreRepo.getList();
    return this.reviewSystem.getPassStudentList(scoreList);
  }
}