function NewComponent (props) {
    console.log('>>>>>>', props)
    return <div>NewComponent {props.name}</div>
}

export default NewComponent