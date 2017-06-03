'use strict';
var express = require("express"),
   exphbs = require("express-handlebars"),
   cf = require('./public/js/testConnectionData'),
    mysql = require('mysql'), 
    myConnection = require('express-myconnection'),
    bodyParser = require('body-parser'),
    learnersMethods = require('./routes/learnersMethods'),
    userMethods = require('./routes/userMethods'),
    parseurl = require('parseurl'),
    session = require('express-session');



var path = require('path');


path.join(__dirname, '/public/CSS/style.less');

var app = express();

var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

app.use(myConnection(mysql, dbOptions, 'single'));   
app.engine("handlebars", exphbs({defaultLayout:"main"}));
//app.engine('handlebars', hbs.engine);
app.set('views', __dirname + '/views');
app.set("view engine", "handlebars");

var hbs = require('hbs');
require('handlebars-form-helpers').register(hbs.handlebars);

app.use(express.static('public'));
app.use(myConnection(mysql, dbOptions, 'single'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(expressValidator()); 

app.set('trust proxy', 1) // trust first proxy 
app.use(session({
  secret: 'lau lo',
  resave: true,
  saveUninitialized: false,
  cookie : {maxAge : 5*60000}
}))

app.get("/", userMethods.checkUser, function(req, res){  

  res.render("home", {administrator : administrator})
})

app.get('/login',function(req, res){
  res.render('login')
})
app.post("/login", userMethods.authUser)

app.get("/logout", function(req, res, next){

  if (req.session.user){
    delete req.session.user;
    res.redirect("/login")
  }else {
    // the user is not logged in redirect him to the login page-
    res.redirect("/login")
  }
});

app.get('/signup',userMethods.checkUser, function(req,res){
  res.render("signup", {administrator : administrator})
});

app.post('/signup', userMethods.signup);


app.get('/learner_add', userMethods.checkUser, function(req,res){
  res.render("learner_add", {data:learnersMethods, administrator :administrator})
})
app.post('/learner_add', learnersMethods.add);

app.get('/questionaireCapture',userMethods.checkUser, function(req,res){
  res.render("questionaireCapture", {data:learnersMethods})
})
app.post('/questionaireCapture', learnersMethods.QuestionaireCapture);

app.get('/facilitator_add', userMethods.checkUser, function(req,res){
  res.render("facilitator_add", {data:learnersMethods})
})
app.post('/facilitator_add', userMethods.checkUser, learnersMethods.addFacilitator);

app.get('/exitPlan_add', userMethods.checkUser,function(req,res){
  res.render("exitPlan_add", {data:learnersMethods})
})
app.post('/exitPlan_add', userMethods.checkUser, learnersMethods.addExitPlan);

app.get('/placement_add/:Idnumber', userMethods.checkUser, learnersMethods.getplacement_add);

app.post('/placement_add', userMethods.checkUser, learnersMethods.addPlacement);

app.get('/date_add', userMethods.checkUser, function(req,res){
  res.render("date_add", {data:learnersMethods})
})
app.post('/attendance', userMethods.checkUser, learnersMethods.addDate);


app.get('/admin_panel',userMethods.checkUser, userMethods.showAdminPanel);
 
app.post('/user/admin_panel/:username', userMethods.promoteUser);


app.get('/users', userMethods.checkUser, userMethods.showUser);

app.get('/programCurriculum_add', userMethods.checkUser, userMethods.checkUser, function(req,res){
  res.render("programCurriculum_add", {data:learnersMethods})
})
app.post('/programCurriculum_add', userMethods.checkUser, learnersMethods.addProgramCurriculum);


app.get('/learner', userMethods.checkUser, learnersMethods.showLearner);
app.get('/surname', userMethods.checkUser, learnersMethods.showSurname);
app.get('/course', userMethods.checkUser,learnersMethods.showCourse);
app.get('/location', userMethods.checkUser, learnersMethods.showLocation);
app.get('/lecturer', userMethods.checkUser, learnersMethods.showFacilitator);
app.get('/attendance', userMethods.checkUser, learnersMethods.showAttendance);
app.get('/graduate', userMethods.checkUser, learnersMethods.showGraduate);
app.get('/attendanceCaptureView', learnersMethods.showAttendanceCaptureView);
app.get('/attendanceRecord', userMethods.checkUser, learnersMethods.showAttendanceRecord);
app.get('/learnerProfile', userMethods.checkUser,  learnersMethods.showLearnerProfile);
app.get('/programCurriculum', userMethods.checkUser, learnersMethods.showCurriculum);
app.get('/placement', userMethods.checkUser, learnersMethods.showPlacement);
app.get('/exitPlan', userMethods.checkUser,  learnersMethods.showExitPlan);
app.get('/feedbackQuestionaire', userMethods.checkUser, learnersMethods.showFeedbackQuestionaire);

app.get('/learner/signed/:Idnumber',learnersMethods.captureAttendance);
app.get('/placement_add/{{Idnumber}}/:Idnumber',learnersMethods.addPlacement);

app.get('/learner/learnerProfile/:Idnumber',learnersMethods.getViewPersonalInfo);

app.get('/attendanceCaptureView/edit/:Idnumber', learnersMethods.getUpdateAttendanceCaptureView);
app.post('/attendanceCaptureView/update/:Idnumber', learnersMethods.updateAttendanceCaptureView);
app.get('/attendanceCaptureView/delete/:Idnumber',learnersMethods.deleteAttendanceCaptureView);


app.get('/learner/edit/:Idnumber', learnersMethods.getUpdate);
app.post('/learner/update/:Idnumber', learnersMethods.update);
app.get('/learner/delete/:Idnumber',learnersMethods.delete);
//app.get('/attendance/deleteDate/:id',learnersMethods.deleteDate);


app.get('/lecturer/editLecturer/:idNo', learnersMethods.getUpdateFacilitator);
app.post('/lecturer/updateFacilitator/:idNo', learnersMethods.updateFacilitator);
app.get('/lecturer/deleteFacilitator/:idNo',learnersMethods.deleteFacilitator);

app.get('/programCurriculum/editProgram/:module_name', learnersMethods.getUpdateProgram);
app.post('/programCurriculum/updateProgram/:module_name', learnersMethods.updateProgram);
app.get('/programCurriculum/deleteProgram/:module_name',learnersMethods.deleteProgram);

app.get('/placement/editPlacement/:Idnumber', learnersMethods.getUpdatePlacement);
app.post('/placement/updatePlacement/:Idnumber', learnersMethods.updatePlacement);
app.get('/placement/deletePlacement/:Idnumber',learnersMethods.deletePlacement);

app.get('/exitPlan/editExitPlan/:IDno', learnersMethods.getUpdateExitPlan);
app.post('/exitPlan/updateExitPlan/:IDno', learnersMethods.updateExitPlan);
app.get('/exitPlan/deleteExitPlan/:IDno',learnersMethods.deleteExitPlan);


app.get('/learner/view/:Idnumber', learnersMethods.getView);
app.get('/learner/viewAccountNo/:Idnumber', learnersMethods.getViewAccountNo);
app.get('/learner/viewFacilitator/:Idnumber', learnersMethods.getViewFacilitator);
app.get('/learner/viewLocation/:Idnumber', learnersMethods.getViewLocation);
app.get('/learner/viewPersonalInfo/:Idnumber', learnersMethods.getViewPersonalInfo);
app.get('/learner/viewAttendanceRecord/:Idnumber', learnersMethods.getViewAttendanceRecord);
app.get('/learner/viewWineIndustry/:Idnumber', learnersMethods.getViewWineIndustry);
app.get('/learner/viewFruitVeg/:Idnumber', learnersMethods.getViewFruitVeg);


app.get('/Name', learnersMethods.sortName);
app.get('/surname', learnersMethods.SortSurname);
app.get('/gender', learnersMethods.SortGender);
app.get('/course', learnersMethods.SortCourse);
app.get('/race', learnersMethods.SortRace);
app.get('/Language', learnersMethods.SortLanguage);
app.get('/address', learnersMethods.SortAddress);
app.get('/facilitator', learnersMethods.SortFacilitator);
app.get('/location', learnersMethods.SortLocation);


app.get('/learner/learnersList/:Name', learnersMethods.getSearchNames);
app.get('/Name/search/:searchValue', learnersMethods.getSearchNames);

app.get('/surname/surnamesList/:surname', learnersMethods.getSearchSurnames);
app.get('/surname/search/:searchValue', learnersMethods.getSearchSurnames);

app.get('/course/coursesList/:course', learnersMethods.getSearchCourses);
app.get('/course/search/:searchValue', learnersMethods.getSearchCourses);

app.get('/gender/gendersList/:gender', learnersMethods.getSearchGenders);
app.get('/gender/search/:searchValue', learnersMethods.getSearchGenders);

app.get('/race/racesList/:race', learnersMethods.getSearchRaces);
app.get('/race/search/:searchValue', learnersMethods.getSearchRaces);

app.get('/Language/learnersList/:Language', learnersMethods.getSearchLanguages);
app.get('/Language/search/:searchValue', learnersMethods.getSearchLanguages);

app.get('/address/addressesList/:address', learnersMethods.getSearchAddresses);
app.get('/address/search/:searchValue', learnersMethods.getSearchAddresses);

app.get('/facilitator/facilitatorsList/:facilitator', learnersMethods.getSearchFacilitators);
app.get('/facilitator/search/:searchValue', learnersMethods.getSearchFacilitators);

app.get('/locationsList/:location', learnersMethods.SearchLocation);
app.get('/search/:searchValue', learnersMethods.SearchLocation);

app.get('/location/locationssList/:location', learnersMethods.getSearchlocations);
app.get('/location/search/:searchValue', learnersMethods.getSearchlocations);

app.get('/graduate/graduatesList/:graduate', learnersMethods.getSearchGraduates);
app.get('/graduate/search/:searchValue', learnersMethods.getSearchGraduates);

//app.get('/attendanceCaptureView/attentendedsList/:surname', learnersMethods.getSearchAttended);
app.get('/accountNo/search/:searchValue', learnersMethods.getSearchAttended);

app.get('/profile/profilesList/:Name', learnersMethods.getSearchProfile);
app.get('/interest/search/:searchValue', learnersMethods.getSearchProfile);

app.get('/placement/work_locationsList/:work_location', learnersMethods.getSearchWork_location);
app.get('/work_location/search/:searchValue', learnersMethods.getSearchWork_location);

//app.get('excel', learnersMethods.showExcel);
    



app.get("/*", userMethods.checkUser,function(req, res){
  res.redirect("/login");
})

var port = process.env.PORT || 3000;

var server = app.listen(port, function(){

  console.log("server is running on " + server.address().address + ":" +server.address().port)

})
