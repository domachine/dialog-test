
/**
 * Module dependencies.
 */

var dialog = require('dialog')
   , query = require('query')
   , domify = require('domify')
   , template = domify(require('./template'));

/**
 * Represents a first example dialog.
 */

function FirstDialog() {
  this.el = query('#first-form', template);
}

/**
 * Show the dialog.
 *
 * @return {Dialog} for chaining
 */

FirstDialog.prototype.show = function(){
  console.log('show first');
  return dialog('First dialog', this.el)
    .closable()
    .overlay()
    .show();
};

/**
 * Represents second example dialog.
 */

function SecondDialog() {
  this.el = query('#second-form', template);
}

/**
 * Show the dialog.
 *
 * @return {Dialog} for chaining
 */

SecondDialog.prototype.show = function(){
  console.log('show second');
  return dialog('Second dialog', this.el)
    .closable()
    .overlay()
    .show();
};

// create the dialogs

var firstDialog = new FirstDialog();
var secondDialog = new SecondDialog();

// show the first

firstDialog
  .show()
  .on('hide', function(){

    // and the second on hide

    secondDialog
      .show()
      .on('hide', function(){

        // last show the first again to demonstrate the content is the
        // same as before

        firstDialog.show();
      });
  });
