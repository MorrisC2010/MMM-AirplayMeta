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
		var i = 0;
		var textToShow;

		if (i >= 3) {
			i=0;
		} else {
			i++;
		}
		textToShow = this.config.metaData.Song(i);
		return textToShow;
	},

	// Override dom generator.
	getDom: function() {

		var metadataText = this.textArray();
		var metadata =  document.createTextNode(metadataText); 
		var wrapper = document.createElement("div");
		wrapper.appendChild(metadata);

		return wrapper;
	}
});
