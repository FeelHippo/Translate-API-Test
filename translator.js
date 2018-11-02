"use strict";

// Imports the Google Cloud client library
const {API_Translate} = require('@google-cloud/translate');                           

const  TranslateService = {};													
const  translate = new API_Translate({
  keyFilename: './src/translator.conf.json',                                  
});


TranslateService.translateText = 
					function (content, targetLang, callback (err, response)=> {

	var calls = [];
	const content_conv = content.split(" ");
	
const results = async() => {
	for (i = 0; i < content_conv.length; i++ ) {

		const translatedWord = await translate(content_conv[i], targetLang);
		calls.push(translatedWord);
		if (calls[i]) return callback(null, response[0]);
		};
	};
	
};

module.exports = results;



