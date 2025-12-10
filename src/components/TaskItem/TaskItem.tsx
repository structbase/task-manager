import React from "react";
import type { TaskItemProps, TaskStatus } from "../../types";

// helper function to capitalize words, handles hypenated strings like "in-progress"
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
            {/* header section with task title and status badge */}
            <div>
                <h3>{task.title}</h3>
                <span>{capitalize(task.status)}</span>
            </div>
            {/* task details section showing duedate, description and priority level */}
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
            {/* action controls to update status or delete the task */}
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
