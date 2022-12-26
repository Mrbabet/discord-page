let translator = {
	_data: null,
	_translate_elements: null,
	_current_language: 'pl',

	getLang: function(new_language) {
		return translator._current_language
	},

	setLang: function(language) {
		for (let i = 0; i < translator._translate_elements.length; i++) {
			const key = translator._translate_elements[i].getAttribute('lang-key')
			const attribute = translator._translate_elements[i].getAttribute('lang-attribute')

			try {
				var translated_text = translator._data.translations[key][language]
			}

			catch (error) {
				console.error('translator: Key', "'" + key + "'", 'is not in JSON file')
			}

			if (attribute) {
				translator._translate_elements[i].setAttribute(attribute, translated_text)
			}

			else {
				translator._translate_elements[i].innerHTML = translated_text
			}
		}

		document.documentElement.lang = language
		translator._current_language = language
	},

	loadTranslations: function(filename) {
		let request = new XMLHttpRequest()

		request.overrideMimeType('application/json')
		request.open('GET', filename, true)
		request.onreadystatechange = function() {
			if (request.readyState == 4 && request.status == '200') {
				translator._data = JSON.parse(request.responseText)
				translator._translate_elements = document.querySelectorAll('[lang-key]') // Get all elements with a translate key
				translator._current_language = translator._data.default_language || 'pl'

				translator.setLang(translator._current_language)
			}
		}

		request.send(null)
	}
}
