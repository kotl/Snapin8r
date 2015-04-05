
var JSZip = require("./jszip.min.js");
var fs = require("fs");
require("./snapin8r.js");

if (process.argv.length != 5) {
    console.log("Usage: node convert.js inputfile outputfile tmpdir");
} else {
fs.readFile(process.argv[2], function(err, data) {
    var zip = new JSZip();
    zip.load(data);
    try{
	// delete output file just in case in exists
	fs.unlinkSync(process.argv[3]);
    } catch(err) {}
    Snapin8r(zip, process.argv[2], process.argv[4], function(success, msg, res) {
	if (success) {
	    // Writing file
	    fs.writeFile(process.argv[3], res, function(err) {
		if(err) {
		    console.log(err);
		    process.exit(2);
		}
  		console.log("Done");
		process.exit(0);
	    });
	} else {
	    console.log("Failed:" + msg);
	    process.exit(1);
	}

    });
});
}