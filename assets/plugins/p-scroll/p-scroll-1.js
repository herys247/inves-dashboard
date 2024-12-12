// ______________ PerfectScrollbar

const ps3 = new PerfectScrollbar('.notifications-menu', {
	useBothWheelAxes:true,
	suppressScrollX:true,
});

//const ps4 = new PerfectScrollbar('.sidebar-right', {
//	useBothWheelAxes:true,
//	suppressScrollX:true,
//});


//P-scrolling
const ps6 = new PerfectScrollbar('.cart-list', {
	useBothWheelAxes: true,
	suppressScrollX: true,
});

$('.tabs-menu-body').each(function () { const ps = new PerfectScrollbar($(this)[0]); });
// const ps5 = new PerfectScrollbar('.message-menu', {
// 	useBothWheelAxes:true,
// 	suppressScrollX:true,
// });