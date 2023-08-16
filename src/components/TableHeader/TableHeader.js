import "./TableHeader.scss";
import sortIcon from "../../asset/Icons/sort-24px.svg";

function TableHeader({ tableSetting }) {
	return (
		<section className="table-header">
			<div className="table-header__wrapper">
				{tableSetting.map((headerSetting, index) => (
					<div
						className="table-header__single-wrapper"
						style={{
							"--tablet-width": headerSetting.width,
						}}
						key={index}
					>
						<h4 className="table-header__name">{headerSetting.name}</h4>
						<div className="table-header__sort-wrapper">
							<button className="table-header__sort-btn">
								<img
									src={sortIcon}
									alt="Sort the table column"
									className="table-header__sort-icon"
								/>
							</button>
						</div>
					</div>
				))}
				<div className="table-header__single-wrapper table-header__single-wrapper--action">
					<h4 className="table-header__name">ACTIONS</h4>
				</div>
			</div>
		</section>
	);
}

export default TableHeader;
