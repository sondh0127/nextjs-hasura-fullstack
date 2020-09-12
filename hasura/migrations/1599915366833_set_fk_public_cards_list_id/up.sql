alter table "public"."cards" drop constraint "cards_list_id_fkey",
             add constraint "cards_list_id_fkey"
             foreign key ("list_id")
             references "public"."lists"
             ("id") on update restrict on delete cascade;
