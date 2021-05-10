const menuNames = [
	{
		target: "common",
		nice: "Home Menu Common",
	},
	{
		target: "ResidentMenu",
		theme: "home",
		web: "homemenu",
		nice: "Home Menu",
	},
	{
		target: "Entrance",
		theme: "lock",
		web: "lockscreen",
		nice: "Lockscreen",
	},
	{
		target: "MyPage",
		theme: "user",
		web: "userpage",
		nice: "User Page",
	},
	{
		target: "Flaunch",
		theme: "apps",
		web: "allapps",
		nice: "All Apps",
	},
	{
		target: "Set",
		theme: "set",
		web: "settings",
		nice: "Settings",
	},
	{
		target: "Notification",
		theme: "news",
		web: "news",
		nice: "News",
	},
	{
		target: "Psl",
		theme: "psl",
		web: "playerselect",
		nice: "Player Select",
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
