import { defineStore } from "pinia";
import type { IBoard } from "@/types";

export const useBoardStore = defineStore("board", {
  state: () => ({
    boards: [
      {
        id: 1,
        title: "platform lunch",
        tasks: [
          {
            id: 1,
            desc: "aertaret",
            status: 0,
            subtasks: [{ done: false, title: "awerawer" }],
            title: "adasdasd",
          },
        ],
      },
    ] as IBoard[],
  }),
  getters: {
    getBoards: (state) => state.boards,
    getTasks: (state) => state.boards.map((el) => el.tasks),
  },
  actions: {
    createBoard(board: IBoard) {
      this.boards.push(board);
    },
  },
});
