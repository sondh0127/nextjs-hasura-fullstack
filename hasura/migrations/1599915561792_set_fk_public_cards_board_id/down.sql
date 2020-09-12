alter table "public"."cards" drop constraint "cards_board_id_fkey",
          add constraint "cards_board_id_fkey"
          foreign key ("board_id")
          references "public"."boards"
          ("id")
          on update restrict
          on delete restrict;
