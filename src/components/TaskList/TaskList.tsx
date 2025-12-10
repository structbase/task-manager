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
            <div className="card shadow-sm">
                <div className="card-body text-center py-5">
                    <h5 className="text-muted mb-0">No tasks found</h5>
                    <p className="text-muted mt-2 mb-0">try adjusting your filters</p>
                </div>
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
