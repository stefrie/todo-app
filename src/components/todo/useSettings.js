import React, { useContext } from "react";
import { SettingsContext } from "../../context/settings.js";

function UserSettings() {
	let settings = useContext(SettingsContext);
	return (
		<div>
			<label htmlFor="item count">Item Count: </label>
			<input
				id="item count"
				type="number"
				name="item count"
				min="1"
				value={settings.itemPref}
				max="10"
				onChange={(e) => settings.setItemPref(e.target.value)}
			/>

			<label htmlFor="display completed"> Display Completed</label>
			<input
				type="checkbox"
				id="display completed"
				name="display completed"
				checked={settings.dispComp}
				onClick={() => {
					settings.setDisComp();
				}}
			/>
		</div>
	);
}

export default UserSettings;