# FREE Madeira — Agent Guide

## Project overview

FREE Madeira is a Bitcoin education and adoption organisation focused on Madeira and Portugal. It organises events (conferences, summits, meetups), courses, and workshops.

This is a monorepo containing:
- `api/` — Rails API backend
- `frontend/` — pnpm + Turborepo workspace
  - `frontend/apps/website/` — public-facing Next.js website (deployed on Vercel)
  - Back office admin (Refine) — not yet started; will be internal use only and require auth

The backend is not yet deployed but will use Kamal on a VPS.

---

## Repository structure

```
/
├── api/                        # Rails API (Ruby 4.0.3)
│   ├── app/
│   │   ├── controllers/v1/     # All endpoints under the V1 namespace
│   │   ├── resources/          # Alba JSON serializers (called "resources")
│   │   ├── models/
│   │   ├── interactors/        # Business logic (Interactor pattern)
│   │   ├── jobs/
│   │   └── mailers/
│   ├── db/
│   │   └── migrate/            # Never run without permission
│   └── spec/
│       ├── fixtures/           # YAML fixtures, one file per table
│       ├── models/
│       └── requests/
└── frontend/                   # TypeScript/React (pnpm workspaces + Turborepo)
    ├── apps/
    │   └── website/            # Next.js 15, port 4010 in dev
    └── packages/
        ├── types/              # Auto-generated TypeScript types (from Typelizer)
        ├── ui/                 # Shared UI components
        └── tailwind-config/    # Shared Tailwind config
```

---

## Tech stack

### API (`api/`)
- **Ruby** 4.0.3, **Rails** 8.1 (API-only)
- **Database** — PostgreSQL, with `timestamptz` for all timestamps
- **Default timezone** — `Atlantic/Madeira`
- **JSON serialization** — Alba (`app/resources/`). Responses use **lowerCamelCase** keys.
- **TypeScript types** — Typelizer auto-generates types from Alba resources into
  `frontend/packages/types/resources`. Runs automatically in development.
- **Business logic** — Interactor pattern (`app/interactors/`)
- **Testing** — RSpec with Rails fixtures (no FactoryBot)
- **Linting** — RuboCop with rubocop-rails, rubocop-performance, rubocop-rspec, rubocop-rspec_rails
- **Deployment** — Kamal (Docker-based)

### Frontend (`frontend/`)
- **Package manager** — pnpm with workspaces
- **Build system** — Turborepo
- **Website** — Next.js 15, React 19
- **Styling** — Tailwind CSS 4, tailwind-variants, tailwind-merge
- **Linting/formatting** — Biome
- **Admin** (coming soon) — Refine, deployed on Vercel

---

## Key domain concepts

### Events
The core entity. An event has:
- `category` — string enum: `"education"`, `"community"`, `"event"`
- `language` — `"en"`, `"pt"`, or `"both"` (Portuguese and English)
- `timezone` — defaults to `Atlantic/Madeira`
- `display_time` — boolean; some events show only a date, not a specific time
- Tags — associated through the `EventTag` join model

### Tags
Used to classify events. Categories: `"format"`, `"event_type"`, `"education_type"`, `"topic"`.
Pre-seeded with values like In-person, Online, Meetup, Conference, Course, Bitcoin, Energy.

### Language
Events can be in English, Portuguese, or both. The `language` field reflects this.

---

## Commands

### API — run from `api/`

```bash
bundle install

# Tests
bundle exec rspec                               # run all specs
bundle exec rspec spec/models/event_spec.rb     # run a single file
bundle exec rspec spec/models/event_spec.rb:12  # run at a specific line

# Linting
bundle exec rubocop                             # check
bundle exec rubocop -a                          # auto-fix safe violations
bundle exec rubocop -A                          # auto-fix all violations (unsafe)

# Security
bin/brakeman --no-pager                         # Rails security scan
bin/bundler-audit                               # gem vulnerability audit

# Dev server
bundle exec rails s
```

### Frontend — run from `frontend/`

```bash
pnpm install
pnpm dev                                        # start all apps
pnpm --filter website dev                       # start only the website (port 4010)
pnpm --filter website lint                      # Biome lint
pnpm --filter website check                     # Biome lint + format
pnpm --filter website check-types               # TypeScript type check
```

---

## Code style

### Ruby/Rails
- All files use `# frozen_string_literal: true`
- Max line length: 100 characters
- Follow rules in `api/.rubocop.yml`
- Use `described_class` in specs to reference the class under test
- Use `aggregate_failures` for multiple expectations in one example

### TypeScript/React
- Linting and formatting via Biome (not ESLint/Prettier)
- Use `tailwind-variants` (tv) for component variants
- Use `tailwind-merge` for dynamic class composition

---

## Conventions

- **No migrations without permission** — never generate or run migrations without asking first.
- **Resources, not serializers** — Alba serializers live in `app/resources/` with a `Resource`
  suffix (e.g. `EventResource`). Do not call them serializers.
- **API versioning** — all controllers live under the `V1` namespace (`app/controllers/v1/`).
- **Fixtures over factories** — use Rails fixtures for test data. No FactoryBot.
- **camelCase responses** — Alba outputs lowerCamelCase globally. Do not override per-resource.
- **N+1 prevention** — always use `.includes()` when loading associations in controllers.
- **Run RuboCop after API changes** — check before finishing; auto-fix with `-a`.

---

## CI/CD

GitHub Actions (in `api/.github/workflows/ci.yml`):
- `scan_ruby` — Brakeman security scan + bundler-audit
- `lint` — RuboCop with GitHub annotations format

---

## Authentication

Not yet implemented. Planned only for the back office admin (internal use). The public website
API is open.
