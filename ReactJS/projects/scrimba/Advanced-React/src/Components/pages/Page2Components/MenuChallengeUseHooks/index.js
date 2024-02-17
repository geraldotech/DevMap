/* 
Compounded Components w/ dot syntax
its up to you - vc decide, pode ajudar para menos poluição
*/
import Menu from './Menu'
import MenuButton from './MenuButton'
import MenuDropdown from './MenuDropdown'
import MenuItem from './MenuItem'

Menu.Button = MenuButton
Menu.Dropdown = MenuDropdown
Menu.Item = MenuItem


// unver the hood evertthing is JS is a object

export default Menu 