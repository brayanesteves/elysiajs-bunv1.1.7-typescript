# Elysia with Bun runtime

## Getting Started
To get started with this template, simply paste this command into your terminal:
```bash
bun create elysia ./elysia-example
```

## Development
To start the development server run:
```bash
bun run dev
```

## Commands line
Use database sqlite
```bash
bunx prisma init --datasource-provider sqlite
```
Create table
```bash
bunx prisma migrate dev
```

Open http://localhost:3000/ with your browser to see the result.