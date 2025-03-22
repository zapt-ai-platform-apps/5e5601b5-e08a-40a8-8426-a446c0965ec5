CREATE TABLE IF NOT EXISTS "course_categories" (
  "id" SERIAL PRIMARY KEY,
  "name" TEXT NOT NULL,
  "created_at" TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS "courses" (
  "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  "title" TEXT NOT NULL,
  "description" TEXT NOT NULL,
  "instructor_id" UUID NOT NULL REFERENCES "users"("id"),
  "category_id" INTEGER NOT NULL REFERENCES "course_categories"("id"),
  "level" TEXT NOT NULL,
  "duration" INTEGER NOT NULL, -- in minutes
  "price" DECIMAL(10, 2) DEFAULT 0.00,
  "image_url" TEXT,
  "created_at" TIMESTAMP DEFAULT NOW(),
  "updated_at" TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS "course_enrollments" (
  "course_id" UUID NOT NULL REFERENCES "courses"("id") ON DELETE CASCADE,
  "user_id" UUID NOT NULL REFERENCES "users"("id") ON DELETE CASCADE,
  "enrolled_at" TIMESTAMP DEFAULT NOW(),
  "completed" BOOLEAN DEFAULT FALSE,
  "completion_date" TIMESTAMP,
  PRIMARY KEY ("course_id", "user_id")
);