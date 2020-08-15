alter table "public"."feeds"
           add constraint "feeds_user_id_fkey"
           foreign key ("user_id")
           references "public"."users"
           ("id") on update restrict on delete restrict;
