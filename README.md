# @dreki-gg/pi-doc-search

Library doc-search tools for pi, powered by [Context7](https://context7.com). Bypasses MCP entirely — direct HTTP to the Context7 API with a persistent searchable cache.

Formerly published as `@dreki-gg/pi-context7`.

## Install

```bash
pi install npm:@dreki-gg/pi-doc-search
```

## Tools

| Tool | Description |
|------|-------------|
| `doc_search_resolve_library_id` | Resolve a library/package name to a Context7 library ID |
| `doc_search_get_library_docs` | Fetch curated docs by ID or name (auto-resolves) |
| `doc_search_get_cached_doc_raw` | Read full raw cached docs by docRef or semantic lookup |


## Configuration

Set env var (preferred):

```bash
export CONTEXT7_API_KEY=ctx7sk-...
```

Or create `~/.pi/agent/extensions/doc-search/config.json`:

```json
{
  "apiKey": "ctx7sk-...",
  "cache": {
    "resolveTtlHours": 168,
    "docsTtlHours": 24
  }
}
```

API key is optional — Context7 works without one but with lower rate limits.

## Cache

Stored under `~/.pi/agent/extensions/doc-search/cache/` with:
- Atomic JSON writes
- Structured indexes (by library name, version, ID, docRef)
- TTL-based expiry with stale fallback
- Automatic pruning of expired/orphaned entries
