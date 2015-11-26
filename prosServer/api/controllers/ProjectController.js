/**
 * ProjectController
 *
 * @description :: Server-side logic for managing projects
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    findAll: function (req, res, next) {
        console.log('iinside');
        Project.find(function (err, projects) {
            if (err)
                return next({ status: "ERROR", statusDescription: err });
            res.json({ projects: projects });
        });
    },
    create: function (req, res, nex) {
        console.log('inside create');
        console.log(req);
        var _proect = {

            
            proName: req.param("proName"),
            proTitle: req.param("proName"),
            proDes:req.param("proName"),
            proColor: req.param("proName")

        };
        console.log(_proect);
        // return Project.create(_proectr).then(function (pros) {
        //     console.log("orator created: " + JSON.stringify(pros));

        //     return res.redirect('/orators');
        // }).catch(function (err) {
        //     console.error("Error on ContactController.create");
        //     console.error(err);
        //     return res.redirect('/orators/new');
        // });
          Project.create(_proect,function userCreated(err,pros){

            if(err)
            {
               console.log(err);
               /* req.session.flash={err:err
                 };*/
                return next(err);
             //   return res.json({status:"ERROR",statusDescription:err});
            }
            return res.json({status:"OK",projects:pros});

        });
    }

};

