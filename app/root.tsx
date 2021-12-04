import { LiveReload, Outlet } from 'remix';

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <title>Remix: So great, it's funny</title>
      </head>
      <body>
        <Outlet />
        {process.env.NODE_ENV === 'development' ? <LiveReload /> : null}
      </body>
    </html>
  );
}

