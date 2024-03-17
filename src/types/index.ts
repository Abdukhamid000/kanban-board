export enum Status {
  TODO,
  DOING,
  DONE,
}

export interface ISubtask {
  title: string;
  done: boolean;
}

export interface ITask {
  id: number;
  title: string;
  status: Status;
  desc: string;
  subtasks: ISubtask[];
}

export interface IBoard {
  id: number;
  title: string;
  tasks: ITask[];
}
