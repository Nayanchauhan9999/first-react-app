import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import SearchIcon from "@mui/icons-material/Search";
import SplitscreenIcon from "@mui/icons-material/Splitscreen";
import GridViewIcon from "@mui/icons-material/GridView";
const Navbar = (props) => {
    return (
        <div
            className="d-flex align-items-center justify-content-between "
            style={{ backgroundColor: "#ece9e9" }}
        >
            <div className="d-flex align-items-center">
                <MenuIcon style={{ fontSize: 40 }} />
                <TextSnippetIcon style={{ fontSize: 40, color: "orange" }} />
                <h3 className="mb-0 p-3">Keep</h3>
            </div>
            <div className="d-flex align-items-center" role="button">
                <input
                    type="text"
                    className="p-1"
                    style={{
                        outline: "none",
                        border: "1px solid grey",
                        borderRight: "none",
                        width: "100%",
                    }}
                />
                <SearchIcon
                    titleAccess="Search"
                    className="icon"
                    style={{
                        border: "1px solid grey",
                        fontSize: 35,
                        boxSizing: "border-box",
                        borderLeft: "none",
                        color: "grey",
                        backgroundColor: "white",
                    }}
                />
                <SplitscreenIcon
                    titleAccess="List View"
                    className="m-2 icon"
                    style={{ fontSize: 30, color: "grey" }}
                />
                <GridViewIcon
                    titleAccess="Grid View"
                    className="m-2 icon"
                    style={{ fontSize: 30, color: "grey" }}
                />
            </div>
        </div>
    );
};
const Content = (props) => {
    const [state, setState] = useState(false);
    const [input, setInput] = useState({
        title: "",
        content: "",
    });
    const [click, setClick] = useState([]);
    const expand = (event) => {
        setState(true);
    };
    const cancel = () => {
        setState(false);
        setInput((value) => {
            return {
                title: "",
                content: ""
            }
        })
    };
    const onchange = (event) => {
        let value = event.target.value;
        let name = event.target.name;
        setInput((preVal) => {
            return {
                ...preVal,
                [name]: value,
            };
        });
    };
    const add = () => {
        setClick((preVal) => {
            return [...preVal, input]
        })
        setState(false)
        setInput((value) => {
            return {
                title: "",
                content: ""
            }
        })
    }
    return (
        <React.Fragment>
            <div className="d-flex flex-column align-items-center container mt-4">
                <input
                    type="text"
                    className="w-75 border p-2"
                    style={{ outline: "none" }}
                    placeholder="Title"
                    onClick={expand}
                    id="title"
                    onChange={onchange}
                    name="title"
                    value={input.title}
                />
                {state ? (
                    <textarea
                        name="content"
                        className="w-75 border border-top-0 p-2"
                        placeholder="Content"
                        style={{ outline: "none" }}
                        onChange={onchange}
                        value={click.content}
                    ></textarea>
                ) : null}
                <div>
                    {state ? <button onClick={add}> ➕ </button> : null}
                    {state ? <button onClick={cancel}>Cancel</button> : null}
                </div>
            </div>
            <div style={{
                width: "100%",
                boxSizing: "border-box",
                marginTop: "3vh",
                height: "100vh",
                overflow: "auto",
                alignItems: "baseline"
            }}>
                {click.map((value, index) => {
                    return (
                        <div key={index} style={{
                            padding: "10px",
                            boxSizing: "border-box",
                            maxHeight: "100vh",
                            border: "1px solid yellow",
                            overflow: "hidden",
                            borderRadius: "10px",
                            overflowWrap: "break-word",
                            margin: "2vh auto",
                            width: "90%"
                        }}>
                            <h4> {value.title} </h4>
                            <p> {value.content} </p>
                        </div>
                    )
                })}
            </div>
        </React.Fragment>
    );
};
function Component22() {
    return (
        <React.Fragment>
            <hr />
            <h2>Google Keep Clone : Component22</h2>
            <Navbar />
            <Content />
            <hr />
        </React.Fragment>
    );
}
export { Component22 };
