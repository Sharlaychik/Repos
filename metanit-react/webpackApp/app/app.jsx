var ReactDOM = require('react-dom');
var React = require('react');
var ItemsList = require('./components/ItemsList.jsx');
 
const propsValues = {
    title: "Список смартфонов",
    items: [
        "Samsung Galaxy Note20", 
        "Apple iPhone 12 Pro", 
        "Google Pixel 5", 
        "Huawei P40 Pro", 
        "OnePlus 8 Pro", 
        "Asus Zenfone 7 Pro"
    ]
};
 
ReactDOM.render(
    <ItemsList data={propsValues} />,
    document.getElementById("app")
)