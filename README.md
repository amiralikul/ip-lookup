## Technologies Used

This project leverages a modern web development stack:

- **Vite:** For a fast and lean development experience and optimized builds.
- **React:** For building the user interface with a component-based architecture.
- **TypeScript:** For adding static typing to JavaScript, improving code quality and maintainability.
- **Tailwind CSS:** For a utility-first CSS framework that enables rapid UI development.
- **React Hook Form & Zod:** For robust and type-safe form handling and validation.
- **TanStack Query (React Query):** For managing server state, caching, and data fetching with ease.
- **Axios:** For making HTTP requests to fetch IP address data.
- **date-fns & date-fns-tz:** For manipulating and displaying dates and times, including timezone support for local time display.
- **Vitest & React Testing Library:** For unit and component testing to ensure code reliability.
- **ESLint & Prettier:** For maintaining code quality and consistent formatting.

---

## Running the Project

1.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

2.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```
    This will start the development server, typically at `http://localhost:5173`.

3.  **Run tests:**
    ```bash
    npm run test
    # or
    yarn test
    # or
    pnpm test
    ```


**Live Demo:** [ip-lookup-lovat.vercel.app](https://ip-lookup-lovat.vercel.app)

---

## UI screenshot

![UI](UI.png)


## Phase 1

- The page should be based on the attached mocks.  
- The page should include an **"Add"** button that will add a new row with a label and a textbox.  
- When the textbox loses focus, perform the search.  
- You should be able to search several IPs simultaneously.

## Phase 2

- The textbox should be **disabled while searching**.  
- Provide **client‑side input validation**.  
- While searching, show a clear indication of the **operation status**.  
- Handle errors in a **friendly way**.

## Phase 3

- Once you get the location, the textbox should be **enabled again** so the user can edit and search for different IPs.  
- Show the **local time** (`hh:mm:ss`) next to the location. The time must be real‑time and continuously updated.  
- **UI/UX quality** will be taken into account, so pay close attention to these aspects.

## Bonus

- Write **unit tests** to cover your code.  
- Set up **CI/CD**.

---
