# RanDee (รันดี)

แพลตฟอร์มตลาดนัดออนไลน์สำหรับซื้อ-ขายสินค้าในประเทศไทย

## เริ่มใช้งาน

```bash
# ติดตั้ง dependencies
pnpm install

# เปิด Docker services (Postgres, Redis, Meilisearch, MinIO)
pnpm docker:up

# คัดลอกไฟล์ environment
cp .env.example .env

# สร้าง migration และ seed ข้อมูลตัวอย่าง
pnpm db:migrate
pnpm db:seed

# รัน development server
pnpm dev
```

เปิด http://localhost:3000

## โครงสร้างโปรเจค

```
apps/
  web/          - Next.js application
  worker/       - Background jobs
packages/
  db/           - Prisma schema และ client
  core/         - Business logic, utilities
  ui/           - Design system, components
  i18n/         - ข้อความหลายภาษา
  contracts/    - API types, validation schemas
  config/       - Shared configurations
docs/
  p1-p9.md      - เอกสารสเปกครบถ้วน
  decisions/    - Architecture Decision Records
  runbooks/     - คู่มือปฏิบัติการ
docker/
  compose.dev.yml
```

## คำสั่งที่ใช้บ่อย

| คำสั่ง | ความหมาย |
|---|---|
| `pnpm dev` | รันทุก app ในโหมด development |
| `pnpm build` | Build ทุก package |
| `pnpm lint` | ESLint |
| `pnpm typecheck` | TypeScript type check |
| `pnpm test` | Unit tests |
| `pnpm e2e` | Playwright E2E tests |
| `pnpm db:migrate` | สร้างและรัน migration |
| `pnpm db:seed` | Seed ข้อมูลตัวอย่าง |
| `pnpm docker:up` | เปิด Docker services ทั้งหมด |
| `pnpm verify` | รัน lint + typecheck + test + build |

## เทคโนโลยีหลัก

- **Frontend**: Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS 4
- **Backend**: Next.js API Routes, tRPC (optional), BullMQ
- **Database**: PostgreSQL 16 + Prisma ORM
- **Search**: Meilisearch
- **Cache/Queue**: Redis
- **Storage**: S3-compatible (MinIO ใน development)
- **Payments**: Omise

## License

MIT
