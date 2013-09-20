package controllers;

import controllers.helpers.JsonController;
import models.Course;
import models.University;
import play.mvc.Result;

/**
 * Created with IntelliJ IDEA.
 * User: raz
 * Date: 9/20/13
 * Time: 12:41 PM
 * To change this template use File | Settings | File Templates.
 */
public class CourseApi extends JsonController {

    public static Result find(long universityId, long courseId){

        Course course = Course.find.byId(courseId);

        if(course == null){
            return notFound();
        }

        return ok(course);
    }

    public static Result findAll(long universityId){

        University university = University.find.byId(universityId);

        if(university == null || university.getCourses() == null){
            badRequest();
        }

        return ok(university.getCourses());
    }

    public static Result save(long universityId){
        Course course = Course.fromJson(request(), Course.class);

        if(course == null){
            return badRequest();
        }

        University university = University.find.byId(universityId);

        if(university == null){
            return badRequest();
        }

        course.setUniversity(university);

        course.save();

        return ok(course);
    }

    public static Result update(long universityId, long courseId){

        Course course = Course.fromJson(request(), Course.class);

        if(course == null || course.getId() != courseId){
            return badRequest();
        }

        course.update();

        return ok(course);
    }


    public static Result delete(long universityId, long courseId){
        Course course = Course.find.byId(courseId);

        if(course == null || course.getUniversity().getId() != universityId){
            return badRequest();
        }

        course.delete();

        return ok(course);

    }




}
