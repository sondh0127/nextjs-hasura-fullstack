ALTER TABLE "public"."cards" ALTER COLUMN "position" TYPE integer;
ALTER TABLE "public"."cards" ADD CONSTRAINT "cards_position_key" UNIQUE ("position");
