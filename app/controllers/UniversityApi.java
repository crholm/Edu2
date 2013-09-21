package controllers;

import controllers.helpers.JsonController;
import models.University;
import play.mvc.Result;
import java.util.List;

/**
 * Created with IntelliJ IDEA.
 * User: raz
 * Date: 9/20/13
 * Time: 12:50 PM
 * To change this template use File | Settings | File Templates.
 */
public class UniversityApi extends JsonController {

    public static Result find(long universityId){
        University university = University.find.byId(universityId);

        if(university == null){
            return notFound();
        }

        return ok(university);

    }

    public static Result findAll(){
        List<University> universities = University.find.all();


        return ok(universities);
    }


    public static Result save(){
        University university = University.fromJson(request(), University.class);

        university.save();

        return ok(university);
    }

    public static Result update(long universityId){

        University university = University.fromJson(request(), University.class);

        if(university.getId() != universityId){
            return badRequest();
        }


        university.update();

        return ok(university);

    }

    public static Result delete(long universityId){
        University university = University.find.byId(universityId);

        if(university == null){
            return badRequest();
        }

        university.delete();

        return ok();

    }



}
