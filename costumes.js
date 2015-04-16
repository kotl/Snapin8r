
// If generated script is executed, it downloads and converts costumes into format appropriate to be used by Snap.
// Generated script is recommended to be run inside Snap/Costumes folder

if (process.argv.length != 3) {
    console.log("Usage: node customes.js costumesLibrary.js_location");
} else {
    var costumes = require(process.argv[2]);
    var tmpdir = process.argv[3];
    var destdir = process.argv[4];
    var downloaded = 0;
    var should_download = costumes.length;
    for (var i=0; i < costumes.length; i++) {
	var costume = costumes[i];
        var name = costume.name;
	name = name.split(' ').join('_');
	name = name.split("'").join('_');
	var ext = costume.md5.split('.')[1];
	name = name + "." + ext;
	var file_url = "http://cdn.assets.scratch.mit.edu/internalapi/asset/" + costume.md5 + "/get/";
	for (var t=0; t < 1; t++) {
	    var tag = costume.tags[t];
	    console.log("mkdir " + tag);
	    console.log("wget -O " + tag + "/" + name + " " + file_url);
	}
    }
}
