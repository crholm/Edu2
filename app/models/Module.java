package models;

import com.avaje.ebean.validation.NotNull;
import models.helpers.JsonModel;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Lob;

/**
 * Created with IntelliJ IDEA.
 * User: raz
 * Date: 9/19/13
 * Time: 3:45 PM
 * To change this template use File | Settings | File Templates.
 */
@Entity
public class Module extends JsonModel{

    public static Finder<Long,Module> find = new Finder<>(Long.class, Module.class);


    @Id
    private long id;

    @NotNull
    private String title;

    @NotNull
    @Lob
    private String content;

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

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
