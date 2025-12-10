import React from "react";
import type { TaskItemProps, TaskStatus } from "../../types";

// helper function to capitalize words, handles hypenated strings like "in-progress"
const capitalize = (str: string): string => {
    return str
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
};

// formats date string from YYYY-MM-DD to readable format like Dec 10, 2025
const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });
};

export const TaskItem: React.FC<TaskItemProps> = ({
    task,
    onStatusChange,
    onDelete,
}) => {
    // get badge color based on task status
    const getStatusBadgeClass = (status: string): string => {
        switch (status) {
            case "pending":
                return "bg-warning text-dark";
            case "in-progress":
                return "bg-info text-dark";
            case "completed":
                return "bg-success";
            default:
                return "bg-secondary";
        }
    };

    // get badge color based on priority
    const getPriorityBadgeClass = (priority: string): string => {
        switch (priority) {
            case "high":
                return "bg-danger";
            case "medium":
                return "bg-warning text-dark";
            case "low":
                return "bg-secondary";
            default:
                return "bg-secondary";
        }
    };

    return (
        <div className="card mb-3">
            <div className="card-header d-flex justify-content-between align-items-center">
                {/* header section with task title and status badge */}
                <h5 className="card-title mb-0">{task.title}</h5>
                <span className={`badge ${getStatusBadgeClass(task.status)}`}>
                    {capitalize(task.status)}
                </span>
            </div>
            {/* task details section showing duedate, description and priority level */}
            <div className="card-body">
                <p className="card-text">{task.description}</p>
                <div className="d-flex gap-3 mb-2">
                    <div>
                        <strong>Due Date:</strong>{" "}
                        <span className="text-muted">{formatDate(task.dueDate)}</span>
                    </div>
                    <div>
                        <strong>Priority:</strong>{" "}
                        <span className={`badge ${getPriorityBadgeClass(task.priority)}`}>
                            {capitalize(task.priority)}
                        </span>
                    </div>
                </div>
                {/* action controls to update status or delete the task */}
                <div className="d-flex gap-2 mt-3">
                    <select
                        className="form-select"
                        value={task.status}
                        onChange={(e) =>
                            onStatusChange(task.id, e.target.value as TaskStatus)
                        }
                    >
                        <option value="pending">Pending</option>
                        <option value="in-progress">In Progress</option>
                        <option value="completed">Completed</option>
                    </select>
                    <button
                        className="btn btn-danger"
                        onClick={() => onDelete(task.id)}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};
