# Day 1 Learnings

## Key Takeaways

### 1. Improved Understanding of Next.js Routing

- Enhanced knowledge of app routing concepts in Next.js.

### 2. Introduction to React Query

- Gained an understanding of React Query and its core functionalities.

### 3. Tailwind CSS Setup and UI Creation

- Successfully set up Tailwind CSS.
- Designed a basic user interface using Tailwind classes.

### 4. React Query Provider Setup

- Created a `ReactQueryProvider.tsx` file to manage React Query setup.
- Identified that `ReactQueryProvider` cannot be used inside `layout.tsx` because `layout.tsx` is a server component, whereas React Query operates on the client side.

### 5. Data Fetching Integration

- Implemented React Query's `get` method to fetch a list of portfolios.
- Referenced the `useFetchPortfoliosList` file for this integration.
