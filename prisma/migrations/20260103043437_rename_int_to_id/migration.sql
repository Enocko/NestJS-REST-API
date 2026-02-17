-- Rename the column from "int" to "id"
ALTER TABLE "Employee" RENAME COLUMN "int" TO "id";

-- Rename the sequence to match the new column name
ALTER SEQUENCE "Employee_int_seq" RENAME TO "Employee_id_seq";

-- Update the column to use the renamed sequence
ALTER TABLE "Employee" ALTER COLUMN "id" SET DEFAULT nextval('"Employee_id_seq"');
