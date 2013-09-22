Edu2Ctrls.controller('CourseCtrl',  function ( $scope, $routeParams, University, Course, Section, Module) {

    $scope.tinymceOptions = {
        plugins: "image"
    }

    $scope.currentSection = {};
    $scope.currentChapter = {};
    $scope.currentModules = [];


    $scope.uploadedFiles = [];

    console.log($routeParams.universityId);

    $scope.university = University.get({id: $routeParams.universityId });

    $scope.course = Course.get({id: $routeParams.courseId, universityId: $routeParams.universityId });

    $scope.sections = Section.query({courseId: $routeParams.courseId, universityId: $routeParams.universityId });



    $scope.isModuleAddDisable = function(){
        return typeof $scope.currentChapter.id == 'undefined';
    }

    $scope.updateSection = function(section){
        section.$update({courseId: $routeParams.courseId, universityId: $routeParams.universityId});
    }


    $scope.saveCurrent = function(){
        $scope.updateSection($scope.currentSection);

        for(var key in $scope.currentModules){
            $scope.currentModules[key].$update();
        }
    }


    $scope.addSection = function(){
        var section = new Section();

        section.title = "untitled";
        section.sectionOrder = $scope.sections.length+1;

        $scope.sections.push(section);

        section.$save({courseId: $routeParams.courseId, universityId: $routeParams.universityId });

    }


    $scope.addChapter = function(section){
        if(typeof section.chapters == "undefined"){
            section.chapters = [];
        }

        var chapter = {};
        chapter.chapterOrder = section.chapters.length+1;
        chapter.title = "untitled";
        chapter.modules = [];

        section.chapters.push(chapter);

        $scope.updateSection(section)


    }


    $scope.addModule = function(){
        var module = new Module();

        module.title = "untitled";
        module.content = "n/a";

        module.$save(function(data){

            var linkModule = {};
            linkModule.moduleId = data.id;
            linkModule.moduleOrder = $scope.currentChapter.modules.length+1;


            $scope.currentChapter.modules.push(linkModule);

            $scope.updateSection($scope.currentSection)

        });

        $scope.currentModules.push(module);

    }



    $scope.showChapter = function(chapter, section){
        $scope.currentChapter = chapter;
        $scope.currentSection = section;

        $scope.currentModules = []
        for(var i = 0; i < chapter.modules.length; i++){
            var module = Module.get({ id: chapter.modules[i].moduleId }, function(data){
                $scope.setModuleOrder(data);
            });

            $scope.currentModules.push(module);
        }

       // console.log($scope.currentModules);
    }


    $scope.setModuleOrder = function(module){
        for(var i = 0; i < $scope.currentChapter.modules.length; i++){
            if(module.id == $scope.currentChapter.modules[i].moduleId){
                module.$order = $scope.currentChapter.modules[i].moduleOrder;
                break;
            }

        }
    }


    $scope.isUpSectionDisable = function(section){
        for(key in $scope.sections){
            if(section.sectionOrder > $scope.sections[key].sectionOrder){
                return false;
            }
        }
        return true;
    }

    $scope.isDownSectionDisable = function(section){
        for(key in $scope.sections){
            if(section.sectionOrder < $scope.sections[key].sectionOrder){
                return false;
            }
        }
        return true;
    }


    $scope.isUpChapterDisable = function(chapter, section){
        for(key in section.chapters){
            if(chapter.chapterOrder > section.chapters[key].chapterOrder){
                return false;
            }
        }
        return true;
    }

    $scope.isDownChapterDisable = function(chapter, section){
        for(key in section.chapters){
            if(chapter.chapterOrder < section.chapters[key].chapterOrder){
                return false;
            }
        }
        return true;
    }


    $scope.incOrderSection = function(section){
        for(key in $scope.sections){
            if($scope.sections[key].sectionOrder-1 == section.sectionOrder){
                $scope.sections[key].sectionOrder--;
                $scope.updateSection($scope.sections[key]);
                break;
            }
        }
        section.sectionOrder++;
        $scope.updateSection(section);
    }

    $scope.decOrderSection = function(section){
        for(key in $scope.sections){
            if($scope.sections[key].sectionOrder+1 == section.sectionOrder){
                $scope.sections[key].sectionOrder++;
                $scope.updateSection($scope.sections[key]);
                break;
            }
        }
        section.sectionOrder--;
        $scope.updateSection(section);
    }





    $scope.incOrderChapter = function(chapter, section){
        for(key in section.chapters){
            if(section.chapters[key].chapterOrder-1 == chapter.chapterOrder){
                section.chapters[key].chapterOrder--;
                break;
            }

        }

        chapter.chapterOrder++;
        console.log(chapter);
        console.log(section);

        $scope.updateSection(section);
    }

    $scope.decOrderChapter = function(chapter, section){
        for(key in section.chapters){
            if(section.chapters[key].chapterOrder+1 == chapter.chapterOrder){
                section.chapters[key].chapterOrder++;
                break;
            }
        }
        chapter.chapterOrder--;

        console.log(chapter);
        console.log(section);
        $scope.updateSection(section);
    }




    $scope.canNotInc = function(module){
        for(var i = 0; i <  $scope.currentModules.length; i++){
            if(module.$order < $scope.currentModules[i].$order){
                return false;
            }
        }
        return true;
    }

    $scope.canNotDec = function(module){
        for(var i = 0; i <  $scope.currentModules.length; i++){
            if(module.$order > $scope.currentModules[i].$order){
                return false;
            }
        }
        return true;
    }


    $scope.incOrder = function(module){

        var startOrder = module.$order;
        for(var i = 0; i <  $scope.currentModules.length; i++){
            if($scope.currentModules[i].$order == startOrder+1){
                $scope.currentModules[i].$order--;
            }
            if($scope.currentChapter.modules[i].moduleOrder == startOrder+1){
                $scope.currentChapter.modules[i].moduleOrder--;
            }

            if($scope.currentChapter.modules[i].moduleId == module.id){
                $scope.currentChapter.modules[i].moduleOrder++;
            }



        }
        module.$order++;

        console.log("---");
        console.log(module);
        console.log($scope.currentChapter);
        console.log($scope.currentModules);

    }

    $scope.decOrder = function(module){
        var startOrder = module.$order;
        for(var i = 0; i <  $scope.currentModules.length; i++){
            if($scope.currentModules[i].$order == startOrder-1){
                $scope.currentModules[i].$order++;
            }
            if($scope.currentChapter.modules[i].moduleOrder == startOrder-1){
                $scope.currentChapter.modules[i].moduleOrder++;
            }

            if($scope.currentChapter.modules[i].moduleId == module.id){
                $scope.currentChapter.modules[i].moduleOrder--;
            }

        }
        module.$order--;
    }


















    $scope.setFiles = function(element) {
        $scope.$apply(function($scope) {
            console.log('files:', element.files);
            // Turn the FileList object into an Array
            $scope.files = []
            for (var i = 0; i < element.files.length; i++) {
                $scope.files.push(element.files[i])
            }
            $scope.progressVisible = false
        });
    };

    $scope.uploadFile = function() {
        var fd = new FormData()
        for (var i in $scope.files) {
            fd.append("uploadedFile", $scope.files[i])
        }
        var xhr = new XMLHttpRequest();
        xhr.upload.addEventListener("progress", uploadProgress, false);
        xhr.addEventListener("load", uploadComplete, false);
        xhr.addEventListener("error", uploadFailed, false);
        xhr.addEventListener("abort", uploadCanceled, false);
        xhr.open("POST", "/api/media");
        $scope.progressVisible = true;
        xhr.send(fd);
        console.log(xhr.responseText);

    }

    function uploadProgress(evt) {
        $scope.$apply(function(){
            if (evt.lengthComputable) {
                $scope.progress = Math.round(evt.loaded * 100 / evt.total)
            } else {
                $scope.progress = 'unable to compute'
            }
        })
    }

    function uploadComplete(evt) {
        var files = JSON.parse(evt.target.responseText);
        for(var key in files){
            $scope.uploadedFiles.push(files[key]);
        }

        console.log($scope.uploadedFiles);
        console.log(files);
        $scope.$apply();
    }

    function uploadFailed(evt) {
        alert("There was an error attempting to upload the file.")
    }

    function uploadCanceled(evt) {
        $scope.$apply(function(){
            $scope.progressVisible = false
        })
        alert("The upload has been canceled by the user or the browser dropped the connection.")
    }










});




