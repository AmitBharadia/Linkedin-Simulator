var { User } = require("../models/User");
var mongoose = require("mongoose");
function handle_request(msg, callback) {
  console.log(
    "=====================In the kafka-backend update profile====================="
  );
  console.log("Request body:" + JSON.stringify(msg));
  const profileData = {};
  const newExp = {};
  const newEdu = {};
  //msg.values = msg;

  if (msg.profile_url) {
    profileData.profile_url = msg.profile_url;
  }
  if (msg.firstName) {
    profileData.first_name = msg.firstName;
  }
  if (msg.lastName) {
    profileData.last_name = msg.lastName;
  }
  if (msg.profileHeadline) {
    profileData.profileHeadline = msg.profileHeadline;
  }
  if (msg.profileEducation) {
    profileData.profileEducation = msg.profileEducation;
  }
  if (msg.Zipcode) {
    profileData.Zipcode = msg.Zipcode;
  }
  if (msg.profileLocation) {
    profileData.profileLocation = msg.profileLocation;
  }
  if (msg.profileIndustry) {
    profileData.profileIndustry = msg.profileIndustry;
  }
  if (msg.profileContact) {
    profileData.profileContact = msg.profileContact;
  }
  if (msg.profileSummary) {
    profileData.profileSummary = msg.profileSummary;
  }
  if (msg.countryName) {
    profileData.countryName = msg.countryName;
  }

  console.log("Profile logggggs", profileData);
  if (msg.values) {
    if (
      msg.values.experienceTitle ||
      msg.values.experienceCompany ||
      msg.values.experienceLocation ||
      msg.values.experienceHeadline ||
      msg.ExpFromMonth ||
      msg.ExpFromYear ||
      msg.ExpToMonth ||
      msg.ExpToYear
    ) {
      (newExp.experienceTitle = msg.values.experienceTitle),
        (newExp.experienceCompany = msg.values.experienceCompany),
        (newExp.experienceLocation = msg.values.experienceLocation),
        (newExp.experienceHeadline = msg.values.experienceHeadline),
        (newExp.experienceDescription = msg.values.experienceDescription),
        (newExp.ExpFromMonth = msg.ExpFromMonth),
        (newExp.ExpFromYear = msg.ExpFromYear),
        (newExp.ExpToMonth = msg.ExpToMonth),
        (newExp.ExpToYear = msg.ExpToYear);
      console.log(
        "++++++++++++++++++++++++++++++++++***********************",
        newExp
      );
      console.log("++++++++++++++++++++++++++++++++++***********************");
    }

    if (
      msg.values.educationSchool ||
      msg.values.educationDegree ||
      msg.values.educationFieldofStudy ||
      msg.values.educationGrade ||
      msg.values.educatonActivities ||
      msg.values.educationDescription ||
      msg.EduFromYear ||
      msg.EduToYear
    ) {
      (newEdu.educationSchool = msg.values.educationSchool),
        (newEdu.educationDegree = msg.values.educationDegree),
        (newEdu.educationFieldofStudy = msg.values.educationFieldofStudy),
        (newEdu.educationGrade = msg.values.educationGrade),
        (newEdu.educationActivities = msg.values.educationActivities),
        (newEdu.educationDescription = msg.values.educationDescription),
        (newEdu.EduFromYear = msg.EduFromYear),
        (newEdu.EduToYear = msg.EduToYear);
      console.log(
        "++++++++++++++++++++++++++++++++++***********************",
        newExp
      );
      console.log("++++++++++++++++++++++++++++++++++***********************");
    }
  }
  User.findOne({ _id: mongoose.Types.ObjectId(msg.id) }).then(profile => {
    if (profile) {
      if (profileData) {
        User.findOneAndUpdate(
          { _id: mongoose.Types.ObjectId(msg.id) },
          { $set: profileData }
        ).then((profile, err) => {
          console.log("Error ", err, " profile ", profile);
          if (err) {
            callback("Error occured", err);
          }
          if (profile) {
            console.log("Primary details updated");
            callback(null, profile);
          }
          console.log(
            "=====================out of  the kafka-backend update profile====================="
          );
        });
      }
      if (newExp) {
        profile.experience.unshift(newExp);
      }
      if (newEdu) {
        profile.education.unshift(newEdu);
      }

      profile.save().then((profile, err) => {
        console.log("Error ", err, " profile ", profile);
        if (err) {
          callback("Error occured", err);
        }
        if (profile) {
          // console.log("Primary details updated");
          callback(null, profile);
        } else {
          callback("No profile available", null);
        }
        console.log(
          "=====================out of  the kafka-backend update profile====================="
        );
      });
    } else {
      callback("No profile available", null);
      console.log(
        "=====================out of  the kafka-backend update profile====================="
      );
    }
  });
}

exports.handle_request = handle_request;
