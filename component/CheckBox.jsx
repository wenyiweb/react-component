export default class CheckBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled: props.disabled,
            checked: props.checked,
        };
    }
    
    checkedChange(e){
        this.setState({
            checked: e.target.checked
        });
        if(this.props.onChange) this.props.onChange(e, this.props.storeValue);
    }

    render() {
        return ( 
            <label>
                <input type="checkbox" disabled={this.state.disabled} checked={this.state.checked} onChange={this.checkedChange.bind(this)}/>
                {this.props.children}
            </label>
        );
    }
}