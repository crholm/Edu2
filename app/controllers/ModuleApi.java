package controllers;

import com.avaje.ebean.Expr;
import com.avaje.ebean.Expression;
import com.avaje.ebean.ExpressionList;
import controllers.helpers.JsonController;
import models.Module;
import models.helpers.JsonModel;
import play.libs.Json;
import play.mvc.Content;
import play.mvc.Controller;
import play.mvc.Result;

import java.util.List;

/**
 * Created with IntelliJ IDEA.
 * User: raz
 * Date: 9/19/13
 * Time: 9:56 PM
 * To change this template use File | Settings | File Templates.
 */
public class ModuleApi extends JsonController {

    public static Result find(long moduleId){

        Module module = Module.find.byId(moduleId);


        if(module == null){
            return notFound();
        }

        return ok(module.body());
    }



    public static Result findAll(){

        List<Module> modules = Module.find.all();

        if(modules == null || modules.isEmpty()){
            return notFound();
        }

        return ok(modules);
    }


    public static Result save(){

        Module module = JsonModel.fromJson(request(), Module.class);

        module.save();

        return ok(module);
    }

    public static Result update(long moduleId){

        Module module = JsonModel.fromJson(request(), Module.class);


        if(module == null || module.getId() != moduleId){
            return badRequest();
        }

        module.update();

        return ok(module);
    }



    public static Result delete(long moduleId){
        Module module = Module.find.byId(moduleId);

        if(module == null){
            return notFound();
        }

        module.delete();

        return ok(module);
    }


}
