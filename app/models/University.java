package models;

import com.avaje.ebean.validation.NotNull;
import models.helpers.JsonModel;
import org.codehaus.jackson.annotate.JsonIgnore;
import play.db.ebean.Model;
import play.libs.Json;
import play.mvc.Content;

import javax.persistence.*;
import java.util.List;

/**
 * Created with IntelliJ IDEA.
 * User: raz
 * Date: 9/19/13
 * Time: 8:07 PM
 * To change this template use File | Settings | File Templates.
 */
@Entity
public class University extends JsonModel{



    public static Finder<Long,University> find = new Finder<>(Long.class, University.class);

    @Id
    private long id;

    @NotNull
    private String name;

    private String shortName;

    @JsonIgnore
    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Course> courses;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getShortName() {
        return shortName;
    }

    public void setShortName(String shortName) {
        this.shortName = shortName;
    }

    @JsonIgnore
    public List<Course> getCourses() {
        return courses;
    }

    @JsonIgnore
    public void setCourses(List<Course> courses) {
        this.courses = courses;
    }
}
