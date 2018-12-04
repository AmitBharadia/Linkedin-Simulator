const multerS3 = require("multer-s3");
const aws = require("aws-sdk");
const multer = require("multer");
var CONST = require("../const");

aws.config.update({
  secretAccessKey: CONST.awsS3Key,
  accessKeyId: CONST.awsS3Id,
  region: CONST.awsS3Region
});

var s3 = new aws.S3();

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: CONST.CompanyLogosBucket,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: "public-read",
    key: function(req, file, cb) {
      console.log(file);
      cb(null, file.originalname); //use Date.now() for unique file keys
    }
  })
});

module.exports = { upload };
