# pi Doc Search Extension

Pi-native doc-search tools backed by Context7, with direct HTTP integration and a persistent cache.

## Public tools

Primary tools:

- `doc_search_resolve_library_id`
- `doc_search_get_library_docs`
- `doc_search_get_cached_doc_raw`

## Configuration

Preferred:

```bash
export CONTEXT7_API_KEY=ctx7sk-...
```

Optional fallback file:

`~/.pi/agent/extensions/doc-search/config.json`

```json
{
  "apiKey": "ctx7sk-...",
  "cache": {
    "resolveTtlHours": 168,
    "docsTtlHours": 24
  }
}
```

## Cache

Stored under:

- `~/.pi/agent/extensions/doc-search/cache/resolve/`
- `~/.pi/agent/extensions/doc-search/cache/docs/`

The docs cache is searchable by library name, version, library ID, query, topic, and docRef.

## Reload

Once the files are in place, start pi or run:

```text
/reload
```
