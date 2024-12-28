```javascript
// pages/about.js
import { useSession } from 'next-auth/react';

export default function AboutPage() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div>
        <p>You are not logged in. Please log in to view this page.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>About Page</h1>
      <p>This page is only accessible to logged-in users.</p>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
}
```