package models;

import models.helpers.JsonModel;
import play.db.ebean.Model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumns;

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

    private long moduleId;

    private int moduleOrder;


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
