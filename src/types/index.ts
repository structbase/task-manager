// Possible task states
export type TaskStatus = "pending" | "in-progress" | "completed";

// A single task
export interface Task {
    id: string; // unique ID
    title: string; // task title
    description: string; // task details
    status: TaskStatus; // current state
    priority: "low" | "medium" | "high"; // importance level
    dueDate: string; // due date (string format)
}

// Props for the task list component
export interface TaskListProps {
    tasks: Task[]; // all tasks
    onStatusChange: (taskId: string, newStatus: TaskStatus) => void; // update status
    onDelete: (taskId: string) => void; // delete a task
}

// Props for a single task item
export interface TaskItemProps {
    task: Task; // the task to display
    onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
    onDelete: (taskId: string) => void;
}

// Props for the filter controls
export interface TaskFilterProps {
    onFilterChange: (filters: {
        status?: TaskStatus; // filter by status
        priority?: "low" | "medium" | "high"; // filter by priority
    }) => void;
}
