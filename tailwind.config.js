/** @type {import('tailwindcss').Config} */
export const content = ['"./app/*.{html, js}"'];
export const theme = {
	extend: {
		colors: {
			primary: "#054C73",
			secondary: "#DFE9F4",
			mini_section: "#F2F5FF",
			font: "#333333",
		},
	},
};
export const plugins = [require("daisyui")];
export const daisyui = {
	theme: ["light", "dark"],
};
