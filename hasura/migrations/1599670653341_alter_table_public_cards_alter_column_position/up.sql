ALTER TABLE "public"."cards" ALTER COLUMN "position" TYPE numeric;
ALTER TABLE "public"."cards" DROP CONSTRAINT "cards_position_key";
