CREATE TABLE "public"."cards"("id" serial NOT NULL, "description" text NOT NULL, "list_id" integer NOT NULL, "board_id" integer NOT NULL, "position" integer NOT NULL, "title" text NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") , FOREIGN KEY ("list_id") REFERENCES "public"."lists"("id") ON UPDATE restrict ON DELETE restrict, FOREIGN KEY ("board_id") REFERENCES "public"."boards"("id") ON UPDATE restrict ON DELETE restrict);
CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_public_cards_updated_at"
BEFORE UPDATE ON "public"."cards"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_cards_updated_at" ON "public"."cards" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
