# React Address Form

In Visual Studio code, press `command+shift+v` (Mac) or `ctrl+shift+v` (Windows) to open a Markdown preview.

## Getting Started

Using your command line, you will need to navigate to the _react-exercises/12-address-form/_ folder, install all dependencies, and start the app.

```bash
cd react-exercises/12-address-form/
code . # if you would like to open this in a separate VSCode window
yarn install
yarn start
```

If, at any time, you need to stop the app, press `ctrl+c`.

## Instructions

The only file you need to change is _src/components/Address/Address.jsx_.

### Step 1 - Importing and Looping Through Data

You can a list of states and countires in the assets folder. Import these lists in _App.jsx_.

Find the states `<select></select>`. Loop through the states you imported. Do the same for countries with the countries' `<select></select>`. [Here is a refresher on select](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select) if you need it.

### Step 2 - Handling State

Each input field should be a controlled input. This means that the value should equal something in state and an event should update state properly with `this.setState()`.

When the user submits the form, stop the form from refreshing the page with `e.preventDefault()`.

### Step 3 - Displaying the Data

After the user has submitted the form, each field entry that the user has entered should be displayed to the user. Display each field inside an `<li></li>` tags where instructed. For example:

```html
<li>New York</li>
```
