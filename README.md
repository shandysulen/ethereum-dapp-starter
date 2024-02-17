# Ethereum Dapp Starter

_Ethereum Dapp Starter is an opinionated boilerplate Next.js 14 starter kit for production-ready Ethereum dapps with a focus on edge compute/storage and end-to-end type safety. This repository is expected to evolve over time. Questions and suggestions are always welcomed._

## Stack

- [Next.js v14 w/ React Server Components (RSC)](https://nextjs.org/)
- [shadcn/ui (Radix UI + Tailwind CSS)](https://ui.shadcn.com/)
- [React Query](https://tanstack.com/query/latest)
- [React Hook Form](https://react-hook-form.com) + [Zod](https://zod.dev)
- [tRPC](https://trpc.io)
- [`wagmi` v2 React Hooks](https://wagmi.sh/) + [Connect Kit](https://docs.family.co/connectkit)
- [`iron-session (stateless cookies)`](https://github.com/vvo/iron-session)
- [Drizzle](https://orm.drizzle.team/) and [Turso](https://turso.tech/)
- [Jest](https://jestjs.io) + [Testing Library](https://testing-library.com/)

## Try it out

```bash
$ pnpm create next-app --example https://github.com/shandysulen/ethereum-dapp-starter
```

## Features

- 🌐 Edge runtime with Next.js, Vercel, and Turso
- 🦺 End-to-end type-safe APIs with tRPC
- 🏃 Monorepo-ready with `pnpm` workspaces and [Turbo](https://turbo.build/repo)
- 🎨 Theme-enabled (`next-themes`)
- 🔃 Loading bar for async operations (`nprogress`)
- 🐗 Scaffolded with [PostHog](https://posthog.com)
- 🧪 Testing configuration to work across all Typescript (.ts, .tsx) source code
- 🌀 [Lucide](https://lucide.dev/) icon library
- 🔤 Starts with [Inter](https://rsms.me/inter/) fonts
- 🧼 Opinionated [ESLint](https://eslint.org/) config extending Next.js's config
- ✨ Opinionated [Prettier]() config to sort imports and Tailwind classes
- 🐶 [Husky](https://typicode.github.io/husky/) pre-commit hook
