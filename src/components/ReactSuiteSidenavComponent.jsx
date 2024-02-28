import { useState } from "react";
import "rsuite/dist/rsuite.min.css";
import { Nav, Sidenav } from "rsuite/";
import Home from "@rsuite/icons/legacy/Home"
import FileCodeO from "@rsuite/icons/legacy/FileCodeO"
import File from "@rsuite/icons/legacy/File"
import { Code } from "@rsuite/icons";
//import { useHistory } from 'react-router-dom'; // Import useHistory from react-router-dom
import { useNavigate } from 'react-router-dom';

export default function App() {
const [expand, setExpand] = useState(true);
const [activeKey, setActiveKey] = useState("1");

//const history = useHistory(); // Get history object from react-router-dom
const navigate = useNavigate();


const handleHomePage = () => {
    // Call listemployee function or navigate to the listemployee page
    // Example: listemployee();
    //history.push('/'); // Navigate to the listemployee page
    navigate('/');
};

const handleListEmployee = () => {
    // Call listemployee function or navigate to the listemployee page
    // Example: listemployee();
    //history.push('/'); // Navigate to the listemployee page
    navigate('/employees');
};

return (
	<center>
	<div>
		<div style={{ marginTop: 20, width: 240 }}>
		<Sidenav expanded={expand} defaultOpenKeys={["3", "4"]}>
			<Sidenav.Body>
			<Sidenav.Toggle
				expanded={expand}
				onToggle={(expanded) => setExpand(expanded)}
			/>
			<Nav activeKey={activeKey} onSelect={setActiveKey}>
				<Nav.Item eventKey="1" icon={<Home />} onClick={handleHomePage}>
				Home
				</Nav.Item>
				<Nav.Menu placement="rightStart" eventKey="3"
				title="Tutorials" icon={<File />}>
				<Nav.Item eventKey="3-1" onClick={handleListEmployee}>List Employees</Nav.Item>
				<Nav.Item eventKey="3-2">Web Tech</Nav.Item>
				<Nav.Item eventKey="3-3">Data Science</Nav.Item>
				</Nav.Menu>
				<Nav.Menu placement="rightStart" eventKey="4"
				title="Practice" icon={<Code/>}>
				<Nav.Item eventKey="4-1">Problem of the Day</Nav.Item>
				<Nav.Item eventKey="4-2">Company wise</Nav.Item>
				</Nav.Menu>
				<Nav.Menu placement="rightStart" eventKey="5"
				title="Algorithms" icon={<FileCodeO/>}>
				<Nav.Item eventKey="4-1">Searching</Nav.Item>
				<Nav.Item eventKey="4-2">Sorting</Nav.Item>
				<Nav.Item eventKey="4-3">Greedy</Nav.Item>
				</Nav.Menu>
			</Nav>
			</Sidenav.Body>
		</Sidenav>
		</div>
	</div>
	</center>
);
}
