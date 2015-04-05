
// This js file generates bash script (using soundLibrary.json downloaded from here:
// wget http://cdn.scratch.mit.edu/scratchr2/static/__400dd8e8558104c73a93609166164867__/medialibraries/soundLibrary.json )

// If generated script is executed, it downloads and converts sounds into format appropriate to be used by Snap.
// Generated script is recommended to be run inside Snap/Sounds folder

if (process.argv.length != 3) {
    console.log("Usage: node sounds.js soundLibrary.js_location");
} else {
    var sounds = require(process.argv[2]);
    var tmpdir = process.argv[3];
    var destdir = process.argv[4];
    var downloaded = 0;
    var should_download = sounds.length;
    for (var i=0; i < sounds.length; i++) {
	var sound = sounds[i];
        var name = sound.name + ".wav";
	name = name.split(' ').join('_');
	var file_url = "http://cdn.assets.scratch.mit.edu/internalapi/asset/" + sound.md5 + "/get/";
	for (var t=0; t < sound.tags.length; t++) {
	    var tag = sound.tags[t];
	    console.log("mkdir " + tag);
	    console.log("wget -O tmp.wav " + file_url);
	    console.log("avconv -i tmp.wav -acodec pcm_s16le " + tag + "/" + name);
	    console.log("rm -f tmp.wav");
	}
    }
}
