# Danceflow

> [!NOTE]  
> None of this is implemented yet.

The ultimate [Neovim](https://github.com/neovim/neovim) alternative for VSCode. Custom modes, key bindings, and a clean
interface—forked from [Dance](https://github.com/71/dance), inspired by [Helix](https://github.com/helix-editor/helix).

## Features
- 🎯 **No touching the mouse** • Pure keyboard efficiency
- ✨ **Beautiful Zen interface** • Distraction-free flow state
- 🚀 **Quick Scripting and Macros** • Automate your workflow
- 🌟 **Teleport through your codebase** • Lightning-fast navigation
- 🎓 **Easy to learn** • Natural key mappings
- 🎹 **Modal editing perfected** • Move, modify, select, inspect
- 🔮 **Smart selections** • Multi-cursor magic at your fingertips

## Modes
- **Move mode**: Navigate with vim-like motions (`h`, `j`, `k`, `l`, etc.)
- **Modify mode**: Write and edit code
- **Select mode**: Change your selection
- **Inspect mode**: Explore code details with definitions, references, and more.

## Key Bindings

### Editor

`esc` Return to move mode

#### Tool Panels

`⇧1`/`⎈⇧g` Toggle git

`⇧2`/`⎈⇧e` Toggle explorer

`⇧3`/`⎈⇧c`/`⎈⎇i` Toggle copilot chat

`⇧4`/`⎈⎇⇧c`/`⎈⎇⇧i` Toggle copilot edits

`⇧5` Toggle search

`⇧7`/`⎈⇧d` Toggle debugger

`⇧8`/`⎈⇧x` Toggle extensions

#### Windows

`⎈p` Pop this tab out into a new window

`⎈⇧p` Join this tab back

`⎈m` Make one more window

#### Search

`⎈⇧f` Search codebase

`⎈t` Search symbol

#### Tabs

`⎈tab` Switch tab forwards, `⎈⇧tab` backwards

`⎈w` Close tab

#### Files

`⎈s` Save file 81

`⎈o` Open a file/folder

`⎈r` Switch to recent project

`⎈g` Jump to line

`⎈h` Switch between header and source file

`⎈⇧o` Open a new temporary file


### Movement

#### Basic

`h` Left

`j` Down

`k` Up

`l` Right

#### Words

`w` Select ahead until next word

`e` Select ahead to word end

`b` Select back to word start

`g` Get (select & copy) word, `⇧g` non-whitespace

`⇧w` Select ahead until next non-whitespace, `⇧e` whitespace

`⇧b` Select back until whitespace

#### Characters

`f◌` Select ahead to ◌, `⇧f◌` back to ◌

`t◌` Select ahead until ◌, `⇧t◌` back until ◌

#### Lines & Page

72 `x` Select line below, `⇧x` above

48 `⎈d`/`⎈⇧u` Halfpage down, `⎈u`/`⎈⇧d` up

45 `z` Toggle fold at cursor

#### Search

`⎈f` Search

`⎈⎇f` Search and Replace

`n` Next search result, `⇧n` previous result

#### Selection

`⎈a` Select all

`;` Clear selections

`v⌨` Visually select

`⇧;` Switch cursor side

`⎈n` Select next ocurrence of selection, `⎈⇧n` previous ocurrence

`m￼` Select object

`⇧-` Trim whitespaces from selection

`⎇c` Copy selections to below, `⎇⇧c` above

#### Multiselection

`s` Select all regex matches in selection

`⎇s` Split selection for lines

`⇧k` Keep selections matching regex

`⇧m` Merge selections 

`⇧s` Split by delimiter regex

#### Jumppoints

`'` Create Jumppoint

`[` To last Jumppoint, `]` next Jumppoint

### Coding

#### Delete

`d`/`⎈x` Cut, `⎈d`/`del`/`backspace` Delete

`⇧d` Cut word, `⎈⇧d`/`⎈del`/`⎈backspace` Delete word

`⎇d` Cut line, `⎈⎇⇧d` Delete line

#### Paste

`p`/`⎈v` Paste before, `⇧p`/`⎈⇧v` after

`⎇p` Dublicate line to below, `⎇⇧p` above

#### Undo/Redo

`u`/`⎈z`/`⎈⇧y` Undo

`⇧u`/`⎈⇧z`/`⎈y` Redo

#### Insert

`i⌨` Insert ⌨ before selection

`a⌨` Append ⌨ after selection

`⇧i⌨` Insert ⌨ at line start

`⇧a⌨` Append ⌨ at line end

`o⌨` Add ⌨ as newline below, `⇧o⌨` above

#### Replace

`c⌨` Change seletion to ⌨ after Copy, `⎈⇧r` without copying

`r◌` Replace each character with ◌

`⇧r` Replace with clipboard after Copy, `⎈⇧r` without copying

#### Lines

`⎇j` move line down, `⎇k` up

`tab` Indent, `⇧tab` Unindent

`⇧j` Join lines

`-` Remove empty lines from selection

#### Spacing

`enter` Add space before selection, `⇧enter` after selection

`⎇space` Add space before selection, `⎇⇧space` after selection

#### Formatting

`⇧c` Comment selected lines (toggle)

`"〈〉` Surround in 〈〉

`=` Format selection

`⎇=` Switch case, `⎈=` Convert to lowercase, `⎈⇧=` uppercase

#### Macros

`q` Execute this macro

`.` Repeat change over here

#### Other

`⎈up`/`⎈k` increment number, `⎈down`/`⎈j` decrement number

`⎇⇧]` Cycle selection content forward, `⎇⇧[` backward

### Interacting

`y`/`⎈c` Copy

`space` Inspect

#### Repeat

`⇧q` Record a macro (toggle)

`⎈q` Load a macro

`⎈⇧q` Save a macro

`[0-9]`* `🗲` Run 🗲 this many times


### Inspecting

#### Go to

`f` Go to definition

`t` Go to type definition

`z` Go to implementations

`g` Go to references

#### Refator

`r` Rename

`⇧r` Rename to clipboard

`space` Quick Fix if available

`e` Inspect next problem, `⇧e` previous problem

#### Copy

`y`/`⎈c` Copy the symbol

`⇧y`/`⎈⇧c` Copy the symbol info

### Menus

`h` Left

`j` Down

`k` Up

`l` Right

#### Explorer

`a` Create file, `⇧a` folder

`r`/`F2` Rename

## Zen philosophy

We remove most the fuss from your view. No split panes or distractions.
It is the window manager's job to take care of panes. Use `⎈p` and multiple windows.

## Customization

Danceflow is designed to work out of the box with sensible defaults, but you can customize
key bindings in your VSCode settings.