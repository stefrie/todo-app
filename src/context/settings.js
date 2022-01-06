import React, { useState } from "react";

export const SettingsContext = React.createContext();

function SettingsProvider({ children }) {

	const [pagination, setPagination] = useState(4);
	const [sort, setSort] = useState('Assigned To');
	const [hide, setHide] = useState(false);

	const values = {
		pagination: 4,
		sort: 'Assigned To',
		hide: false
	}

	return (
		<SettingsContext.Provider value={values}>
			{children}
		</SettingsContext.Provider>
	)
}

export default SettingsProvider;
