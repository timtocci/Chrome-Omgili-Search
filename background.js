chrome.omnibox.onInputChanged.addListener(function (text, suggest) {
	suggest([{
				content : encodeURIComponent(text) + "&tf=day",
				description : "Search Omgili in the past day (default)"
			}, {
				content : encodeURIComponent(text) + "&tf=week",
				description : "Search Omgili in the past week"
			}, {
				content : encodeURIComponent(text) + "&tf=month",
				description : "Search Omgili in the past month"
			}, {
				content : encodeURIComponent(text) + "&tf=year",
				description : "Search Omgili in the past year"
			}, {
				content : encodeURIComponent(text) + "&tf=any",
				description : "Search Omgili with no time frame"
			}
		]);
});
chrome.omnibox.onInputEntered
.addListener(function (text) {
	var createProperties = {
		url : "http://omgili.com/search?q="
		 + text
	};
	chrome.tabs.create(createProperties);
});
chrome.omnibox.onInputStarted
.addListener(function () {
	var suggestion = {
		description : "Omgili Message Board Search query: %s "
	}
	chrome.omnibox.setDefaultSuggestion(suggestion);
});
