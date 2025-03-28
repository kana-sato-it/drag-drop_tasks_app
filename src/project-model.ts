namespace App {
  //Project Type
  enum ProjectStatus {
    Active,
    Finished,
  }

  class Project {
    constructor(
      public id: string,
      public title: string,
      public description: string,
      public manday: number,
      public status: ProjectStatus
    ) {}
  }
}
