alter table "public"."lists" drop constraint "lists_board_id_fkey",
          add constraint "lists_board_id_fkey"
          foreign key ("board_id")
          references "public"."boards"
          ("id")
          on update restrict
          on delete restrict;
