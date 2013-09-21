import com.avaje.ebean.Ebean;
import models.University;
import org.h2.engine.User;
import play.Application;
import play.GlobalSettings;
import play.Logger;
import play.libs.Yaml;

import java.util.*;


/**
 * Created with IntelliJ IDEA.
 * User: raz
 * Date: 9/19/13
 * Time: 9:31 PM
 * To change this template use File | Settings | File Templates.
 */
public class Global extends GlobalSettings {
    @Override
    public void onStart(Application app) {
        InitialData.insert(app);
    }

    static class InitialData {

        public static void insert(Application app) {
            if(University.find.findRowCount() == 0) {

//                @SuppressWarnings("unchecked")
//                Map<String,List<Object>> all = (Map<String,List<Object>>) Yaml.load("initial-data.yml");


//                List<Object> list = (List<Object>) Yaml.load("initial-data.yml");
//
//                Ebean.save(list);


//                Logger.debug("Saving default data.");
//
//                Ebean.save(all.get("university"));
//
//                Ebean.save(all.get("course"));
//
//                Ebean.save(all.get("section"));

//                Ebean.save(all.get("module"));

            }
        }

    }

}
