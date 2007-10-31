var ufs = {
  init: function() {
    ufs.menu();
    ufs.forms();
  },

  forms: function() {
    var forms = document.getElementsByTagName('form');

    for(i=0; i<forms.length; i++) {
      if(forms[i].className.match(/\Wtogglecheckboxes\W/))
        continue;

      var button_parent = forms[i].getElementsByTagName('button')[0].parentNode;

      var all = document.createElement('a');
      all.setAttribute('onclick', 'ufs.toggleCheckbox(this)');
      all.setAttribute('href',    '#');
      all.appendChild(document.createTextNode('All'));

      var none = document.createElement('a');
      none.setAttribute('onclick', 'ufs.toggleCheckbox(this, "none")');
      none.setAttribute('href',    '#');
      none.appendChild(document.createTextNode('None'));

      var invert = document.createElement('a');
      invert.setAttribute('onclick', 'ufs.toggleCheckbox(this, "invert")');
      invert.setAttribute('href',    '#');
      invert.appendChild(document.createTextNode('Invert'));

      button_parent.appendChild(document.createTextNode('Checkboxes: '));
      button_parent.appendChild(all);
      button_parent.appendChild(document.createTextNode(' '));
      button_parent.appendChild(none);
      button_parent.appendChild(document.createTextNode(' '));
      button_parent.appendChild(invert);

    }
  },
  toggleCheckbox: function(node, mode) {
    if(mode == null) mode = 'all';

    while (node.nodeName != 'FORM') {
      if(node.parentNode)
        node = node.parentNode;
      else
        return;
    }

    var inputs = node.getElementsByTagName('input');
    for (var i = 0; i < inputs.length; i++) {
      var input = inputs[i];
      if (input.type == 'checkbox') {
        if (mode == 'all')
          input.checked = 'checked';
        else if (mode == 'invert')
          input.checked = input.checked ? '' : 'checked';
        else if (mode == 'none')
          input.checked = '';
      }
    }
  },

  menu: function () {
    // Fixes support for our drop-down menu in IE
    // Taken from http://www.alistapart.com/articles/dropdowns/
    if (document.all && document.getElementById) {
      var navRoot = document.getElementById("menulist");
      for (i=0; i<navRoot.childNodes.length; i++) {
        var node = navRoot.childNodes[i];
        if (node.nodeName == "LI") {
          node.onmouseover = function() {
            this.className += " over";
          }
          node.onmouseout = function() {
            this.className = this.className.replace(" over", "");
          }
        }
      }
    }
  },
}

window.onload = ufs.init;
