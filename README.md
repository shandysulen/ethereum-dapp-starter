# Ethereum Dapp Starter

_Ethereum Dapp Starter is an opinionated boilerplate Next.js 14 starter kit for production-ready Ethereum dapps with a focus on edge compute/storage and end-to-end type safety. This repository is expected to evolve over time. Questions and suggestions are always welcomed._

## Stack

- [Next.js v14 w/ React Server Components (RSC)](https://nextjs.org/)
- [shadcn/ui (Radix UI + Tailwind CSS)](https://ui.shadcn.com/)
- [React Query](https://tanstack.com/query/latest)
- [React Hook Form](https://react-hook-form.com) + [Zod](https://zod.dev)
- [tRPC](https://trpc.io)
- [`wagmi` React Hooks](https://wagmi.sh/) + [Rainbow Kit](https://www.rainbowkit.com/)
- [`iron-session (stateless cookies)`](https://github.com/vvo/iron-session/tree/v8)
- [Drizzle](https://orm.drizzle.team/) and [Turso](https://turso.tech/)
- [Jest](https://jestjs.io) + [Testing Library](https://testing-library.com/)

## Try it out

```bash
$ pnpx create-next-app --example https://github.com/shandysulen/ethereum-dapp-starter
```

## Features

🌐 Edge runtime with Next.js, Vercel, and Turso
🦺 End-to-end type-safe APIs with tRPC
🐗 Scaffolded with [PostHog](https://posthog.com)
🧪 Testing configuration to work across functions and React components
🔤 Starts with [Inter](https://rsms.me/inter/) fonts
💨 [Turbo](https://turbo.build/repo)-powered
🧼 Opinionated [ESLint](https://eslint.org/) config extending Next.js's config
✨ Opinionated [Prettier]() config to sort imports and Tailwind classes
🐶 [Husky](https://typicode.github.io/husky/) pre-commit hook
