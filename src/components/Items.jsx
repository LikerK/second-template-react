import Row from "react-bootstrap/Row";
import Item from "./Item";

const Items = () => {
  // example grid bootstrap
  return (
    <Row xs={1} sm={1} md={2} lg={3} xl={4} xxl={6} className="gy-2">
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </Row>
  );
};

export default Items;
