import React from "react";
import type { TaskListProps } from "../../types";
import { TaskItem } from "../TaskItem/TaskItem";

export const TaskList: React.FC<TaskListProps> = ({
    tasks,
    onStatusChange,
    onDelete,
}) => {
    if (tasks.length === 0) {
        return (
            <div>
                <div>No tasks found</div>
            </div>
        );
    }
    return (
        <div>
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onStatusChange={onStatusChange}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
};
