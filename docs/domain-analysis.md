# Domain Analysis

Last updated: June 5, 2026

## Production domain

`https://shoreline-pod.com` is now the production domain for the Shoreline
website.

## Verified state

Checks run from `/Users/enzo/Projects/shoreline-site` on June 5, 2026:

- `curl -I https://shoreline-pod.com` returned `HTTP/2 200`.
- The TLS certificate matched `shoreline-pod.com`.
- The certificate issuer was Let's Encrypt.
- `vercel domains inspect shoreline-pod.com` showed the domain under
  `enzo-design-prisms-projects`.
- The domain uses Vercel nameservers:
  - `ns1.vercel-dns.com`
  - `ns2.vercel-dns.com`
- `vercel alias ls` showed `shoreline-pod.com` mapped to the latest Shoreline
  production deployment.

## Project mapping

- Vercel project: `enzo-design-prisms-projects/shoreline-site`
- GitHub repo: `https://github.com/enzo-prism/shoreline-site`
- Production domain: `https://shoreline-pod.com`
- Secondary Vercel alias: `https://shoreline-site-lac.vercel.app`

## SEO and metadata decision

The custom domain should be the canonical URL. The site metadata should use:

- `og:url`: `https://shoreline-pod.com`
- `og:image`: `https://shoreline-pod.com/assets/images/shoreline-banner.png`
- canonical link: `https://shoreline-pod.com`

The Vercel alias can remain useful for diagnostics, but it should not be the
canonical public URL.

## Follow-up

`https://www.shoreline-pod.com` was not production-safe during verification. It
returned a TLS certificate mismatch. If the `www` hostname should work, add it
to the Vercel project and redirect it to the apex domain.
