package controllers;

import controllers.helpers.JsonController;
import models.Course;
import models.Section;
import play.mvc.Result;

import java.sql.SQLDataException;

/**
 * Created with IntelliJ IDEA.
 * User: raz
 * Date: 9/20/13
 * Time: 2:20 PM
 * To change this template use File | Settings | File Templates.
 */
public class SectionApi extends JsonController{

    public static Result find(long universityId, long courseId, long sectionId){
        Section section = Section.find.byId(sectionId);

        if(section == null){
            return notFound();
        }

        return ok(section);

    }

    public static Result findAll(long universityId, long courseId){
        Course course = Course.find.byId(courseId);

        if(course == null || course.getSections() == null){
            return badRequest();
        }

        return ok(course.getSections());

    }

    public static Result save(long universityId, long courseId){
        Section section = Section.fromJson(request(), Section.class);

        if(section == null){
            return badRequest();
        }

        Course course = Course.find.byId(courseId);

        if(course == null){
            return badRequest();
        }

        section.setCourse(course);

        section.save();

        return ok(section);
    }

    public static Result update(long universityId, long courseId, long sectionId){

        Section section = Section.fromJson(request(), Section.class);

        if(section == null || section.getId() != sectionId){
            return badRequest();
        }

        section.update();

        return ok(section);
    }

    public static Result delete(long universityId, long courseId, long sectionId){
        Section section = Section.find.byId(sectionId);

        if(section == null){
            badRequest();
        }

        section.delete();

        return ok(section);

    }





}
