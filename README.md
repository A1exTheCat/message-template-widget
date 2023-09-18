# Test job - Message Template Editor (React, Typescript)

#[Link](https://a1exthecat.github.io/message-template-widget/)https://a1exthecat.github.io/message-template-widget/

## Message Template Preview Widget

### Widget Requirements

1. **Inputs:**
   - `arrVarNames` [required]: An array of variable names.
   - `template` [optional]: The message template.
   - `callbackSave`: An asynchronous function for saving the template.

2. **Variable Handling:**
   - Based on the array of variables, a sub-widget consisting of variable name buttons enclosed in curly braces should be created. For example, "firstname" becomes "{firstname}".
   - Clicking on a variable button should add it to the last cursor position in the text input block or at the beginning of the template if the cursor hasn't been placed yet.

3. **[IF-THEN-ELSE] Button:**
   - There should be an [IF-THEN-ELSE] button added somewhere in the widget.
   - Clicking on the [IF-THEN-ELSE] button should split the current message template editing block into two blocks (text should also be split into two parts based on the last cursor position in the text input block). An [IF-THEN-ELSE] sub-widget is inserted between these blocks.

4. **[IF-THEN-ELSE] Sub-widget:**
   - Consists of 3 blocks: IF, THEN, and ELSE.
   - Users can write text in each of these blocks, add variables by clicking variable addition buttons, and add nested [IF-THEN-ELSE] widgets.
   - The THEN branch is executed if the IF condition results in a non-empty string; otherwise, the ELSE branch is executed.
   - There should be a DELETE button within any block that cancels the addition of this sub-widget, merging the blocks above and below it into one.

5. **Close Button:** Closes the widget. Implementation of a "save changes" dialog is optional.
6. **Preview Button:** Opens the message template preview widget.
7. **Save Button:** Calls `callbackSave` with the current template.
8. The message template format should be developed as part of this task, meeting the following criteria:
   - Serializes and deserializes into a string.
   - Has no side effects; any user-entered text other than variable names should be treated strictly as text.

9. There are no specific style requirements. Adding icons to buttons is optional. A clean and neat design is a plus.
10. The input area should automatically adjust in height to prevent scrollbars from appearing.

## Message Template Preview Widget

### Widget Requirements

1. **Inputs:**
   - `arrVarNames` [required]: An array of variable names.
   - `template` [required]: The message template.

2. The widget consists of three parts:
   - Non-editable area for viewing the generated message.
   - Input fields for variable values.
   - Close button.

3. The generated message should update in real-time as variable values are entered.
4. It should always be visually clear which variable has which value.
5. There are no specific style or design requirements. One of the possible designs is shown in the screenshots above.
6. The message generation based on the template should be encapsulated in a separate function.

## Message Generator Function

### Function Requirements

1. **Inputs:**
   - `template` [required]: The message template.
   - `values` [required]: Variable values (an object with the format `{name: value}`). Extra pairs of `name` and `value` should be ignored, and missing variables should be treated as empty values.

2. The function should return the generated message as a string.
3. The function should have no side effects and should not interpret user-entered text as operators.

## Overall Project Requirements

1. The project should be presented as an HTML page with a "Message Editor" button.
2. The task should be implemented using React and TypeScript without using UI frameworks. Using third-party libraries is possible but discouraged, except for the textarea auto-sizing feature.
3. Use the latest version of `create-react-app` for setting up the development environment.

## Mandatory Requirements for the Solution

1. Full functionality according to the outlined requirements.
2. No bugs or potential vulnerabilities.
3. No interface freezes (e.g., when placing the cursor in the input field and holding down a keyboard key).

## Install
make install

## Start
make start


