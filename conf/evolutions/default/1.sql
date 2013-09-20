# --- Created by Ebean DDL
# To stop Ebean DDL generation, remove this comment and start using Evolutions

# --- !Ups

create table chapter (
  id                        bigint auto_increment not null,
  title                     varchar(255) not null,
  chapter_order             integer,
  section_id                bigint,
  constraint pk_chapter primary key (id))
;

create table chapter_to_module (
  chapter_id                bigint not null,
  module_id                 bigint,
  module_order              integer)
;

create table course (
  id                        bigint auto_increment not null,
  course_code               varchar(255),
  title                     varchar(255),
  university_id             bigint,
  constraint pk_course primary key (id))
;

create table module (
  id                        bigint auto_increment not null,
  title                     varchar(255) not null,
  content                   varchar(255) not null,
  constraint pk_module primary key (id))
;

create table section (
  id                        bigint auto_increment not null,
  title                     varchar(255) not null,
  section_order             integer,
  course_id                 bigint,
  constraint pk_section primary key (id))
;

create table university (
  id                        bigint auto_increment not null,
  name                      varchar(255) not null,
  short_name                varchar(255),
  constraint pk_university primary key (id))
;

alter table chapter add constraint fk_chapter_section_1 foreign key (section_id) references section (id) on delete restrict on update restrict;
create index ix_chapter_section_1 on chapter (section_id);
alter table chapter_to_module add constraint fk_chapter_to_module_chapter_2 foreign key (chapter_id) references chapter (id) on delete restrict on update restrict;
create index ix_chapter_to_module_chapter_2 on chapter_to_module (chapter_id);
alter table course add constraint fk_course_university_3 foreign key (university_id) references university (id) on delete restrict on update restrict;
create index ix_course_university_3 on course (university_id);
alter table section add constraint fk_section_course_4 foreign key (course_id) references course (id) on delete restrict on update restrict;
create index ix_section_course_4 on section (course_id);



# --- !Downs

SET FOREIGN_KEY_CHECKS=0;

drop table chapter;

drop table chapter_to_module;

drop table course;

drop table module;

drop table section;

drop table university;

SET FOREIGN_KEY_CHECKS=1;

