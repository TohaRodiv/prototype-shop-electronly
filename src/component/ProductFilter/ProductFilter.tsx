import { TProps } from "./Types";
import classNames from "classnames";
import { Form } from "@component/Form";
import { RadioGroup } from "@component/Form/RadioGroupV1";
import { RadioIcon } from "@component/Form/RadioIcon";
import { Select } from "@component/Form/Select";
import { Option } from "@component/Form/Select/Option";


export const ProductFilter: React.FC <TProps> = ({ className, handlers, state, }: TProps): JSX.Element => {

	const classes = classNames ("product-filter", className);
	const { handleChangeGridType, handleChangeSortBy, handleChangeLimit, } = handlers;
	const { gridType, sortBy, limit, } = state;

	return (
		<section className={ classes }>
			<Form action="#" method="POST" className="product-filter__form">
				<div className="form__wrapper">
					<RadioGroup className="product-filter__type-grid-filter type-grid-filter">
						<RadioIcon
							name="type-grid"
							value="grid"
							icon="table"
							className="type-grid-filter__label"
							onChange={ handleChangeGridType }
							checked={ gridType === "grid" } />
						<RadioIcon
							name="type-grid"
							value="list" 
							icon="list"
							className="type-grid-filter__label"
							onChange={ handleChangeGridType }
							checked={ gridType === "list" } />
						<RadioIcon
							name="type-grid"
							value="block"
							icon="square"
							className="type-grid-filter__label"
							onChange={ handleChangeGridType }
							checked={ gridType === "block" } />
					</RadioGroup>
				</div>
				<div className="form__wrapper">
					<label>
						<Select className="product-filter__select" onChange={ handleChangeSortBy } defaultValue={ sortBy }>
							<Option value="name">По имени</Option>
							<Option value="news">По новизне</Option>
							<Option value="popular">По популярности</Option>
						</Select>
					</label>
				</div>
				<div className="form__wrapper">
					<label>
						<Select className="product-filter__select" onChange={ handleChangeLimit } defaultValue={ limit }>
							<Option value="6">6</Option>
							<Option value="12">12</Option>
							<Option value="24">24</Option>
							<Option value="48">48</Option>
						</Select>
					</label>
				</div>
			</Form>
		</section>
	);
};