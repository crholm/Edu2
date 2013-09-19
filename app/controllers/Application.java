package controllers;

import controllers.helpers.JsonController;
import models.*;
import play.mvc.*;



import java.util.ArrayList;

import java.util.List;

public class Application extends JsonController {
  
    public static Result index() {

        University u = new University();

        u.setName("dfssd");

        u.setShortName("dsf");

        Course c = new Course();
        c.setTitle("LinAlg");
        c.setCourseCode("TATA31");

        Section s1 = new Section();
        s1.setTitle("Test1");


        Section s2 = new Section();
        s2.setTitle("Test2");



        List<Section> map = new ArrayList<>();

        map.add(s1);
        map.add(s2);

        c.setSections(map);

        List< Course > l = new ArrayList<>();
        l.add(c);
        u.setCourses(l);

        u.save();

//        Logger.debug("Hit");
//
//        Section s = new Section();
//        s.setTitle("Test");
//
//        Chapter c = new Chapter();
//
//        c.setTitle("Chap1");
//        c.setSectionOrder(1);
//
//        List<Chapter> l = new ArrayList<>();
//        l.add(c);
//
//        Module m = new Module();
//        m.setTitle("Mod1");
//        m.setContent("Cont1");
//
//        m.save();
//
//        List<Module> l2 = new ArrayList<>();
//        l2.add(m);
//
//
//
//        c.setModules(l2);
//
//        s.setChapters(l);
//
//        s.save();



        return ok(University.find.all());
    }
  
}
