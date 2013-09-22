package controllers;

import controllers.helpers.JsonController;
import play.Logger;
import play.Play;
import play.libs.Json;
import play.mvc.Http;
import play.mvc.Result;

import java.io.File;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.List;

/**
 * Created with IntelliJ IDEA.
 * User: raz
 * Date: 9/22/13
 * Time: 1:17 PM
 * To change this template use File | Settings | File Templates.
 */
public class MediaApi extends JsonController{


    public static Result find(String fileName){

        Logger.debug(fileName);
        try {
            Logger.debug(URLEncoder.encode(fileName, "UTF-8"));
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();  //To change body of catch statement use File | Settings | File Templates.
        }

        File file = null;


        file = Play.application().getFile("/public/storage/media/" + fileName);

        if(!file.exists()){
            return notFound();
        }

        return ok(file);
    }



    public static Result save(){
        Http.MultipartFormData body = request().body().asMultipartFormData();
        List<Http.MultipartFormData.FilePart> uploadedFiles = body.getFiles();

        List<String> fileUrls = new ArrayList<>();

        for(Http.MultipartFormData.FilePart file : uploadedFiles){

            String fileName = System.currentTimeMillis() + "-" + (int)(Math.random()*1000) + "-" + file.getFilename().replace(" ", "");

            File destFull = Play.application().getFile("/public/storage/media/" + fileName);

            file.getFile().renameTo(destFull);

            try {
                fileUrls.add("/api/media/"+URLEncoder.encode(fileName, "UTF-8"));
            } catch (UnsupportedEncodingException e) {
                return internalServerError();
            }

        }

        return ok(Json.toJson(fileUrls));
    }






}
