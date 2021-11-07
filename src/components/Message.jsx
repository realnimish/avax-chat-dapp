import React from "react";
import { Row, Card } from "react-bootstrap";

// This is a functional component which renders the individual messages
export function Message( props ){
    return (
        <Row style={{ marginRight:"0px" }}>
            <Card  border="success" style={{ width:'80%', alignSelf:'center', margin:"0 0 5px " + props.marginLeft, float:"right", right:"0px" }}>
                <Card.Body>
                    <h6 style={{ float:"right" }}> 
                        { props.timeStamp } 
                    </h6>
                    <Card.Subtitle>
                        <b>
                            { props.sender }
                        </b>
                    </Card.Subtitle>
                    <Card.Text>
                        { props.data }
                    </Card.Text>
                </Card.Body>
            </Card>
        </Row>
    );
}