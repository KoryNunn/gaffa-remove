# gaffa-remove

Remove action for [gaffa](https://github.com/gaffa-tape/gaffa-js). Remove a value from the model.

## Install:

    npm i gaffa-remove

## Add to gaffa:

    var Remove = require('gaffa-remove');

    gaffa.regeisterConstructor(Remove);

## Usage:

    var remove = new Remove();
    remove.target.binding = '[number]';

    // ... Assign the remove action to be triggered by another viewItem

# API

## Properties (instanceof Gaffa.Property)

### target (remove)

The location to remove the data

### DEPRECATED. Use action.target.cleans instead. cleans (get) default: false

Whether to mark the target model location as clean.