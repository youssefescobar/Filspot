import {
    ArrowBackIosOutlined,
    ArrowForwardIosOutlined,
  } from '@mui/icons-material';
  import { useRef, useState } from "react";
  import List_item from "./list_item";
  import "./list.scss";
  
  const List = () => {
    const [isMoved, setIsMoved] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);
  
    const listRef = useRef();
  
    const handleClick = (direction) => {
      setIsMoved(true);
      let distance = listRef.current.getBoundingClientRect().x - 50;
      if (direction === "left" && slideNumber > 0) {
        setSlideNumber(slideNumber - 1);
        listRef.current.style.transform = `translateX(${230 + distance}px)`;
      }
      if (direction === "right" && slideNumber < 5) {
        setSlideNumber(slideNumber + 1);
        listRef.current.style.transform = `translateX(${-230 + distance}px)`;
      }
    };
    return (
      <div className="list">
        <span className="listTitle">Continue to watch</span>
        <div className="wrapper">
          <ArrowBackIosOutlined
            className="arrow left"
            onClick={() => handleClick("left")}
            style={{ display: !isMoved && "none" }}
          />
          <div className="cont" ref={listRef}>
            <List_item index={0} />
            <List_item index={1} />
            <List_item index={2} />
            <List_item index={3} />
            <List_item index={4} />
            <List_item index={5} />
            <List_item index={6} />
            <List_item index={7} />
            <List_item index={8} />
            <List_item index={9} />
          </div>
          <ArrowForwardIosOutlined
            className="arrow right"
            onClick={() => handleClick("right")}
          />
        </div>
      </div>
    );
  }
  export default List