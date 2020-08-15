export interface Task {
  id: number;
  author: string;
  content: string;
}

export interface BoardCol {
  id: number;
  status: string;
  tasks: Task[];
}
