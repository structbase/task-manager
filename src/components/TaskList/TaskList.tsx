import React from "react";
import type { TaskListProps } from "../../types";
import { TaskItem } from "../TaskItem/TaskItem";

export const TaskList: React.FC<TaskListProps> = ({
    tasks,
    onStatusChange,
    onDelete,
}) => {
    // show empty state message when there are no tasks to display
    if (tasks.length === 0) {
        return (
            <div>
                <div>No tasks found</div>
            </div>
        );
    }
    // render list of task items, each with its own controls for status and deletion
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
