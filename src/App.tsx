import "./App.css";
import { useState } from "react";
import type { Task, TaskStatus } from "./types";
import { TaskList } from "./components/TaskList/TaskList";
import { TaskFilter } from "./components/TaskFilter/TaskFilter";

function App() {
    // initial task data with sample tasks in different states and priorities
    const [tasks, setTasks] = useState<Task[]>([
        // PENDING
        {
            id: "1",
            title: "Task 1",
            description: "Pending + Low priority",
            status: "pending",
            priority: "low",
            dueDate: "2025-12-10",
        },
        {
            id: "2",
            title: "Task 2",
            description: "Pending + Medium priority",
            status: "pending",
            priority: "medium",
            dueDate: "2025-12-11",
        },
        {
            id: "3",
            title: "Task 3",
            description: "Pending + High priority",
            status: "pending",
            priority: "high",
            dueDate: "2025-12-12",
        },

        // IN-PROGRESS
        {
            id: "4",
            title: "Task 4",
            description: "In-progress + Low priority",
            status: "in-progress",
            priority: "low",
            dueDate: "2025-12-13",
        },
        {
            id: "5",
            title: "Task 5",
            description: "In-progress + Medium priority",
            status: "in-progress",
            priority: "medium",
            dueDate: "2025-12-14",
        },
        {
            id: "6",
            title: "Task 6",
            description: "In-progress + High priority",
            status: "in-progress",
            priority: "high",
            dueDate: "2025-12-15",
        },

        // COMPLETED
        {
            id: "7",
            title: "Task 7",
            description: "Completed + Low priority",
            status: "completed",
            priority: "low",
            dueDate: "2025-12-16",
        },
        {
            id: "8",
            title: "Task 8",
            description: "Completed + Medium priority",
            status: "completed",
            priority: "medium",
            dueDate: "2025-12-17",
        },
        {
            id: "9",
            title: "Task 9",
            description: "Completed + High priority",
            status: "completed",
            priority: "high",
            dueDate: "2025-12-18",
        },
    ]);

    // filter state to track which status and priority filters are active
    const [filters, setFilters] = useState<{
        status?: TaskStatus;
        priority?: "low" | "medium" | "high";
    }>({});

    // updates a specific task's status when user changes it from the dropdown
    const handleStatusChange = (taskId: string, newStatus: TaskStatus) => {
        setTasks((prev) =>
            prev.map((task) =>
                task.id === taskId ? { ...task, status: newStatus } : task
            )
        );
    };

    // removes a task from the list when delete button is clicked
    const handleDelete = (taskId: string) => {
        setTasks((prev) => prev.filter((task) => task.id !== taskId));
    };

    // updates filter state when user changes filter controls
    const handleFilterChange = (newFilters: {
        status?: TaskStatus;
        priority?: "low" | "medium" | "high";
    }) => {
        setFilters(newFilters);
    };

    // filters tasks based on active status and priority filters, shows all if no filters set
    const filteredTasks = tasks.filter((task) => {
        const statusMatch = filters.status
            ? task.status === filters.status
            : true;
        const priorityMatch = filters.priority
            ? task.priority === filters.priority
            : true;
        return statusMatch && priorityMatch;
    });

    // main app layout with header, filter controls and task list
    return (
        <div>
            <div>
                <h1>Task Management</h1>
            </div>
            <TaskFilter onFilterChange={handleFilterChange} />
            <TaskList
                tasks={filteredTasks}
                onStatusChange={handleStatusChange}
                onDelete={handleDelete}
            />
        </div>
    );
}

export default App;
