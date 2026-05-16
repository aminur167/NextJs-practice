# Next.js Practice

A focused learning project built with the Next.js App Router. The application explores nested routes, dynamic route segments, shared layouts, client navigation state, server-side data fetching, Tailwind CSS, and daisyUI components.

## Features

- App Router based page structure under `src/app`
- Shared root layout with a reusable responsive navbar
- Active navigation highlighting with `usePathname`
- Nested dashboard layout with sidebar navigation
- Static pages for home, about, contact, support, and dashboard sections
- Dynamic blog detail pages using route parameters
- Users listing and user details fetched from JSONPlaceholder
- Tailwind CSS v4 styling with daisyUI components
- React Compiler enabled in the Next.js configuration

## Tech Stack

- Next.js 16
- React 19
- Tailwind CSS 4
- daisyUI 5
- ESLint 9

## Routes

| Route | Description |
| --- | --- |
| `/` | Home page |
| `/about` | About page |
| `/about/developers` | Developers page |
| `/about/designers` | Designers page |
| `/contact` | Contact page |
| `/contact/support` | Support page |
| `/blogs` | Blog list page |
| `/blogs/[blogId]` | Dynamic blog details page |
| `/users` | Users list fetched from JSONPlaceholder |
| `/users/[userId]` | Dynamic user details page |
| `/dashboard` | Dashboard page with nested layout |
| `/dashboard/revenue` | Revenue page |
| `/dashboard/profile` | Profile page |

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

```bash
npm run dev
```

Runs the app in development mode.

```bash
npm run build
```

Creates a production build.

```bash
npm run start
```

Starts the production server after a build.

```bash
npm run lint
```

Runs ESLint checks.

## Project Structure

```text
src/
  app/
    about/
    blogs/
    contact/
    dashboard/
    users/
    globals.css
    layout.js
    page.js
  components/
    Navbar.jsx
```

## Data Source

The users pages use the public JSONPlaceholder API:

```text
https://jsonplaceholder.typicode.com/users
```

## Learning Goals

This project is intended to practice core Next.js concepts, including routing, layouts, dynamic segments, client components, server components, data fetching, and component-based UI styling.
