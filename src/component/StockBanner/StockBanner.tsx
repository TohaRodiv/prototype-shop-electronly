import { TProps } from "./Types";
import classNames from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";


export const StockBanner: React.FC <TProps> = ({ promotions, className }: TProps): JSX.Element => {

	const classes = classNames ("promotions", className);
	return (
		<Swiper className={ classes }>
			{
				promotions.map ( ({ id, image, title }) => (
					<SwiperSlide  key={ id }>
						<img src={ image} alt={ title} />
					</SwiperSlide>
				))
			}
		</Swiper>
	);
};