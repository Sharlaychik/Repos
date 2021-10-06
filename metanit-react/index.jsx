class Hello extends React.Component {
    render() {
        return <h1>Hello, React</h1>;
    }
}
ReactDOM.render(
    <Hello />,
    document.getElementById("app")
)