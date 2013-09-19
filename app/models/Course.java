package models;

import models.helpers.JsonModel;
import play.db.ebean.Model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.List;
import java.util.Map;

/**
 * Created with IntelliJ IDEA.
 * User: raz
 * Date: 9/19/13
 * Time: 4:55 PM
 * To change this template use File | Settings | File Templates.
 */
@Entity
public class Course extends JsonModel {

    public static Finder<Long,Course> find = new Finder<>(Long.class, Course.class);

    @Id
    private long id;


    private String courseCode;

    private String title;

    @OneToMany(cascade = CascadeType.ALL)
    private List<Section> sections;


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getCourseCode() {
        return courseCode;
    }

    public void setCourseCode(String courseCode) {
        this.courseCode = courseCode;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public List<Section>  getSections() {
        return sections;
    }

    public void setSections(List<Section> sections) {
        this.sections = sections;
    }
}
