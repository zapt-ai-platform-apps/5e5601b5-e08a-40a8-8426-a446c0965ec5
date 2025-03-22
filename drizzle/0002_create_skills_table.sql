CREATE TABLE IF NOT EXISTS "skills" (
  "id" SERIAL PRIMARY KEY,
  "name" TEXT NOT NULL,
  "created_at" TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS "user_skills" (
  "user_id" UUID NOT NULL REFERENCES "users"("id") ON DELETE CASCADE,
  "skill_id" INTEGER NOT NULL REFERENCES "skills"("id") ON DELETE CASCADE,
  "created_at" TIMESTAMP DEFAULT NOW(),
  PRIMARY KEY ("user_id", "skill_id")
);