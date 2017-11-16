//Module to Display MetaData from Airplay Receiver MetaData Pipeline

Module.register("MMM-AirplayMeta",{

	defaults: {
		metaData: {
			Song: ["Test", "Test Again", "Blah"]
			Artist: ["Deexs", "Nuts", "Bliaah"]
		},
		updateInterval: 1000
	}

	getScripts: function() {
		return ["moment.js"];

	start: function() {
		Log.info('Starting module: ' + this.name);
		var self = this;
		setInterval(function() {
			self.updateDom(1000);
		}, this.config.updateInterval);
	},

	textArray: function() {
		var textToShow;

		textToShow = this.config.metaData.Song.slice(0);
		return textToShow;
	},

	numberInit: function() {
		var i = 0;
		
		if (i > 2) {
			i=0;
		} else {
			i++;
		}
		return i;
	},

	textSwitcher: function() {
		var song = this.textArray();
		var index = this.numberInit();

		return song[index];
	},

	// Override dom generator.
	getDom: function() {

		var metadataText = this.textSwitcher();
		var metadata =  document.createTextNode(metadataText); 
		var wrapper = document.createElement("div");
		wrapper.className = this.config.classes ? this.config.classes : "thin xlarge bright";
		wrapper.appendChild(metadata);

		return wrapper;
	}
});
