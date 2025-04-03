# Danceflow

The ultimate Neovim alternative for VSCode. Custom modes, key bindings, and a clean
interface—forked from [Dance](https://github.com/71/dance), inspired by Helix.

## Features
- 🎯 No touching the mouse - Pure keyboard efficiency
- ✨ Beautiful Zen interface - Distraction-free flow state
- 🚀 Quick Scripting and Macros - Automate your workflow
- 🌟 Teleport through your codebase - Lightning-fast navigation
- 🎓 Easy to learn - Natural key mappings
- 🎹 Modal editing perfected - Move, modify, select, inspect
- 🔮 Smart selections - Multi-cursor magic at your fingertips

## Modes
- **Move mode**: Navigate with vim-like motions (`h`, `j`, `k`, `l`, etc.)
- **Modify mode**: Write and edit code
- **Select mode**: Change your selection
- **Inspect mode**: Explore code details with definitions, references, and more.

## Key Bindings

### Always

`esc` Return to move mode

`⇧1`/`⎈⇧g` Toggle git

`⇧2`/`⎈⇧e` Toggle explorer

`⇧3`/`⎈⇧c`/`⎈⎇i` Toggle copilot chat

`⇧4`/`⎈⎇⇧c`/`⎈⎇⇧i` Toggle copilot edits

`⇧5`/`⎈⇧d` Toggle debugger

`⇧6`/`⎈⇧x` Toggle extensions

`⇧8` Toggle search

`⎈⇧s` Search codebase

`⎈tab` Switch tab forwards, `⎈⇧tab` backwards

`⎈t` Search codebase for symbol

`⎈p` Pop this tab out into a new window

`⎈⇧p` Join this tab back

`⎈o` Open a file/folder

`⎈r` Switch to recent project

`⎈s` Save file

`⎈g` Jump to line

`⎈w` Close tab


### Change Code

`d`/`⎈x` Cut, `⎈d`/`del`/`backspace` Delete

`⇧d` Cut word, `⎈⇧d`/`⎈del`/`⎈backspace` Delete word

`⎇d` Cut line, `⎈⎇⇧d` Delete line

`p`/`⎈v` Paste

`⇧p`/`⎈⇧v` Paste after selection

`u`/`⎈z`/`⎈⇧y` Undo

`⇧u`/`⎈⇧z`/`⎈y` Redo

`i⌨` Insert ⌨ before selection

`a⌨` Append ⌨ after selection

`⇧i⌨` Insert ⌨ at line start

`⇧a⌨` Append ⌨ at line end

`c⌨` Change seletion to ⌨ after Copy, `⎈⇧r` without copying

`r◌` Replace each character with ◌

`⇧r` Replace with clipboard after Copy, `⎈⇧r` without copying

`o⌨` Add ⌨ as newline below, `⇧o⌨` above

`tab` Indent, `⇧tab` Unindent

`⎇space` Add space before selection, `⎇⇧space` after selection

`⇧j` Join lines

`-` Remove empty lines in selection

`⇧c` Comment selected lines

`"` Surround

`=` Format selection

`⎇=` Switch case, `⎈=` Convert to lowercase, `⎈⇧=` uppercase

`⎈up`/`⎈k` increment number, `⎈down`/`⎈j` decrement number

`q` Execute this macro

`.` Repeat change over here


### Move around

`h` Left

`j` Down

`k` Up

`l` Right

`w` Select ahead until next word

`e` Select ahead to word end

`b` Select back to word start

`g` Get (select & copy) word, `⇧g` non-whitespace

`⇧w` Select ahead until next non-whitespace, `⇧e` whitespace

`⇧b` Select back until whitespace

`f◌` Select ahead to ◌, `⇧f◌` back to ◌

`t◌` Select ahead until ◌, `⇧t◌` back until ◌

`x` Select line

`;` Clear selections

`⇧;` Switch cursor side

`⎈f` Search

`n` Next search result, `⇧n` previous result

`⎈n` Select next ocurrence of selection, `⎈⇧n` previous ocurrence

`v⌨` Visually select

`⎇c` Copy selections to below

`⎇⇧c` Copy selections to above

`s` Select all regex matches in selection

`⎇s` Split selection for lines

`⇧s` Split by delimiter regex

`⇧m` Merge selections 

`⎇⇧]` Cycle selection content forward, `⎇⇧[` backward

`'` Create Jumppoint

`[` To last Jumppoint, `]` next Jumppoint

`m￼` Select object

`⎈d`/`⎈⇧u` Halfpage down

`⎈u`/`⎈⇧d` Halfpage up

`⇧k` Keep selections matching regex

`⎈a` Select all

`⇧-` Trim whitespaces from selection


### Interact

`y`/`⎈c` Copy

`[0-9]`* `🗲` Run 🗲 this many times

`⇧q` Record a macro (toggle)

`⎈q` Load a macro

`⎈⇧q` Save a macro

`space` Inspect


### Inspect

`f` Go to definition

`t` Go to type definition

`z` Go to implementations

`g` Go to references

`r` Rename

`⇧r` Rename to clipboard

`y`/`⎈c` Copy the symbol

`⇧y`/`⎈⇧c` Copy the symbol info

`space` Quick Fix if available


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

## License

MIT
