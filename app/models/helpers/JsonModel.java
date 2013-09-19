package models.helpers;

import play.db.ebean.Model;
import play.libs.Json;
import play.mvc.Content;
import play.mvc.Http;

import javax.persistence.MappedSuperclass;

/**
 * Created with IntelliJ IDEA.
 * User: raz
 * Date: 9/19/13
 * Time: 10:04 PM
 * To change this template use File | Settings | File Templates.
 */
@MappedSuperclass
public abstract class JsonModel extends Model implements Content {


    @Override
    public String body() {
        return Json.toJson(this).toString();
    }

    @Override
    public String contentType() {
        return "application/json";
    }


    public static <A> A fromJson(Http.Request request, Class<A> aClass ){
        return Json.fromJson(request.body().asJson(), aClass);
    }
}
