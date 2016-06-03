String.prototype.upperCaseFirstChar = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

function capitalize(s) {
	var first_char = /\S/;
	return s.replace(first_char, function(m) {
		return m.toUpperCase();
	});
}