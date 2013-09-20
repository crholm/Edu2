package controllers;

import controllers.helpers.JsonController;
import models.Chapter;
import models.Course;
import models.Module;
import models.Section;
import play.mvc.Result;

/**
 * Created with IntelliJ IDEA.
 * User: raz
 * Date: 9/20/13
 * Time: 2:45 PM
 * To change this template use File | Settings | File Templates.
 */
public class ChapterApi extends JsonController{

    public static Result find(long universityId, long courseId, long sectionId, long chapterId){
        Chapter chapter = Chapter.find.byId(chapterId);

        if(chapter == null){
            return notFound();
        }

        return ok(chapter);

    }

    public static Result findAll(long universityId, long courseId, long sectionId){
        Section section = Section.find.byId(sectionId);

        if(section == null || section.getChapters() == null){
            return badRequest();
        }

        return ok(section.getChapters());

    }

    public static Result save(long universityId, long courseId, long sectionId){
        Chapter chapter = Chapter.fromJson(request(), Chapter.class);

        if(chapter == null){
            return badRequest();
        }

        Section section = Section.find.byId(sectionId);

        if(section == null){
            return badRequest();
        }

        chapter.setSection(section);

        chapter.save();

        return ok(chapter);
    }

    public static Result update(long universityId, long courseId, long sectionId, long chapterId){

        Chapter chapter = Chapter.fromJson(request(), Chapter.class);

        if(chapter == null || chapter.getId() != chapterId){
            return badRequest();
        }

        chapter.update();

        return ok(chapter);
    }


    public static Result delete(long universityId, long courseId, long sectionId, long chapterId){
        Chapter chapter = Chapter.find.byId(chapterId);

        if(chapter == null){
            badRequest();
        }

        chapter.delete();

        return ok(chapter);

    }
}
