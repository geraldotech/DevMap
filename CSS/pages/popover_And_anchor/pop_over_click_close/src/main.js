// popover aberto by default
info.showPopover()

document.querySelector('.close_pop').onclick = function () {
  info.hidePopover()
  // abrir outro popover
  info2.showPopover()
}

document.querySelector('.close_pop2').onclick = function () {
  info2.hidePopover()
 
}
