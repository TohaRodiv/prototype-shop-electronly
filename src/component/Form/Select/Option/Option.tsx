import { TProps } from "./Types";


export const Option: React.FC <TProps> = ({ children, value }: TProps): JSX.Element => {

	return (
		<option value={ value }>{ children }</option>
	);
};