# Authentication

Use Clerk for all authentication in this application. Do not add or use another authentication provider, custom credential flow, or parallel session mechanism.

## Route behavior

- `/dashboard` is protected. A visitor who is not signed in must not be able to access it; send them through Clerk sign-in.
- When a signed-in user visits `/`, redirect them to `/dashboard`.
- Sign-in and sign-up must use Clerk's modal experience. Keep user-facing entry points configured to open the appropriate modal rather than showing a standalone authentication page.

## Implementation guidance

- Use the existing Clerk integration and follow its current middleware and component patterns.
- Keep authentication and authorization decisions within Clerk's supported mechanisms. Do not treat client-side visibility alone as route protection.
- Preserve the route behavior above when changing navigation, middleware, or authentication UI.