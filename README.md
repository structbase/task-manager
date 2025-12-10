# 📋 **Task Manager**

## **Overview**

This project is a React + TypeScript application that allows users to manage and organize their tasks efficiently. Users can filter, update, and delete tasks with status tracking (pending, in-progress, completed) and priority levels (low, medium, high). The app displays task details including titles, descriptions, due dates, and provides intuitive controls for task management.

The project is structured using reusable components:

-   **TaskItem** – Displays individual task details with status badge, priority badge, due date, and action controls
-   **TaskList** – Renders the list of tasks and handles empty state
-   **TaskFilter** – Provides filtering controls for status and priority
-   **App** – Main container that manages task state and coordinates between components

---

## **Features**

### ✔ Task Status Management

Track tasks through three states: **pending**, **in-progress**, and **completed**. Each status is visually distinguished with color-coded badges (warning for pending, info for in-progress, success for completed).

### ✔ Priority Levels

Assign priority levels to tasks: **low**, **medium**, or **high**. Priority badges are color-coded (secondary for low, warning for medium, danger for high) for quick visual identification.

### ✔ Due Date Display

Each task shows its due date in a human-readable format (e.g., "Dec 10, 2025") for better planning and organization.

### ✔ Filtering System

Filter tasks by:

-   **Status** – Show only tasks with a specific status (pending, in-progress, completed)
-   **Priority** – Show only tasks with a specific priority level (low, medium, high)
-   **Combined filters** – Apply both status and priority filters simultaneously

### ✔ Status Updates

Quickly update task status using a dropdown menu directly from the task card without navigating away.

### ✔ Task Deletion

Remove tasks from the list with a single click using the delete button.

### ✔ Responsive Bootstrap Styling

Modern, responsive UI built with Bootstrap 5, featuring cards, badges, form controls, and a clean layout that works on all screen sizes.

### ✔ Real-time Updates

All changes to tasks (status updates, deletions, filtering) are reflected immediately in the UI.

---

## **Tech Stack**

-   **React** – UI library for building component-based interfaces
-   **TypeScript** – Type-safe JavaScript for better development experience
-   **Vite** – Fast build tool and development server
-   **Bootstrap 5** – CSS framework for responsive styling
-   **CSS** – Additional custom styling

---

## **How to Run**

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Visit the app in your browser at:

```
http://localhost:5173
```

---

## **File Structure**

```
.
├── README.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── public
│   └── vite.svg
├── src
│   ├── App.css
│   ├── App.tsx
│   ├── components
│   │   ├── TaskFilter
│   │   │   └── TaskFilter.tsx
│   │   ├── TaskItem
│   │   │   └── TaskItem.tsx
│   │   └── TaskList
│   │       └── TaskList.tsx
│   ├── index.css
│   ├── main.tsx
│   └── types
│       └── index.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts

6 directories, 15 files
```

---

# 📝 Reflection


To ensure unique keys for list items, I relied on each task’s `id` property so React could correctly track and update individual components. While implementing filtering, I had to make sure the logic handled both status and priority without mutating the original task list. Updating task status required creating a new array using `map()` so state changes were predictable and triggered proper re-renders. The most challenging part of conditional rendering was handling empty states and ensuring components displayed correctly based on the current filters and task properties.
