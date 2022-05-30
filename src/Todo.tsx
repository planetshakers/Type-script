import { FC } from "react";
import { TodoType } from "./types/todo";

export const Todo: FC<Pick<TodoType, "userId" | "title" | "completed">> = (
  props
) => {
  const { title, userId, completed = false } = props;
  const competeMark = completed ? "[完]" : "[未]";
  return <p>{`${competeMark} ${title}(ユーザー：${userId})`}</p>;
};
