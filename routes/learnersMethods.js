past_pages = [],
administrator = false,
last_page = "",
counter = 0;

exports.showLearner = function (req, res, next) {
	req.getConnection(function(err, connection){
		if (err) 
			return next(err);
        connection.query('SELECT gender, COUNT(*) AS sex FROM learner GROUP BY gender',[], function(err, gender) {
           if (err) return next(err); 
           connection.query('SELECT race, COUNT(*) AS race FROM learner GROUP BY race',[], function(err, race) {
           if (err) return next(err);
           connection.query('SELECT Idnumber, COUNT(*) AS learners FROM learner',[], function(err, learners) {
           if (err) return next(err); 
		connection.query('SELECT Idnumber, Name, surname, gender, race, Language, phone, address, accountNo, branch, course, location, course_date, graduate, facilitator from learner', [], function(err, results) {
        	if (err) return next(err); 
    		res.render( 'learner', {
    			data : gender,
                result : race,
                answer : learners,
                learner : results,
                administrator : administrator
    		   });
              });
            });
    	});
      });
	});
};

exports.showLearnerProfile = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err) 
            return next(err);
        connection.query('SELECT COUNT(fruit) AS fruit, COUNT(Dairy) AS dairy, COUNT(Vegetable) AS vegetable, COUNT(deciduous) AS deciduous, COUNT(wine) AS wine,COUNT(fields) AS fields, COUNT(cellar) AS cellar,COUNT(marketing) AS marketing,COUNT(packaging) AS packaging,COUNT(exports) AS exports,COUNT(logistic) AS logistic,COUNT(tourism) AS tourism FROM questionaire', [], function(err, interest) {
            console.log(interest);
            if (err) return next(err);
        connection.query('SELECT * FROM profile', [], function(err, results) {
            if (err) return next(err);
            res.render( 'learnerProfile', {
                data : interest,
                learner : results,
                administrator : administrator
            });
            });
      });
    });
};

exports.showLearnerDropOut = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err) 
            return next(err);
        connection.query('SELECT *, DATE_FORMAT(date, GET_FORMAT(DATE,"EUR")) AS date FROM learnerDropOut', [], function(err, results) {
            if (err) return next(err);
            res.render( 'learnerDropOut', {
                learnerDropOut : results,
                administrator : administrator
            });
      });
    });
};

exports.showName = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err) 
            return next(err);
        connection.query('SELECT * from learner', [], function(err, results) {
            if (err) return next(err);
            res.render( 'Name', {
                learner : results
            });
            
      });
    });
};

exports.showSurname = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err) 
            return next(err);
        connection.query('SELECT * from learner', [], function(err, results) {
            if (err) return next(err);
            res.render( 'surname', {
                learner : results
            });
            
      });
    });
};

exports.showCourse = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err) 
            return next(err);
        connection.query('SELECT * from learner', [], function(err, results) {
            if (err) return next(err);
            res.render( 'course', {
                learner : results
            });
            
      });
    });
};

exports.showLocation = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err) 
            return next(err);
        connection.query('SELECT * from learner', [], function(err, results) {
            if (err) return next(err);
            res.render( 'location', {
                learner : results
            });
            
      });
    });
};
exports.showFacilitator = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err) 
            return next(err);
        connection.query('SELECT * from facilitator', [], function(err, results) {
            if (err) return next(err);
            res.render( 'lecturer', {
                facilitator : results
            });
            
      });
    });
};

exports.showGraduate = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err) 
            return next(err);
        connection.query('SELECT * from learner', [], function(err, results) {
            if (err) return next(err);
            res.render( 'graduate', {
                learner : results
            });
            
      });
    });
};

exports.showAttendance = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err) 
            return next(err);
        connection.query('SELECT DATE_FORMAT(date, GET_FORMAT(DATE,"EUR")) AS date FROM events', [], function(err, date) {
            if (err) return next(err);
        
        
        connection.query('SELECT surname, Name, Idnumber, phone from learner', [], function(err, results) {
            if (err) return next(err);
            res.render( 'attendance', {
                events: date,
                learner : results,
                administrator : administrator
            });
            });
      });
    });
};

exports.showAttendanceCaptureView = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err) 
            return next(err);
        connection.query('SELECT * from attended', [], function(err, results) {
            if (err) return next(err);
            res.render( 'attendanceCaptureView', {
                learner : results,
                administrator : administrator
            });
            
      });
    });
};

exports.showAttendanceRecord = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err) 
            return next(err);
        connection.query('SELECT * FROM attendanceRecord', [], function(err, results) {
            if (err) return next(err);
            res.render( 'attendanceRecord', {
                learner : results,
                administrator : administrator
            });
            
      });
    });
};

exports.showFeedbackQuestionaire = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err) 
            return next(err);
        connection.query('SELECT * FROM questionaire', [], function(err, results) {
            if (err) return next(err);
            res.render( 'feedbackQuestionaire', {
                learner : results,
                administrator : administrator
            });
            
      });
    });
};

/*exports.showLearnerProfile = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err) 
            return next(err);
        connection.query('SELECT * FROM profile', [], function(err, results) {
            if (err) return next(err);
        connection.query('SELECT * FROM profile', [], function(err, results) {
            if (err) return next(err);
            res.render( 'learnerProfile', {
                learner : results,
                administrator : administrator
            });
            
      });
    });
};*/

exports.showCurriculum = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err) 
            return next(err);
        connection.query('SELECT *, DATE_FORMAT(month, GET_FORMAT(DATE,"EUR")) AS month FROM programCurriculum', [], function(err, results) {
            if (err) return next(err);
            res.render( 'programCurriculum', {
                programCurriculum : results,

            });
            
      });
    });
};

exports.showPlacement = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err) 
            return next(err);
        connection.query('SELECT *, DATE_FORMAT(month, GET_FORMAT(DATE,"EUR")) AS month FROM placement', [], function(err, results) {
            if (err) return next(err);
            res.render( 'placement', {
                placement : results
            });
            
      });
    });
};

exports.showExitPlan = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err) 
            return next(err);
        connection.query('SELECT * FROM exitPlan', [], function(err, results) {
            if (err) return next(err);
            res.render( 'exitPlan', {
                exitPlan : results,
                administrator: administrator
            });
            
      });
    });
};

exports.add = function (req, res, next) {
	req.getConnection(function(err, connection){
		if (err){ 
			return next(err);
		}
		
		var input = JSON.parse(JSON.stringify(req.body));
		var data = {
            		Idnumber : input.Idnumber,
            		Name : input.Name,
                    Surname : input.surname,
                    Gender  : input.gender,
                    Race : input.race,
                    Language : input.Language,
                    Phone : input.phone,
                    Address : input.address,
                    AccountNo : input.accountNo,
                    Branch : input.branch,
                    Race : input.race,
                    Course : input.course,
                    Location: input.location,
                    course_date: input.course_date,
                    Facilitator: input.facilitator,
                    Interest: input.interest,
                    Education: input.education,
                    Dependancy: input.dependancy
        	};
        	
		connection.query('INSERT INTO learner set ?', [data], function(err, results) {
        	if (err)
                console.log("Error inserting : %s ", err );
         
          		res.redirect('/learner');
      	});
	
	});
};

exports.QuestionaireCapture = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err){ 
            return next(err);
        }
        var input = JSON.parse(JSON.stringify(req.body));
        var data = {
                    Idnumber : input.Idnumber,
                    Surname : input.surname,
                    Name : input.Name,
                    Fruit  : input.fruit,
                    Dairy : input.dairy,
                    Vegetable : input.vegetable,
                    Berry : input.berry,
                    Deciduous : input.deciduous,
                    Fields : input.fields,
                    Wine : input.wine,
                    Cellar : input.cellar,
                    Marketing : input.marketing,
                    Receptionist: input.receptionist,
                    Packaging: input.packaging,
                    Exports: input.exports,
                    logistic: input.logistic,
                    Tourism : input.tourism
            };
 
        connection.query('INSERT INTO questionaire set ?', [data], function(err, results) {
            console.log(data);
            if (err)
                console.log("Error inserting : %s ", err );
         
                res.redirect('/feedbackQuestionaire');
        });
    
    });


};

exports.addFacilitator = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err){ 
            return next(err);
        }
        
        var input = JSON.parse(JSON.stringify(req.body));
        var data = {
                    idNo : input.idNo,
                    Name : input.Name,
                    Surname : input.surname,
                    Phone : input.phone,
                    Email : input.email,
                    Course : input.course,
                    Location: input.location
            };
            
        connection.query('INSERT INTO facilitator set ?', [data], function(err, results) {
            if (err)
                console.log("Error inserting : %s ", err );
         
                res.redirect('/lecturer');
        });
    
    });
};

exports.addLearnerDropOut = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err){ 
            return next(err);
        }
        
        var input = JSON.parse(JSON.stringify(req.body));
        var data = {
                    Idnumber : input.Idnumber,
                    Name : input.Name,
                    Surname : input.surname,
                    LocationVenue : input.locationVenue,
                    Date : input.date,
                    Reason : input.reason
            };
            
        connection.query('INSERT INTO learnerDropOut set ?', [data], function(err, results) {
            if (err)
                console.log("Error inserting : %s ", err );
         
                res.redirect('/learnerDropOut');
        });
    
    });
};


exports.addDate = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err){ 
            return next(err);
        }
        
        var input = JSON.parse(JSON.stringify(req.body));
        var data = {
                    Date : input.date
            };
            
        connection.query('INSERT INTO events set ?', [data], function(err, results) {
            if (err)
                console.log("Error inserting : %s ", err );
         
                res.redirect('/attendance');
        });
    
    });
};

/*exports.addWeek = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err){ 
            return next(err);
        }
        
        var input = JSON.parse(JSON.stringify(req.body));
        var data = {
                    Count : input.count
            };
            
        connection.query('INSERT INTO attendanceRecord count VALUES(" ")', [data], function(err, results) {
            if (err)
                console.log("Error inserting : %s ", err );
         
                res.redirect('/attendance');
        });
    
    });
};*/

exports.addProgramCurriculum = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err){ 
            return next(err);
        }
        
        var input = JSON.parse(JSON.stringify(req.body));
        var data = {
                    Module_name : input.module_name,
                    facilitators : input.facilitators,
                    Assess_test : input.assess_test,
                    Assignment  : input.assignment,
                    Practical : input.practical,
                    Group_work : input.group_work,
                    month : input.month,
                    Placement : input.placement
            };
            
        connection.query('INSERT INTO programCurriculum set ?', [data], function(err, results) {
            if (err)
                console.log("Error inserting : %s ", err );
                res.redirect('/programCurriculum');
        });
    
    });
};


exports.addPlacement = function (req, res, next) {
    var id = req.params.Idnumber;
    req.getConnection(function(err, connection){
        if (err){ 
            return next(err);
        }
        
        var input = JSON.parse(JSON.stringify(req.body));
        var data = {
                    Idnumber : input.Idnumber,
                    Name : input.Name,
                    Surname : input.surname,
                    Work_location : input.work_location,
                    Remuneration_amount : input.remuneration_amount,
                    Activities : input.activities,
                    Month : input.month,
                    Mentor_name : input.mentor_name,
                    Sign_attendance : input.sign_attendance
            };
        connection.query('INSERT INTO placement set ?', [data], function(err, results) {
            if (err)
                console.log("Error inserting : %s ", err );
            console.log(results);
                res.redirect( '/placement')
        });
        
    });
};

exports.addExitPlan = function (req, res, next) {
    var id = req.params.IDno;
    req.getConnection(function(err, connection){
        if (err){ 
            return next(err);
        }
        
        var input = JSON.parse(JSON.stringify(req.body));
        var data = {
                    IDno : input.IDno,
                    Name : input.Name,
                    Surname : input.surname,
                    Education : input.education,
                    Employed : input.employed,
                    Sector : input.sector,
                    Entrepreneur : input.entrepreneur,
                    Sectors : input.sectors
            };
            
        connection.query('INSERT INTO exitPlan set ?', [data], function(err, results) {
            if (err)
                console.log("Error inserting : %s ", err );
            console.log(results);
                res.redirect( '/exitPlan')
        });
        
    });
};

exports.captureAttendance = function (req, res, next) {
    var id = req.params.Idnumber;
    var data = JSON.parse(JSON.stringify(req.body));
    req.getConnection(function(err, connection){
        if (err){ 
            return next(err);
        }
        connection.query('INSERT INTO attended SELECT Idnumber, surname, Name, accountNo, branch, course, location, facilitator FROM learner WHERE Idnumber = ?', [id], function(err, results) {
            if (err)
                console.log("Error inserting : %s ", err );
        connection.query('INSERT INTO attendanceRecord SELECT Idnumber, surname, Name, course, location, facilitator, COUNT(1+1) AS week FROM learner, events WHERE Idnumber = ?', [id], function(err, results) {
            if (err)
                console.log("Error inserting : %s ", err );
        req.getConnection(function(err, connection){
            connection.query('UPDATE attendanceRecord SET week = (week + 1)', [data], function(err, rows){
                
                if (err){
                        console.log("Error Updating : %s ",err );
                }
                res.redirect( '/attendanceCaptureView')
          });
            });
        });
    });
    });
};

/*exports.getUpdateAttendanceCaptureView = function(req, res, next){
    var id = req.params.Idnumber;
    req.getConnection(function(err, connection){
        connection.query('SELECT * FROM attendanceRecord WHERE Idnumber = ?', [id], function(err,rows){
            if(err){
                    console.log("Error Selecting : %s ",err );
            }
            res.render('viewAttendanceRecord',{page_title:" edit facilitator - Node.js", data : rows[0]});      
        }); 
    });
};*/


exports.updateViewAttendanceRecord = function(req, res, next){

    var data = JSON.parse(JSON.stringify(req.body));
        var id = req.params.Idnumber;
        req.getConnection(function(err, connection){
            connection.query('UPDATE attendanceRecord SET count=COUNT(count+1) WHERE Idnumber = ?', [data, id], function(err, rows){
                
                if (err){
                        console.log("Error Updating : %s ",err );
                }
                res.redirect('/viewAttendanceRecord');
            });
    });
};

exports.getLearnerProfile= function (req, res, next) {
    var id = req.params.Idnumber;
    req.getConnection(function(err, connection){
        if (err){ 
            return next(err);
        }
        connection.query('INSERT INTO profile SELECT Idnumber, surname, Name, interest, education, dependancy FROM learner WHERE Idnumber = ?', [id], function(err, results) {
            if (err)
                console.log("Error inserting : %s ", err );
                res.redirect( '/learnerProfile')
        });
       
    });
};



exports.SortName = function (req, res, next) {
	req.getConnection(function(err, connection){
		if (err) 
			return next(err);
		connection.query('SELECT * FROM learner ORDER BY Name ASC ', [], function(err, results) {
        	if (err) return next(err);

    		res.render( 'learner', {
    			learner : results
    		});
      });
	});
};

exports.SortSurname = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err) 
            return next(err);
        connection.query('SELECT * FROM learner ORDER BY surname ASC ', [], function(err, results) {
            console.log("sorted");
            if (err) return next(err);

            res.render( 'surname', {
                learner : results
            });
      });
    });
};

exports.SortGender = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err) 
            return next(err);
        connection.query('SELECT * FROM learner ORDER BY gender ASC ', [], function(err, results) {
            if (err) return next(err);

            res.render( 'gender', {
                learner : results
            });
      });
    });
};


exports.SortCourse = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err) 
            return next(err);
        connection.query('SELECT * FROM learner ORDER BY course ASC ', [], function(err, results) {
            console.log("sorted");
            if (err) return next(err);

            res.render( 'course', {
                learner : results
            });
      });
    });
};

exports.SortRace = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err) 
            return next(err);
        connection.query('SELECT * FROM learner ORDER BY race ASC ', [], function(err, results) {
            console.log("sorted");
            if (err) return next(err);

            res.render( 'race', {
                learner : results
            });
      });
    });
};

exports.SortLanguage = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err) 
            return next(err);
        connection.query('SELECT * FROM learner ORDER BY Language ASC ', [], function(err, results) {
            if (err) return next(err);

            res.render( 'Language', {
                learner : results
            });
      });
    });
};

exports.SortAddress = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err) 
            return next(err);
        connection.query('SELECT * FROM learner ORDER BY address ASC ', [], function(err, results) {
            if (err) return next(err);

            res.render( 'address', {
                learner : results
            });
      });
    });
};

exports.SortFacilitator = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err) 
            return next(err);
        connection.query('SELECT * FROM learner ORDER BY facilitator ASC ', [], function(err, results) {
            if (err) return next(err);

            res.render( 'facilitator', {
                learner : results
            });
      });
    });
};

exports.SortGraduate = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err) 
            return next(err);
        connection.query('SELECT * FROM learner ORDER BY graduate ASC ', [], function(err, results) {
            if (err) return next(err);

            res.render( 'graduate', {
                learner : results
            });
      });
    });
};

exports.SortLocation = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err) 
            return next(err);
        connection.query('SELECT * FROM learner ORDER BY location ASC ', [], function(err, results) {
            if (err) return next(err);

            res.render( 'location', {
                learner : results
            });
      });
    });
};

exports.getView = function(req, res, next){
  var id = req.params.Idnumber;
  req.getConnection(function(err, connection){
    connection.query('SELECT address from learner where Idnumber = ?', [id], function(err,rows){
      if(err){
            console.log("Error Selecting : %s ",err );
      }
      res.render('view',{page_title:" view learner - Node.js", data : rows[0]});      
    }); 
  });
};
exports.getViewAccountNo = function(req, res, next){
  var id = req.params.Idnumber;
  req.getConnection(function(err, connection){
    connection.query('SELECT accountNo, branch from learner where Idnumber = ?', [id], function(err,rows){
      if(err){
            console.log("Error Selecting : %s ",err );
      }
      res.render('viewAccountNo',{page_title:" view learner - Node.js", data : rows[0]});      
    }); 
  });
};
exports.getViewFacilitator = function(req, res, next){
  var id = req.params.Idnumber;
  req.getConnection(function(err, connection){
    connection.query('SELECT facilitator FROM learner where Idnumber = ?', [id], function(err,rows){
      if(err){
            console.log("Error Selecting : %s ",err );
      }
      res.render('viewFacilitator',{page_title:" view learner - Node.js", data : rows[0]});      
    }); 
  });
};

exports.getViewLocation = function(req, res, next){
  var id = req.params.Idnumber;
  req.getConnection(function(err, connection){
    connection.query('SELECT location, DATE_FORMAT(course_date, GET_FORMAT(DATE,"EUR")) AS course_date, graduate, facilitator FROM learner where Idnumber = ?', [id], function(err,rows){
      if(err){
            console.log("Error Selecting : %s ",err );
      }
      res.render('viewLocation',{page_title:" view learner - Node.js", data : rows[0]});      
    }); 
  });
};

exports.getViewPersonalInfo = function(req, res, next){
  var id = req.params.Idnumber;
  req.getConnection(function(err, connection){
    connection.query('SELECT * FROM learner where Idnumber = ?', [id], function(err,rows){
      if(err){
            console.log("Error Selecting : %s ",err );
      }

  connection.query('INSERT INTO profile SELECT Idnumber, surname, Name, interest, education, dependancy FROM learner WHERE Idnumber = ?', [id], function(err, results) {
            if (err)
                console.log("Error inserting : %s ", err );
    });
      res.render('viewPersonalInfo',{page_title:" view learner - Node.js", data : rows[0]});      
    }); 
  });
};

exports.getViewAttendanceRecord = function(req, res, next){
  var id = req.params.Idnumber;
  req.getConnection(function(err, connection){
    connection.query('select week from attendanceRecord',function(err,rows){
      if(err){
            console.log("Error Selecting : %s ",err );
      }
      res.render('viewAttendanceRecord',{page_title:" view attendance Count - Node.js", data : rows[0]});    
    }); 
  });
};

exports.getViewWineIndustry = function(req, res, next){
  var id = req.params.Idnumber;
  req.getConnection(function(err, connection){
    connection.query('SELECT fields, wine, cellar, marketing, receptionist, packaging, exports, logistic, tourism FROM questionaire where Idnumber = ?', [id], function(err,rows){
      if(err){
            console.log("Error Selecting : %s ",err );
      }
      res.render('viewWineIndustry',{page_title:" view wine Industry - Node.js", data : rows[0]});      
    }); 
  });
};

exports.getViewFruitVeg = function(req, res, next){
  var id = req.params.Idnumber;
    var isCheck = false;
    if(req.body.fruit === '0' || req.body.dairy === '0' || req.body.vegetable === '0' || req.body.berry === '0' || req.body.deciduous === '0') {
        isCheck = true;
    }
  req.getConnection(function(err, connection){
    connection.query('SELECT fruit, dairy, vegetable, berry, deciduous FROM questionaire where Idnumber = ?', [id], function(err,rows){
      if(err){
            console.log("Error Selecting : %s ",err );
      }
      res.render('viewFruitVeg',{page_title:" view Fruit and Veg - Node.js", data : rows[0]});      
    }); 
  });
};

exports.delete = function(req, res, next){
    var id = req.params.Idnumber;
    req.getConnection(function(err, connection){
        connection.query('DELETE learner FROM learner  WHERE Idnumber = ?', [id], function(err,rows){
            if(err){
                    console.log("Error Selecting : %s ",err );
            }
            res.redirect('/learner');
        });
    });
};
 

exports.deleteFacilitator = function(req, res, next){
    var id = req.params.idNo;
    req.getConnection(function(err, connection){
        connection.query('DELETE facilitator FROM facilitator WHERE idNo = ?', [id], function(err,rows){
            if(err){
                    console.log("Error Selecting : %s ",err );
            }
            res.redirect('/lecturer');
        });
    });
};

exports.deleteDate = function(req, res, next){
    var id = req.params.month;
    req.getConnection(function(err, connection){
        connection.query('DELETE events FROM events', function(err,rows){
            
            if(err){
                    console.log("Error Selecting : %s ",err );
            }
            res.redirect('/attendance');
        });
    });
};

exports.deleteAttendanceCaptureView = function(req, res, next){
    var id = req.params.Idnumber;
    req.getConnection(function(err, connection){
        connection.query('DELETE attended FROM attended WHERE Idnumber = ?', [id], function(err,rows){
            if(err){
                    console.log("Error Selecting : %s ",err );
            }
            res.redirect('/attendanceCaptureView');
        });
    });
};

exports.deleteProgram = function(req, res, next){
    var id = req.params.module_name;
    req.getConnection(function(err, connection){
        connection.query('DELETE programCurriculum FROM programCurriculum WHERE module_name = ?', [id], function(err,rows){
            if(err){
                    console.log("Error Selecting : %s ",err );
            }
            res.redirect('/programCurriculum');
        });
    });
};

exports.deleteProfile = function(req, res, next){
    var id = req.params.Idnumber;
    req.getConnection(function(err, connection){
        connection.query('DELETE profile FROM profile WHERE Idnumber = ?', [id], function(err,rows){
            if(err){
                    console.log("Error Selecting : %s ",err );
            }
            res.redirect('/learnerProfile');
        });
    });
};

exports.deletePlacement = function(req, res, next){
    var id = req.params.Idnumber;
    req.getConnection(function(err, connection){
        connection.query('DELETE placement FROM placement WHERE Idnumber = ?', [id], function(err,rows){
            if(err){
                    console.log("Error Selecting : %s ",err );
            }
            res.redirect('/placement');
        });
    });
};

exports.deleteQuestionaire = function(req, res, next){
    var id = req.params.Idnumber;
    req.getConnection(function(err, connection){
        connection.query('DELETE questionaire FROM questionaire WHERE Idnumber = ?', [id], function(err,rows){
            if(err){
                    console.log("Error Selecting : %s ",err );
            }
            res.redirect('/feedbackQuestionaire');
        });
    });
};

exports.deleteExitPlan = function(req, res, next){
    var id = req.params.IDno;
    req.getConnection(function(err, connection){
        connection.query('DELETE exitPlan FROM exitPlan WHERE IDno = ?', [id], function(err,rows){
            if(err){
                    console.log("Error Selecting : %s ",err );
            }
            res.redirect('/exitPlan');
        });
    });
};

exports.deleteLearnerDropOut = function(req, res, next){
    var id = req.params.Idnumber;
    req.getConnection(function(err, connection){
        connection.query('DELETE learnerDropOut FROM learnerDropOut WHERE Idnumber = ?', [id], function(err,rows){
            if(err){
                    console.log("Error Selecting : %s ",err );
            }
            res.redirect('/learnerDropOut');
        });
    });
};

exports.deleteAttendanceCaptureView = function(req, res, next){
    req.getConnection(function(err, connection){
        connection.query('TRUNCATE TABLE attended', function(err,rows){
            if(err){
                    console.log("Error Selecting : %s ",err );
            }
            res.redirect('/attendanceCaptureView');
        });
    });
};

exports.getUpdate = function(req, res, next){
	var id = req.params.Idnumber;
	req.getConnection(function(err, connection){
		connection.query('SELECT * FROM learner WHERE Idnumber = ?', [id], function(err,rows){
			if(err){
    				console.log("Error Selecting : %s ",err );
			}
			res.render('edit',{page_title:" edit learner - Node.js", data : rows[0]});      
		}); 
	});
};

exports.getplacement_add = function(req, res, next){
    var id = req.params.Idnumber;
    req.getConnection(function(err, connection){
        connection.query('SELECT Idnumber, Name, surname FROM learner WHERE Idnumber = ?', [id], function(err,rows){
            if(err){
                    console.log("Error Selecting : %s ",err );
            }
            res.render('placement_add',{page_title:" add learner - Node.js", data : rows[0]});      
        }); 
    });
};

exports.getUpdateFacilitator = function(req, res, next){
    var id = req.params.idNo;
    req.getConnection(function(err, connection){
        connection.query('SELECT * FROM facilitator WHERE idNo = ?', [id], function(err,rows){
            if(err){
                    console.log("Error Selecting : %s ",err );
            }
            res.render('editLecturer',{page_title:" edit facilitator - Node.js", data : rows[0]});      
        }); 
    });
};

exports.getUpdateProgram = function(req, res, next){
    var id = req.params.module_name;
    req.getConnection(function(err, connection){
        connection.query('SELECT * FROM programCurriculum WHERE module_name = ?', [id], function(err,rows){
            if(err){
                    console.log("Error Selecting : %s ",err );
            }
            res.render('editProgram',{page_title:" edit programCurriculum - Node.js", data : rows[0]});      
        }); 
    });
};

exports.getUpdatePlacement = function(req, res, next){
    var id = req.params.Idnumber;
    req.getConnection(function(err, connection){
        connection.query('SELECT * FROM placement WHERE Idnumber = ?', [id], function(err,rows){
            if(err){
                    console.log("Error Selecting : %s ",err );
            }
            res.render('editPlacement',{page_title:" edit placement - Node.js", data : rows[0]});      
        }); 
    });
};

exports.getUpdateExitPlan = function(req, res, next){
    var id = req.params.IDno;
    req.getConnection(function(err, connection){
        connection.query('SELECT * FROM exitPlan WHERE IDno = ?', [id], function(err,rows){
            if(err){
                    console.log("Error Selecting : %s ",err );
            }
            res.render('editExitPlan',{page_title:" edit Exit Plan - Node.js", data : rows[0]});      
        }); 
    });
};

exports.getUpdateQuestionaire = function(req, res, next){
    var id = req.params.Idnumber;
    req.getConnection(function(err, connection){
        connection.query('SELECT * FROM questionaire WHERE Idnumber = ?', [id], function(err,rows){
            if(err){
                    console.log("Error Selecting : %s ",err );
            }
            res.render('editFeedbackquestionaire',{page_title:" edit feedbackQuestionaire - Node.js", data : rows[0]});      
        }); 
    });
};

exports.getUpdateLeanerDropOut = function(req, res, next){
    var id = req.params.Idnumber;
    req.getConnection(function(err, connection){
        connection.query('SELECT * FROM learnerDropOut WHERE Idnumber = ?', [id], function(err,rows){
            if(err){
                    console.log("Error Selecting : %s ",err );
            }
            res.render('editLearnerDropOut',{page_title:" edit LearnerDropOute - Node.js", data : rows[0]});      
        }); 
    });
};


exports.update = function(req, res, next){

	var data = JSON.parse(JSON.stringify(req.body));
    	var id = req.params.Idnumber;
    	req.getConnection(function(err, connection){
    		connection.query('UPDATE learner SET ? WHERE Idnumber = ?', [data, id], function(err, rows){
    			if (err){
              			console.log("Error Updating : %s ",err );
    			}
          		res.redirect('/learner');
    		});
    });
};

exports.updateFacilitator = function(req, res, next){

    var data = JSON.parse(JSON.stringify(req.body));
        var id = req.params.idNo;
        req.getConnection(function(err, connection){
            connection.query('UPDATE facilitator SET ? WHERE idNo = ?', [data, id], function(err, rows){
                if (err){
                        console.log("Error Updating : %s ",err );
                }
                res.redirect('/lecturer');
            });
    });
};

exports.updateProgram = function(req, res, next){

    var data = JSON.parse(JSON.stringify(req.body));
        var id = req.params.module_name;
        req.getConnection(function(err, connection){
            connection.query('UPDATE programCurriculum SET ? WHERE module_name = ?', [data, id], function(err, rows){
                if (err){
                        console.log("Error Updating : %s ",err );
                }
                res.redirect('/programCurriculum');
            });
    });
};

exports.updatePlacement = function(req, res, next){

    var data = JSON.parse(JSON.stringify(req.body));
        var id = req.params.Idnumber;
        req.getConnection(function(err, connection){
            connection.query('UPDATE placement SET ? WHERE Idnumber = ?', [data, id], function(err, rows){
                if (err){
                        console.log("Error Updating : %s ",err );
                }
                res.redirect('/placement');
            });
    });
};

exports.updateExitPlan = function(req, res, next){

    var data = JSON.parse(JSON.stringify(req.body));
        var id = req.params.IDno;
        req.getConnection(function(err, connection){
            connection.query('UPDATE exitPlan SET ? WHERE IDno = ?', [data, id], function(err, rows){
                if (err){
                        console.log("Error Updating : %s ",err );
                }
                res.redirect('/exitPlan');
            });
    });
};

exports.updateQuestionaire = function(req, res, next){

    var data = JSON.parse(JSON.stringify(req.body));
        var id = req.params.Idnumber;
        req.getConnection(function(err, connection){
            connection.query('UPDATE questionaire SET ? WHERE Idnumber = ?', [data, id], function(err, rows){
                if (err){
                        console.log("Error Updating : %s ",err );
                }
                res.redirect('/feedbackQuestionaire');
            });
    });
};

exports.updateLearnerDropOut = function(req, res, next){

    var data = JSON.parse(JSON.stringify(req.body));
        var id = req.params.Idnumber;
        req.getConnection(function(err, connection){
            connection.query('UPDATE learnerDropOut SET ? WHERE Idnumber = ?', [data, id], function(err, rows){
                if (err){
                        console.log("Error Updating : %s ",err );
                }
                res.redirect('/learnerDropOut');
            });
    });
};

exports.getUpdateAttendanceCaptureView = function(req, res, next){
    var id = req.params.Idnumber;
    req.getConnection(function(err, connection){
        connection.query('SELECT * FROM attended WHERE Idnumber = ?', [id], function(err,rows){
            console.log("very");
            if(err){
                    console.log("Error Selecting : %s ",err );
            }
            res.render('editAttended',{page_title:" edit attended - Node.js", data : rows[0]});      
        }); 
    });
};


exports.updateAttendanceCaptureView = function(req, res, next){

    var data = JSON.parse(JSON.stringify(req.body));
        var id = req.params.Idnumber;
        req.getConnection(function(err, connection){
            connection.query('UPDATE attended SET ? WHERE Idnumber = ?', [data, id], function(err, rows){
                if (err){
                        console.log("Error Updating : %s ",err );
                }
                res.redirect('/attendanceCaptureView');
            });
    });
};



exports.getSearchNames = function(req, res, next){
    req.getConnection(function(err, connection){
        if(err)
            return next(err);

        var searchValue = req.params.searchValue;
        
        var processResults = function(err, results){
                if (err) return next(err);
                res.render('learnersList', {
                    //username: req.session.user,
                    learner : results,
                    //layout : false
                });
            };

        if(searchValue === "all"){
            connection.query("SELECT Idnumber, Name, surname, gender, race, Language, phone, address, accountNo, branch, course, location, facilitator FROM learner", processResults )
        }
        else{
            searchValue = "%" + searchValue + "%";
            connection.query("SELECT Idnumber, Name, surname, gender, race, Language, phone, address, accountNo, branch, course, location, facilitator FROM learner WHERE Name LIKE ?", [searchValue], processResults);
        }
        
    });
};

exports.getSearchSurnames = function(req, res, next){
    req.getConnection(function(err, connection){
        if(err)
            return next(err);

        var searchValue = req.params.searchValue;
        
        var processResults = function(err, results){
                if (err) return next(err);
                                

                res.render('surnamesList', {
                    //username: req.session.user,
                    learner : results,
                    //layout : false
                });
                
            };

        if(searchValue === "all"){
            connection.query("SELECT Idnumber, Name, surname, gender, race, Language, phone, address, accountNo, branch, course, location, facilitator FROM learner", processResults )
        }
        else{
            searchValue = "%" + searchValue + "%";
            connection.query("SELECT Idnumber, Name, surname, gender, race, Language, phone, address, accountNo, branch, course, location, facilitator FROM learner WHERE surname LIKE ?", [searchValue], processResults);
        }
    });
};

exports.getSearchCourses = function(req, res, next){
    req.getConnection(function(err, connection){
        if(err)
            return next(err);

        var searchValue = req.params.searchValue;
        
        var processResults = function(err, results){
                if (err) return next(err);
                
                res.render('coursesList', {
                    //username: req.session.user,
                    learner : results,
                    //layout : false
                });
                
            };

        if(searchValue === "all"){
            connection.query("SELECT Idnumber, Name, surname, gender, race, Language, phone, address, accountNo, branch, course, location, facilitator  FROM learner", processResults )
        }
        else{
            searchValue = "%" + searchValue + "%";
            connection.query("SELECT Idnumber, Name, surname, gender, race, Language, phone, address, accountNo, branch, course, location, facilitator  FROM learner WHERE course LIKE ?", [searchValue], processResults);
        }
    });
};

exports.getSearchGenders = function(req, res, next){
    req.getConnection(function(err, connection){
        if(err)
            return next(err);
        var searchValue = req.params.searchValue;
        
        var processResults = function(err, results){
                if (err) return next(err);
                                

                res.render('gendersList', {
                    //username: req.session.user,
                    learner : results,
                    //layout : false
                });
                
            };
        if(searchValue === "all"){
            connection.query("SELECT Idnumber, Name, surname, gender, race, Language, phone, address, accountNo, branch, course, location, facilitator FROM learner", processResults )
        }
        else{
            searchValue = "%" + searchValue + "%";
            connection.query("SELECT Idnumber, Name, surname, gender, race, Language, phone, address, accountNo, branch, course, location, facilitator FROM learner WHERE gender LIKE ?", [searchValue], processResults);
        }
        console.log("ok.......")
    });
};

exports.getSearchRaces = function(req, res, next){
    req.getConnection(function(err, connection){
        if(err)
            return next(err);

        var searchValue = req.params.searchValue;
        
        var processResults = function(err, results){
                if (err) return next(err);
                                

                res.render('racesList', {
                    //username: req.session.user,
                    learner : results,
                    //layout : false
                });
                
            };

        if(searchValue === "all"){
            connection.query("SELECT Idnumber, Name, surname, gender, race, Language, phone, address, accountNo, branch, course, location, facilitator FROM learner", processResults )
        }
        else{
            searchValue = "%" + searchValue + "%";
            connection.query("SELECT Idnumber, Name, surname, gender, race, Language, phone, address, accountNo, branch, course, location, facilitator FROM learner WHERE race LIKE ?", [searchValue], processResults);
        }
    });
};
exports.getSearchLanguages = function(req, res, next){
    req.getConnection(function(err, connection){
        if(err)
            return next(err);

        var searchValue = req.params.searchValue;
        
        var processResults = function(err, results){
                if (err) return next(err);
                                

                res.render('languagesList', {
                    //username: req.session.user,
                    learner : results,
                    //layout : false
                });
                
            };

        if(searchValue === "all"){
            connection.query("SELECT Idnumber, Name, surname, gender, race, Language, phone, address, accountNo, branch, course, location, facilitator FROM learner", processResults )
        }
        else{
            searchValue = "%" + searchValue + "%";
            connection.query("SELECT Idnumber, Name, surname, gender, race, Language, phone, address, accountNo, branch, course, location, facilitator FROM learner WHERE Language LIKE ?", [searchValue], processResults);
        }
    });
};

exports.getSearchAddresses = function(req, res, next){
    req.getConnection(function(err, connection){
        if(err)
            return next(err);

        var searchValue = req.params.searchValue;
        
        var processResults = function(err, results){
                if (err) return next(err);
                                

                res.render('addressesList', {
                    //username: req.session.user,
                    learner : results,
                    //layout : false
                });
                
            };

        if(searchValue === "all"){
            connection.query("SELECT Idnumber, Name, surname, gender, race, Language, phone, address, accountNo, branch, course, location, facilitator FROM learner", processResults )
        }
        else{
            searchValue = "%" + searchValue + "%";
            connection.query("SELECT Idnumber, Name, surname, gender, race, Language, phone, address, accountNo, branch, course, location, facilitator FROM learner WHERE address LIKE ?", [searchValue], processResults);
        }
    });
};

exports.getSearchFacilitators = function(req, res, next){
    req.getConnection(function(err, connection){
        if(err)
            return next(err);

        var searchValue = req.params.searchValue;
        
        var processResults = function(err, results){
                if (err) return next(err);
                                

                res.render('facilitatorsList', {
                    //username: req.session.user,
                    learner : results,
                    //layout : false
                });
                
            };

        if(searchValue === "all"){
            connection.query("SELECT Idnumber, Name, surname, gender, race, Language, phone, address, accountNo, branch, course, location, facilitator FROM learner", processResults )
        }
        else{
            searchValue = "%" + searchValue + "%";
            connection.query("SELECT Idnumber, Name, surname, gender, race, Language, phone, address, accountNo, branch, course, graduate, location, facilitator FROM learner WHERE facilitator LIKE ?", [searchValue], processResults);
        }
    });
};

exports.getSearchGraduates = function(req, res, next){
    req.getConnection(function(err, connection){
        if(err)
            return next(err);

        var searchValue = req.params.searchValue;
        
        var processResults = function(err, results){
                if (err) return next(err);
                                

                res.render('graduatesList', {
                    //username: req.session.user,
                    learner : results,
                    //layout : false
                });
                
            };

        if(searchValue === "all"){
            connection.query("SELECT Idnumber, Name, surname, gender, race, Language, phone, address, accountNo, branch, course, location, facilitator FROM learner", processResults )
        }
        else{
            searchValue = "%" + searchValue + "%";
            connection.query("SELECT Idnumber, Name, surname, gender, race, Language, phone, address, accountNo, branch, course, location,graduate, facilitator FROM learner WHERE graduate LIKE ?", [searchValue], processResults);
        }
    });
};


exports.SearchLocation = function(req, res, next){
    req.getConnection(function(err, connection){
        if(err)
            return next(err);

        var searchValue = req.params.searchValue;
        
        var processResults = function(err, results){
                if (err) return next(err);
                                

                res.render('locationsList', {
                    //username: req.session.user,
                    learner : results,
                    //layout : false
                });
                
            };

        if(searchValue === "all"){
            connection.query("SELECT Idnumber, Name, surname, gender, race, Language, phone, address, accountNo, branch, course, location, facilitator FROM learner", processResults )
        }
        else{
            searchValue = "%" + searchValue + "%";
            connection.query("SELECT Idnumber,  surname, Name, phone FROM learner WHERE location LIKE ?", [searchValue], processResults);
        }
    });
};

exports.getSearchlocations = function(req, res, next){
    req.getConnection(function(err, connection){
        if(err)
            return next(err);

        var searchValue = req.params.searchValue;
        
        var processResults = function(err, results){
                if (err) return next(err);
                                

                res.render('locationssList', {
                    //username: req.session.user,
                    learner : results,
                    //layout : false
                });
                
            };

        if(searchValue === "all"){
            connection.query("SELECT Idnumber, Name, surname, gender, race, Language, phone, address, accountNo, branch, course, location, facilitator FROM learner", processResults )
        }
        else{
            searchValue = "%" + searchValue + "%";
            connection.query("SELECT Idnumber, Name, surname, gender, race, Language, phone, address, accountNo, branch, course, location, facilitator FROM learner WHERE location LIKE ?", [searchValue], processResults);
        }
    });
};


exports.getSearchAttended = function(req, res, next){
    req.getConnection(function(err, connection){
        if(err)
            return next(err);

        var searchValue = req.params.searchValue;
        
        var processResults = function(err, results){
                if (err) return next(err);
                                

                res.render('attendedsList', {
                    //username: req.session.user,
                    learner: results,
                    //layout : false
                });
                
            };

        if(searchValue === "all"){
            connection.query("SELECT Idnumber,  surname, Name, accountNo, branch, course, location, facilitator FROM attended", processResults )
        }
        else{
            searchValue = "%" + searchValue + "%";
            connection.query("SELECT Idnumber,  surname, Name, acccountNo, branch, course, location, facilitator FROM attended WHERE acccountNo LIKE ?", [searchValue], processResults);
        }
    });
};

exports.getSearchProfile = function(req, res, next){
    req.getConnection(function(err, connection){
        if(err)
            return next(err);

        var searchValue = req.params.searchValue;
        
        var processResults = function(err, results){
                if (err) return next(err);
                                

                res.render('profilesList', {
                    //username: req.session.user,
                    learner: results,
                    //layout : false
                });
                
            };
        if(searchValue === "all"){
            connection.query("SELECT Idnumber,  surname, Name, interest, education, dependancy FROM learner", processResults )
        }
        else{
            searchValue = "%" + searchValue + "%";
            connection.query("SELECT Idnumber,  surname, Name, interest, education, dependancy FROM learner WHERE interest LIKE ?", [searchValue], processResults);
        }
    });
};
exports.getSearchLecturer = function(req, res, next){
    req.getConnection(function(err, connection){
        if(err)
            return next(err);

        var searchValue = req.params.searchValue;
        
        var processResults = function(err, results){
                if (err) return next(err);
                                

                res.render('lecturersList', {
                    //username: req.session.user,
                    facilitator : results,
                    //layout : false
                });
                
            };

        if(searchValue === "all"){
            connection.query("SELECT * FROM facilitator", processResults )
        }
        else{
            searchValue = "%" + searchValue + "%";
            connection.query("SELECT * FROM facilitator WHERE location LIKE ?", [searchValue], processResults);
        }
    });
};

exports.getSearchWork_location = function(req, res, next){
    req.getConnection(function(err, connection){
        if(err)
            return next(err);

        var searchValue = req.params.searchValue;
        
        var processResults = function(err, results){
                if (err) return next(err);
                                

                res.render('work_locationsList', {
                    //username: req.session.user,
                    placement: results,
                    //layout : false
                });
                
            };
        if(searchValue === "all"){
            connection.query("SELECT Idnumber, Name, surname, work_location, remuneration_amount, activities, month, sign_attendance FROM placement", processResults )
        }
        else{
            searchValue = "%" + searchValue + "%";
            connection.query("SELECT Idnumber, Name, surname, work_location, remuneration_amount, activities, month, sign_attendance FROM placement WHERE work_location LIKE ?", [searchValue], processResults);
        }
    });
};

exports.getSearchCurriculum = function(req, res, next){
    req.getConnection(function(err, connection){
        if(err)
            return next(err);

        var searchValue = req.params.searchValue;
        
        var processResults = function(err, results){
                if (err) return next(err);
                                

                res.render('curriculumsList', {
                    //username: req.session.user,
                    programCurriculum: results,
                    //layout : false
                });
                
            };
        if(searchValue === "all"){
            connection.query("SELECT * FROM programCurriculum", processResults )
        }
        else{
            searchValue = "%" + searchValue + "%";
            connection.query("SELECT * FROM programCurriculum WHERE facilitators LIKE ?", [searchValue], processResults);
        }
    });
};

exports.getSearchLocationVenue = function(req, res, next){
    req.getConnection(function(err, connection){
        if(err)
            return next(err);

        var searchValue = req.params.searchValue;
        
        var processResults = function(err, results){
                if (err) return next(err);
                                

                res.render('locationVenuesList', {
                    //username: req.session.user,
                    learnerDropOut: results,
                    //layout : false
                });
                
            };
        if(searchValue === "all"){
            connection.query("SELECT * FROM learnerDropOut", processResults )
        }
        else{
            searchValue = "%" + searchValue + "%";
            connection.query("SELECT * FROM learnerDropOut WHERE locationVenue LIKE ?", [searchValue], processResults);
        }
    });
};

exports.getSearchTrainingLocation = function(req, res, next){
    req.getConnection(function(err, connection){
        if(err)
            return next(err);

        var searchValue = req.params.searchValue;
        
        var processResults = function(err, results){
                if (err) return next(err);
                                

                res.render('trainingLocationsList', {
                    //username: req.session.user,
                    attendanceRecord: results,
                    //layout : false
                });
                
            };
        if(searchValue === "all"){
            connection.query("SELECT * FROM attendanceRecord", processResults )
        }
        else{
            searchValue = "%" + searchValue + "%";
            connection.query("SELECT * FROM attendanceRecord WHERE trainingVenue LIKE ?", [searchValue], processResults);
        }
    });
};