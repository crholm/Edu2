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
 * Time: 3:56 PM
 * To change this template use File | Settings | File Templates.
 */
@Entity
public class Section extends JsonModel {

    public static Finder<Long,Section> find = new Finder<>(Long.class, Section.class);

    @Id
    private long id;

    @NotNull
    private String title;

    private int sectionOrder;

    @JsonIgnore
    @ManyToOne(cascade = CascadeType.ALL)
    private Course course;

    @JsonIgnore
    @OneToMany(cascade = CascadeType.ALL)
    private List<Chapter> chapters;


    public int getSectionOrder() {
        return sectionOrder;
    }

    public void setSectionOrder(int sectionOrder) {
        this.sectionOrder = sectionOrder;
    }

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

    @JsonIgnore
    public Course getCourse() {
        return course;
    }

    @JsonIgnore
    public void setCourse(Course course) {
        this.course = course;
    }

    @JsonIgnore
    public List<Chapter> getChapters() {
        return chapters;
    }

    @JsonIgnore
    public void setChapters(List<Chapter> chapters) {
        this.chapters = chapters;
    }


}
