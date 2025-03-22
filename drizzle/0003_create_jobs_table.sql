CREATE TABLE IF NOT EXISTS "job_categories" (
  "id" SERIAL PRIMARY KEY,
  "name" TEXT NOT NULL,
  "created_at" TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS "jobs" (
  "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  "user_id" UUID NOT NULL REFERENCES "users"("id") ON DELETE CASCADE,
  "title" TEXT NOT NULL,
  "company" TEXT NOT NULL,
  "description" TEXT NOT NULL,
  "requirements" TEXT,
  "location" TEXT NOT NULL,
  "job_type" TEXT NOT NULL,
  "salary" TEXT,
  "category_id" INTEGER REFERENCES "job_categories"("id"),
  "deadline" TIMESTAMP,
  "created_at" TIMESTAMP DEFAULT NOW(),
  "updated_at" TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS "job_applications" (
  "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  "job_id" UUID NOT NULL REFERENCES "jobs"("id") ON DELETE CASCADE,
  "user_id" UUID NOT NULL REFERENCES "users"("id") ON DELETE CASCADE,
  "cover_letter" TEXT,
  "status" TEXT NOT NULL DEFAULT 'pending',
  "created_at" TIMESTAMP DEFAULT NOW(),
  "updated_at" TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS "job_skills" (
  "job_id" UUID NOT NULL REFERENCES "jobs"("id") ON DELETE CASCADE,
  "skill_id" INTEGER NOT NULL REFERENCES "skills"("id") ON DELETE CASCADE,
  PRIMARY KEY ("job_id", "skill_id")
);