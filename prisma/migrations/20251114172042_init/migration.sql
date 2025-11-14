-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "studentCode" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "school" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_school_studentCode_key" ON "User"("school", "studentCode");
