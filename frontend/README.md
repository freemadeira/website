# Frontend

This is a pnpm monorepo managed with [Turborepo](https://turborepo.dev/docs). It contains the following workspaces:

- `apps/website` — the main website
- `packages/ui` — shared UI components
- `packages/types` — shared TypeScript types
- `packages/tailwind-config` — shared Tailwind CSS configuration
- `packages/typescript-config` — shared TypeScript configuration

## Updating packages

### Add or update a dependency in a specific workspace

```bash
# Add a new dependency
pnpm --filter <workspace> add <package>

# Add a dev dependency
pnpm --filter <workspace> add -D <package>

# Update a specific dependency to its latest version
pnpm --filter <workspace> update <package> --latest
```

Replace `<workspace>` with the package name as defined in its `package.json` (e.g. `website`, `@free/ui`).

### Check for outdated dependencies

```bash
pnpm outdated --recursive
```

### Update all dependencies across the monorepo

```bash
# Interactively update all outdated packages
pnpm update --recursive --latest --interactive

# Non-interactively update all packages to latest
pnpm update --recursive --latest
```

### Update the lockfile without changing versions

```bash
pnpm install
```

### After updating

Run the following to make sure everything still builds and type-checks:

```bash
pnpm build
pnpm check-types
pnpm lint
```
