import React from "react";
import type { TaskFilterProps, TaskStatus } from "../../types";

export const TaskFilter: React.FC<TaskFilterProps> = ({ onFilterChange }) => {
    // local state for managing the status filter dropdown, defaults to "all"
    const [statusFilter, setStatusFilter] = React.useState<TaskStatus | "all">(
        "all"
    );

    // local state for managing the priority filter dropdown, defaults to "all"
    const [priorityFilter, setPriorityFilter] = React.useState<
        "low" | "medium" | "high" | "all"
    >("all");

    // handles status dropdown changes and notifies parent with updated filter values
    const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newStatus = e.target.value as TaskStatus | "all";
        setStatusFilter(newStatus);

        onFilterChange({
            status: newStatus === "all" ? undefined : newStatus,
            priority: priorityFilter === "all" ? undefined : priorityFilter,
        });
    };

    // handles priority dropdown changes and notifies parent with updated filter values
    const handlePriorityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newPriority = e.target.value as "low" | "medium" | "high" | "all";
        setPriorityFilter(newPriority);

        onFilterChange({
            status: statusFilter === "all" ? undefined : statusFilter,
            priority: newPriority === "all" ? undefined : newPriority,
        });
    };

    // render filter controls with dropdowns for status and priority selection
    return (
        <div className="card shadow-sm mb-4">
            <div className="card-body">
                <div className="row g-3 align-items-end">
                    <div className="col-md-6">
                        <label className="form-label fw-bold mb-2">Status</label>
                        <select
                            className="form-select"
                            value={statusFilter}
                            onChange={handleStatusChange}
                        >
                            <option value="all">All Statuses</option>
                            <option value="pending">Pending</option>
                            <option value="in-progress">In Progress</option>
                            <option value="completed">Completed</option>
                        </select>
                    </div>

                    <div className="col-md-6">
                        <label className="form-label fw-bold mb-2">Priority</label>
                        <select
                            className="form-select"
                            value={priorityFilter}
                            onChange={handlePriorityChange}
                        >
                            <option value="all">All Priorities</option>
                            <option value="high">High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};
