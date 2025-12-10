import React from "react";
import type { TaskFilterProps, TaskStatus } from "../../types";

export const TaskFilter: React.FC<TaskFilterProps> = ({ onFilterChange }) => {
    const [statusFilter, setStatusFilter] = React.useState<TaskStatus | "all">(
        "all"
    );

    const [priorityFilter, setPriorityFilter] = React.useState<
        "low" | "medium" | "high" | "all"
    >("all");

    const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newStatus = e.target.value as TaskStatus | "all";
        setStatusFilter(newStatus);

        onFilterChange({
            status: newStatus === "all" ? undefined : newStatus,
            priority: priorityFilter === "all" ? undefined : priorityFilter,
        });
    };

    const handlePriorityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newPriority = e.target.value as "low" | "medium" | "high" | "all";
        setPriorityFilter(newPriority);

        onFilterChange({
            status: statusFilter === "all" ? undefined : statusFilter,
            priority: newPriority === "all" ? undefined : newPriority,
        });
    };

    return (
        <div>
            <div>
                <label>Status</label>
                <select value={statusFilter} onChange={handleStatusChange}>
                    <option value="all">All Statuses</option>
                    <option value="pending">Pending</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                </select>
            </div>

            <div>
                <label>Priority</label>
                <select value={priorityFilter} onChange={handlePriorityChange}>
                    <option value="all">All Priorities</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                </select>
            </div>
        </div>
    );
};
