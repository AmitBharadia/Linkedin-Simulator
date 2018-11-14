const express=require('express')
const router=express.Router();
const mongoose=require('mongoose');
const passport=require('passport');

function handle_request(msg,callback){

    console.log("=====================In the kafka-backend Profile=====================")
    console.log("Request body:" + JSON.stringify(msg));


    // {"firstName":"Ketan",
    // "lastName":"Kodmelwar",
    // "profileHeadline":"Hewad",
    // "profileEducation":"SJSu"
    // ,"Zipcode":"95110"
    // ,"profileLocation":"San Jose"
    // ,"profileIndustry":"Nothing"
    // ,"profileContact":"oh yeah"
    // ,"profileSummary":"Summry"
    // ,"experienceTitle":"Manager"
    // ,"experienceCompany":"Microssoft"
    // ,"experienceLocation":"USA"
    // ,"experienceHeadline":"hmm"
    // ,"experienceDescription":"yess"
    // ,"educationSchool":"SJSU"
    // ,"educationDegree":"Masters"
    // ,"educationFieldofStudy":"Masters"
    // ,"educationGrade":"Much"
    // ,"educationActivities":"Cool"
    // ,"educationDescription":"sasd"}
    const profileData={}
    if(msg.firstName) {profileData.firstName=msg.firstName}
    if(msg.lastName) {profileData.lastName=msg.lastName}
    if(msg.profileHeadline) {profileData.profileHeadline=msg.profileHeadline}
    if(msg.profileEducation) {profileData.profileEducation=msg.profileEducation}
    if(msg.Zipcode) {profileData.Zipcode=msg.Zipcode}
    if(msg.profileLocation) {profileData.profileLocation=msg.profileLocation}
    if(msg.profileIndustry) {profileData.profileIndustry=msg.profileIndustry}
    if(msg.profileContact) {profileData.profileContact=msg.profileContact}
    if(msg.profileSummary) {profileData.profileSummary=msg.profileSummary}
    
    if(msg.experienceTitle) {profileData.experienceTitle=msg.experienceTitle}
    if(msg.experienceCompany) {profileData.experienceCompany=msg.experienceCompany}
    if(msg.experienceLocation) {profileData.experienceLocation=msg.experienceLocation}
    if(msg.experienceHeadline) {profileData.experienceHeadline=msg.experienceHeadline}
    if(msg.experienceDescription) {profileData.experienceDescription=msg.experienceDescription}
    
    if(msg.educationSchool) {profileData.educationSchool=msg.educationSchool}
    if(msg.educationDegree) {profileData.educationDegree=msg.educationDegree}
    if(msg.educationFieldofStudy) {profileData.educationFieldofStudy=msg.educationFieldofStudy}
    if(msg.educationGrade) {profileData.educationGrade=msg.educationGrade}
    if(msg.educatonActivities) {profileData.educatonActivities=msg.educatonActivities}
    if(msg.educationDescription) {profileData.educationDescription=msg.educationDescription}

    


    
}


exports.handle_request=handle_request;