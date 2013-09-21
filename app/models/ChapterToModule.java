package models;

import models.helpers.JsonModel;
import org.codehaus.jackson.annotate.JsonIgnore;
import play.db.ebean.Model;

import javax.persistence.*;

/**
 * Created with IntelliJ IDEA.
 * User: raz
 * Date: 9/19/13
 * Time: 4:42 PM
 * To change this template use File | Settings | File Templates.
 */
@Entity
public class ChapterToModule extends JsonModel {

    public static Finder<Long,ChapterToModule> find = new Finder<>(Long.class, ChapterToModule.class);

    @Id
    private long id;

    @JsonIgnore
    @ManyToOne
    private Chapter chapter;

    private long moduleId;

    private int moduleOrder;


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }


    public Chapter getChapter() {
        return chapter;
    }

    public void setChapter(Chapter chapter) {
        this.chapter = chapter;
    }

    public int getModuleOrder() {
        return moduleOrder;
    }

    public void setModuleOrder(int moduleOrder) {
        this.moduleOrder = moduleOrder;
    }

    public long getModuleId() {
        return moduleId;
    }

    public void setModuleId(long moduleId) {
        this.moduleId = moduleId;
    }

}
