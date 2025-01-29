const menuNames = [
	{
		target: "common",
		nice: "Common",
		titleId: "0100000000001000",
	},
	{
		target: "ResidentMenu",
		theme: "home",
		web: "homemenu",
		nice: "Home Menu",
		titleId: "0100000000001000",
	},
	{
		target: "Entrance",
		theme: "lock",
		web: "lockscreen",
		nice: "Lockscreen",
		titleId: "0100000000001000",
	},
	{
		target: "MyPage",
		theme: "user",
		web: "userpage",
		nice: "User Page",
		titleId: "0100000000001013",
	},
	{
		target: "Flaunch",
		theme: "apps",
		web: "allapps",
		nice: "All Apps",
		titleId: "0100000000001000",
	},
	{
		target: "Set",
		theme: "set",
		web: "settings",
		nice: "Settings",
		titleId: "0100000000001000",
	},
	{
		target: "Notification",
		theme: "news",
		web: "news",
		nice: "News",
		titleId: "0100000000001000",
	},
	{
		target: "Psl",
		theme: "psl",
		web: "playerselect",
		nice: "Player Select",
		titleId: "0100000000001007",
	},
];

export const stripExtension = (string: string): string => {
	return string?.replace(/\.szs$/gi, "");
};

export const isTarget = (string: string): boolean => {
	return menuNames.some((menu) => menu.target === stripExtension(string));
};

export const isWeb = (string: string): boolean => {
	return menuNames.some((menu) => menu.web === string);
};

export const isNice = (string: string): boolean => {
	return menuNames.some((menu) => menu.nice === string);
};

export const isTheme = (string: string): boolean => {
	return menuNames.some((menu) => menu.theme === string);
};

export const toTarget = (string: string): string | null => {
	return menuNames.find((menu) => menu.theme === string || menu.web === string || menu.nice === string)?.target;
};

export const toWeb = (string: string): string | null => {
	return menuNames.find(
		(menu) => menu.target === stripExtension(string) || menu.theme === string || menu.nice === string
	)?.web;
};

export const toNice = (string: string): string | null => {
	return menuNames.find(
		(menu) => menu.target === stripExtension(string) || menu.theme === string || menu.web === string
	)?.nice;
};

export const toTheme = (string: string): string | null => {
	return menuNames.find(
		(menu) => menu.target === stripExtension(string) || menu.web === string || menu.nice === string
	)?.theme;
};

export const toTitleId = (string: string): string | null => {
	return menuNames.find(
		(menu) =>
			menu.target === stripExtension(string) ||
			menu.theme === string ||
			menu.web === string ||
			menu.nice === string
	)?.titleId;
};
