"use client";
import { useContext, createContext, useState } from "react";

const NavContext = createContext();

export const NavContextProvider = ({ children }) => {
	const [open, setOpen] = useState(false);

	const toggleOpen = () => {
		setOpen((prev) => !prev);
	};

	return (
		<NavContext.Provider value={{ open, setOpen, toggleOpen }}>
			{children}
		</NavContext.Provider>
	);
};

export const useNavContext = () => {
	return useContext(NavContext);
};
