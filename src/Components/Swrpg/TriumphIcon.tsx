import { ReactElement } from "react";
import { ReactComponent as Triumph } from "../../svg/sw-rpg/triumph.svg";

export const TriumphIcon = (props: { className?: string, fill?: string }): ReactElement => {
	return <Triumph fill={props.fill || "#FFFFFF"} />;
};
