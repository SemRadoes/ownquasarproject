export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export interface Project {
  id?: number,
  title: string,
  img: string,
  description: string,
  link: string
}