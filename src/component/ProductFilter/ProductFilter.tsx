import { TProps } from "./Types";
import classNames from "classnames";
import { Form } from "@component/Form";
import { RadioGroup } from "@component/Form/RadioGroupV1";
import { RadioGroup as RadioGroupV2 } from "@component/Form/RadioGroupV2";
import { RadioIcon } from "@component/Form/RadioIcon";
import { Select } from "@component/Form/Select";
import { Option } from "@component/Form/Select/Option";
import { gridType, sortBy, limit } from "@config/productFilter";


export const ProductFilter: React.FC <TProps> = ({ className, handlers, state, }: TProps): JSX.Element => {

	const classes = classNames ("product-filter", className);
	const { handleChangeGridType, handleChangeSortBy, handleChangeLimit, } = handlers;
	const { gridType: defaultGridType, sortBy: defaultSortBy, limit: defaultLimit, } = state;

	return (
		<section className={ classes }>
			<Form action="#" method="POST" className="product-filter__form">
				<div className="form__wrapper">
					<RadioGroupV2 name="type-grid-v2" onChange={ handleChangeGridType }>
						{
							(RadioIconInput) => (
								<>
									{
										Object.keys (gridType).map ( type => {

											if (type === "default") return null;

											const defaultChecked =
											type === defaultGridType || type === gridType.default;

											return <RadioIconInput
												icon={ gridType[type]}
												key={ type }
												defaultChecked={ defaultChecked }
												value={ type } />;
										})
									}
								</>
							)
						}
					</RadioGroupV2>
				</div>
				<div className="form__wrapper">
					<label>
						<Select className="product-filter__select" onChange={ handleChangeSortBy } defaultValue={ defaultSortBy }>
							<Option value="name">По имени</Option>
							<Option value="news">По новизне</Option>
							<Option value="popular">По популярности</Option>
						</Select>
					</label>
				</div>
				<div className="form__wrapper">
					<label>
						<Select className="product-filter__select" onChange={ handleChangeLimit } defaultValue={ defaultLimit }>
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