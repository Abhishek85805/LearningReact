const customRender = (reactElement, rootContainer) => {
    const elem = document.createElement(reactElement.type);
    elem.innerHTML = reactElement.children;
    for(const prop in reactElement.props){
        elem.setAttribute(prop, reactElement.props[prop]);
    }
    rootContainer.appendChild(elem);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'www.google.com',
        target: '_blank'
    },
    children: 'Visit google'
}

const rootContainer = document.querySelector("#root");
customRender(reactElement, rootContainer);