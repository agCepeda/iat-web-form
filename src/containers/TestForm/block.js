import React, {useEffect, useState} from "react";
import ItemFormContainer from "../ItemForm";

const BlockForm = (props) => {
	const [block, setBlock] = useState({ items: [] });
	const [itemCount, setItemCount] = useState(0);
	const [isVisibleWaiting, setIsVisibleWaiting] = useState(false);
	const [answers, setAnswers] = useState([]);

	useEffect(() => {
		setBlock(props.block);
	}, [props.block])

	const onItemAnswered = (value, time, error) => {
		var newAnswers = [...answers, {  value, time, error }];
		setAnswers(newAnswers);

		if (itemCount + 1 < block.items.length) {
			setIsVisibleWaiting(true);
			setTimeout(() => {
				setItemCount(itemCount + 1);
				setIsVisibleWaiting(false);
			}, 200);
		} else if (props.onBlockFinished) {
			props.onBlockFinished(newAnswers);
		}
	}
	const renderWaiting = () => {
		return <div>WAITING...</div>;
	}

	const renderItemForm = () => {
		if (block == null) { return <div></div>; }
		if (block.items.length < 0) {}

		return (
		  <div>
			  <ItemFormContainer
				leftTitle={block.leftTitle}
				rightTitle={block.rightTitle}
				categoryRight={block.categoryRight}
				categoryLeft={block.categoryLeft}
				item={block.items[itemCount]}
				onItemAnswered={onItemAnswered}
			  />
		  </div>
		)
	}
	return isVisibleWaiting ? renderWaiting() : renderItemForm();
}

export default BlockForm;