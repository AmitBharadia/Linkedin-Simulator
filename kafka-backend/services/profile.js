const express=require('express')
const router=express.Router();
const mongoose=require('mongoose');
const passport=require('passport');
const Profile=require('../models/Profile');

function handle_request(msg,callback){

    console.log("=====================In the kafka-backend Profile=====================")
    console.log("Request body:" + JSON.stringify(msg));


        
                console.log("Inside profile of KEtan")
                const profileData={}
                const newExp={}
                const newEdu={}

                if(msg.values.firstName) {profileData.first_name=msg.values.firstName}
                if(msg.values.lastName) {profileData.last_name=msg.values.lastName}
                if(msg.values.profileHeadline) {profileData.profileHeadline=msg.values.profileHeadline}
                if(msg.values.profileEducation) {profileData.profileEducation=msg.values.profileEducation}
                if(msg.values.Zipcode) {profileData.Zipcode=msg.values.Zipcode}
                if(msg.values.profileLocation) {profileData.profileLocation=msg.values.profileLocation}
                if(msg.values.profileIndustry) {profileData.profileIndustry=msg.values.profileIndustry}
                if(msg.values.profileContact) {profileData.profileContact=msg.values.profileContact}
                if(msg.values.profileSummary) {profileData.profileSummary=msg.values.profileSummary}
                if(msg.countryName) {profileData.countryName=msg.countryName}

                // Profile.findOneAndUpdate({first_name:"Dharma1"}, {$set:profileData})
                // .then((profile,err)=>{

                //     console.log("Error ", err, " profile ",profile);
                //     if(err){
                //         callback("Error occured",err);
                //     }
                //     if(profile){
                //         console.log("Primary details updated");
                //         //callback(null,profile);                
                //     }else{
                //         callback("No profile available",null);
                //     }
                //     console.log(
                //         "============================Out of the kafka-backend Profile====================="
                //       );
                // })

                console.log("Profile logggggs",profileData);


                if(msg.values.experienceTitle || msg.values.experienceCompany || msg.values.experienceLocation || msg.values.experienceHeadline || msg.ExpFromMonth || msg.ExpFromYear || msg.ExpToMonth || msg.ExpToYear){

                    
                    newExp.experienceTitle=msg.values.experienceTitle,
                    newExp.experienceCompany=msg.values.experienceCompany,
                    newExp.experienceLocation=msg.values.experienceLocation,
                    newExp.experienceHeadline=msg.values.experienceHeadline,
                    newExp.experienceDescription=msg.values.experienceDescription,
                    newExp.ExpFromMonth=msg.ExpFromMonth,
                    newExp.ExpFromYear=msg.ExpFromYear,
                    newExp.ExpToMonth=msg.ExpToMonth,
                    newExp.ExpToYear=msg.ExpToYear
                    console.log("++++++++++++++++++++++++++++++++++***********************",newExp);
                    console.log("++++++++++++++++++++++++++++++++++***********************")

                    // Profile.findOne({first_name:"Dharma1"},{new:true})
                    // .then((err,profile)=>{
                    //     if(profile){
                    //         profile.experience.unshift(newExp);
                    //         Profile.findOneAndUpdate({first_name: "Dharma1"}, {$push: {experience: newExp}})
                    //         .then((err,profile)=>{
                    //             console.log("Experience -----------------------------------detaails",profile);
                    //             if(profile){
                                     
                    //                 callback(null,profile);                             
                    //             }else{
                    //                 callback("No profile available",null);
                    //             }
                    //         });
                            
                    //     }else{
                    //         callback("No profile available",null);
                    //     }
                    // })
                    // Profile.findOne({first_name:"Dharma1"})
                    //     .then(profile=>{
                    //         console.log("Adding Experience .......");
                    //         profile.experience.unshift(newExp);
                    //         console.log("New profile", JSON.stringify(profile));

                    //         profile.save()
                    //         .then((profile,err)=>{
                    //             console.log("Error ", err, " profile ",profile);
                    //             if(err){
                    //                 callback("Error occured",err);
                    //             }
                    //             if(profile){
                    //                 console.log("Experience Added scussess");
                    //                // callback(null,profile);                
                    //             }else{
                    //                 callback("No profile available",null);
                    //             }
                                
                    //         })
                    //     })

                } 
            
            if(msg.values.educationSchool || msg.values.educationDegree || msg.values.educationFieldofStudy || msg.values.educationGrade || msg.values.educatonActivities || msg.values.educationDescription || msg.EduFromYear || msg.EduToYear){
               
                
                    newEdu.educationSchool=msg.values.educationSchool,
                    newEdu.educationDegree=msg.values.educationDegree,
                    newEdu.educationFieldofStudy=msg.values.educationFieldofStudy,
                    newEdu.educationGrade=msg.values.educationGrade,
                    newEdu.educationActivities=msg.values.educationActivities,
                    newEdu.educationDescription=msg.values.educationDescription,
                    newEdu.EduFromYear=msg.EduFromYear,
                    newEdu.EduToYear=msg.EduToYear
                    console.log("++++++++++++++++++++++++++++++++++***********************",newExp);
                    console.log("++++++++++++++++++++++++++++++++++***********************")
                    // Profile.findOne({first_name:"Dharma1"},{new:true})
                    // .then((err,profile)=>{
                    //     if(profile){
                    //         profile.education.unshift(newEdu);
                    //         Profile.findOneAndUpdate({first_name: "Dharma1"}, {$push: {education: newEdu}})
                    //         .then((err,profile)=>{
                    //             console.log("Education -------------------------------------------detaails",profile);
                    //             if(profile){
                                     
                    //                 callback(null,profile);                             
                    //             }else{
                    //                 callback("No profile available",null);
                    //             }
                    //         });
                    //         ;                
                    //     }else{
                    //         callback("No profile available",null);
                    //     }
                    // })

                    // Profile.findOne({first_name:"Dharma1"})
                    // .then(profile=>{
                    //     profile.education.unshift(newEdu);
                    //     profile.save().then(profile=>callback(profile,null))
                    // })

                // Profile.findOne({first_name:"Dharma1"})
                // .then(profile=>{
                //     console.log("Adding Experience .......");
                //     profile.education.unshift(newEdu);
                //     console.log("New profile", JSON.stringify(profile));

                //     profile.save()
                //     .then((profile,err)=>{
                //         console.log("Error ", err, " profile ",profile);
                //         if(err){
                //             callback("Error occured",err);
                //         }
                //         if(profile){
                //            // console.log("Primary details updated");
                //             callback(null,profile);                
                //         }else{
                //             callback("No profile available",null);
                //         }
                        
                //     })
                // })

                
               
            }

            Profile.findOne({first_name:"trialnerr"})
                .then(profile=>{
                    if(profile){
                        if(profileData){
                            Profile.findOneAndUpdate({first_name:"trialnerr"}, {$set:profileData})
                            .then((profile,err)=>{
                                    console.log("Error ", err, " profile ",profile);
                                    if(err){
                                        callback("Error occured",err);
                                    }
                                    if(profile){
                                        console.log("Primary details updated");
                                        //callback(null,profile);                
                                    }else{
                                      //  callback("No profile available",null);
                                    }
                                   
                                })
                
                        }
                        if(newExp){
                            profile.experience.unshift(newExp)
                            
                        }
                        if(newEdu){
                            profile.education.unshift(newEdu)
                            
                        }

                        profile.save()
                            .then((profile,err)=>{
                                console.log("Error ", err, " profile ",profile);
                                        if(err){
                                            callback("Error occured",err);
                                        }
                                        if(profile){
                                           // console.log("Primary details updated");
                                            callback(null,profile);                
                                        }else{
                                            callback("No profile available",null);
                                        }
                            })
                        
                    }else{
                        callback("No profile available",null);
                    }
                })

           
            // Profile.findOne({first_name:"Ketan"})
            //     .then(profile=>{
            //         if(profile){
            //             Profile.findOneAndUpdate({first_name:"Ketan"},{$set:profileData},{new:true})
            //                 .then(callback(null,profile))
            //         }else{
            //             callback(null,[]);
            //         }
            //     })

           
            
            
               // console.log("Printing msg ",msg);
           
    

    

            
    
}


exports.handle_request=handle_request;