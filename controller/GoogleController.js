const path = require("path");
//const { google } = require("googleapis");
const { google } = require("googleapis");
const KEYFILEPATH = "./googlekey1.json";
const GOOGLE_DRIVE_FOLDER_ID = "1F47yn0Sv4fy2UcDb_X-hZuHCc28y4BUy";
const fs = require("fs");

async function uploadFile(file) {
  var p = path.basename(file);
  console.log(p);

  const auth = new google.auth.GoogleAuth({
    keyFile: KEYFILEPATH,
    scopes: ["https://www.googleapis.com/auth/drive"],
  });
  const driveService = google.drive({ version: "v3", auth });
  const fileMetadata = {
    name: p,
    parents: [GOOGLE_DRIVE_FOLDER_ID],
  };
  const media = {
    mimeType: "image/jpeg",
    body: fs.createReadStream(file),
  };
  const response = await driveService.files.create({
    resource: fileMetadata,
    media: media,
    fields: "id",
  });
  console.log(".....id.",response.data.id);
  return response.data.id;
}

module.exports = {
    uploadFile,
}