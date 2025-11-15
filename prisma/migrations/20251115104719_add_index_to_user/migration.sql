-- AlterTable
ALTER TABLE "users" ADD COLUMN     "password" TEXT;

-- CreateIndex
CREATE INDEX "users_school_studentCode_idx" ON "users"("school", "studentCode");

-- CreateIndex
CREATE INDEX "users_email_idx" ON "users"("email");
