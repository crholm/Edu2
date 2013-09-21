package models;

import com.avaje.ebean.validation.NotNull;
import models.helpers.JsonModel;
import org.codehaus.jackson.annotate.JsonIgnore;
import play.db.ebean.Model;

import javax.persistence.*;
import java.util.List;

/**
 * Created with IntelliJ IDEA.
 * User: raz
 * Date: 9/19/13
 * Time: 3:53 PM
 * To change this template use File | Settings | File Templates.
 */
@Entity
public class Chapter extends JsonModel {

    public static Finder<Long,Chapter> find = new Finder<>(Long.class, Chapter.class);

    @Id
    private long id;

    @NotNull
    private String title;

    private int chapterOrder;


    @JsonIgnore
    @ManyToOne
    private Section section;

    @OneToMany(cascade = CascadeType.ALL)
    private List<ChapterToModule> modules;


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }


    public List<ChapterToModule> getModules() {
        return modules;
    }

    public void setModules(List<ChapterToModule> modules) {
        this.modules = modules;
    }

    public int getChapterOrder() {
        return chapterOrder;
    }

    public void setChapterOrder(int chapterOrder) {
        this.chapterOrder = chapterOrder;
    }

    public Section getSection() {
        return section;
    }

    public void setSection(Section section) {
        this.section = section;
    }
}
