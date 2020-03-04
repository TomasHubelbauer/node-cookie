# Node Cookie

Demonstrates setting and reading an HTTP only cookie from a Node server.

## Status

Demonstration concluded.

## Running

`node .` to start the server.

## Testing

### Browser Address Bar

- Go to `http://localhost:8000`
- Click the *Read Cookie* link
- Compare the nonce value in the two tabs

### Browser Site

- Run the site using `npx serve .`
- Go to `http://localhost:5000`
- Click the *Read Cookie* link
- Compare the nonce value in the two tabs
- Compare the cookie entry in the developer tools of both tabs

### Client Localhost Origin, Server Legit Origin

- Run Notepad as an administrator
- Open `C:\Windows\System32\drivers\etc`
- Add `127.0.0.1 legit.com` to map `legit.com:8000` to `localhost:8000` and save
- Ping `legit.com` to validate: `ping legit.com` should say `127.0.0.1`
- Test using the above methods substituting `localhost:8000` by `legit.com:8000`
  (This includes the hardcoded URL in `index.html`)
- Notice that the developer tools do not list the cookie entry for `legit.com`

### Client Legit Origin, Server Different Legit Origin

- Run Notepad as an administrator
- Open `C:\Windows\System32\drivers\etc`
- Add `127.0.0.1 my-client.com` to map `my-client.com:5000` to `localhost:5000`
- Add `127.0.0.1 my-server.com` to map `my-server.com:8000` to `localhost:8000`
- Ping `my-client.com` and `my-server.com` to validate both hit `127.0.0.1`
- Test using the above methods substituting `localhost` (and port) as applicable
- Notice that again the cookie entry is not shown for the `my-client` host

## To-Do

### Demonstrate with a different server origin (CloudFlare Workers)

