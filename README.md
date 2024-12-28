# NextAuth Session Undefined on Client-Side After Login

This repository demonstrates a bug where the NextAuth session object is undefined on the client-side after successful authentication in Next.js 13.  The issue occurs even when using `unstable_getServerSession` correctly. The solution involves ensuring proper session handling with `useSession` from `next-auth/react`.

## Steps to Reproduce

1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Log in using a provider (e.g., Github, Google). Note the server-side session works properly, but the client-side session remains undefined, causing an error on the `About` page.

## Solution

The provided solution utilizes the `useSession` hook from `next-auth/react`, which correctly retrieves and manages the client-side session.

## Technologies Used

* Next.js 13
* NextAuth.js