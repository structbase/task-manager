import React from "react";
import type { TaskItemProps, TaskStatus } from "../../types";

const capitalize = (str: string): string => {
    return str
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
};

export const TaskItem: React.FC<TaskItemProps> = ({
    task,
    onStatusChange,
    onDelete,
}) => {
    return (
        <div>
            <div>
                <h3>{task.title}</h3>
                <span>{capitalize(task.status)}</span>
            </div>
            <div>
                <div>
                    <span>Due: </span>
                    <span>{task.priority}</span>
                </div>
                <p>{task.description}</p>
                <div>
                    <span>Priority:</span>
                    <span>{capitalize(task.priority)}</span>
                </div>
            </div>
            <div>
                <select
                    value={task.status}
                    onChange={(e) =>
                        onStatusChange(task.id, e.target.value as TaskStatus)
                    }
                >
                    <option value="pending">Pending</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                </select>
                <button onClick={() => onDelete(task.id)}>Delete</button>
            </div>
        </div>
    );
};
